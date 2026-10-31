[Windows.Globalization.Language, Windows.Globalization, ContentType=WindowsRuntime] | Out-Null
[Windows.Media.Ocr.OcrEngine, Windows.Foundation, ContentType=WindowsRuntime] | Out-Null
[Windows.Graphics.Imaging.BitmapDecoder, Windows.Foundation, ContentType=WindowsRuntime] | Out-Null
[Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime] | Out-Null

function Await($task, $asResult) {
    while (-not $task.IsCompleted) { Start-Sleep -Milliseconds 20 }
    if ($asResult) { return $task.Result }
}

$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
if (-not $engine) {
    $lang = New-Object Windows.Globalization.Language("en-US")
    $engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromLanguage($lang)
}

$baseDir = "d:\Projects\npo-jibb\lithon\data-sources"
$outputFile = "d:\Projects\npo-jibb\lithon\scratch\extracted_presentation_data.md"
$subDirs = Get-ChildItem -Directory $baseDir

$md = "# Extracted Data from Lith-On Presentation Slide Decks`n`n"

foreach ($dir in $subDirs) {
    $md += "## Slide Deck: $($dir.Name)`n`n"
    Write-Host "Processing $($dir.Name)..."
    
    # Sort files naturally by extracting numbers if possible
    $files = Get-ChildItem -Path $dir.FullName -Filter "*.jpg" | Sort-Object { 
        if ($_.BaseName -match '(\d+)$') { [int]$matches[1] } else { $_.Name } 
    }
    
    foreach ($file in $files) {
        $storageFileTask = [Windows.Storage.StorageFile]::GetFileFromPathAsync($file.FullName)
        $storageFile = Await $storageFileTask $true
        
        $streamTask = $storageFile.OpenAsync([Windows.Storage.FileAccessMode]::Read)
        $stream = Await $streamTask $true
        
        $decoderTask = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)
        $decoder = Await $decoderTask $true
        
        $bitmapTask = $decoder.GetSoftwareBitmapAsync()
        $bitmap = Await $bitmapTask $true
        
        $ocrTask = $engine.RecognizeAsync($bitmap)
        $ocrResult = Await $ocrTask $true
        
        $lines = ($ocrResult.Lines | ForEach-Object { $_.Text }) -join "`n"
        
        $md += "### Slide: $($file.Name)`n"
        $md += "````text`n$lines`n````n`n"
        
        $bitmap.Dispose()
        $stream.Dispose()
    }
}

[System.IO.File]::WriteAllText($outputFile, $md, [System.Text.Encoding]::UTF8)
Write-Host "Extraction complete: $outputFile"
