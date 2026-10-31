[Windows.Globalization.Language, Windows.Globalization, ContentType=WindowsRuntime] | Out-Null
[Windows.Media.Ocr.OcrEngine, Windows.Foundation, ContentType=WindowsRuntime] | Out-Null
[Windows.Graphics.Imaging.BitmapDecoder, Windows.Foundation, ContentType=WindowsRuntime] | Out-Null
[Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime] | Out-Null

function Wait-WinRT($op) {
    while ($op.Status -eq 0) { Start-Sleep -Milliseconds 20 }
    if ($op.Status -ne 1) { throw "Operation failed with status: $($op.Status) - $($op.ErrorCode)" }
    return $op.GetResults()
}

$path = "D:\Projects\npo-jibb\lithon\data-sources\Lith-On Corporate Deck\LITHON Corporate Deck_page-0001.jpg"
$fileOp = [Windows.Storage.StorageFile]::GetFileFromPathAsync($path)
$file = Wait-WinRT $fileOp

$streamOp = $file.OpenAsync([Windows.Storage.FileAccessMode]::Read)
$stream = Wait-WinRT $streamOp

$decoderOp = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)
$decoder = Wait-WinRT $decoderOp

$bitmapOp = $decoder.GetSoftwareBitmapAsync()
$bitmap = Wait-WinRT $bitmapOp

$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
$ocrOp = $engine.RecognizeAsync($bitmap)
$result = Wait-WinRT $ocrOp

Write-Host "WINRT OCR SUCCESS!"
Write-Host "Text:"
Write-Host $result.Text
