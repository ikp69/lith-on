[Windows.Globalization.Language, Windows.Globalization, ContentType=WindowsRuntime] | Out-Null
[Windows.Media.Ocr.OcrEngine, Windows.Foundation, ContentType=WindowsRuntime] | Out-Null
[Windows.Graphics.Imaging.BitmapDecoder, Windows.Foundation, ContentType=WindowsRuntime] | Out-Null
[Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime] | Out-Null

Add-Type -AssemblyName System.Runtime.WindowsRuntime
$asTaskGeneric = [System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { 
    $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.ContainsGenericParameters 
} | Select-Object -First 1

function AwaitWinRT($op, $type) {
    $m = $asTaskGeneric.MakeGenericMethod($type)
    $task = $m.Invoke($null, @($op))
    $task.Wait()
    return $task.Result
}

$imgPath = 'D:\Projects\npo-jibb\lithon\data-sources\Lith-On Corporate Deck\LITHON Corporate Deck_page-0001.jpg'
$fileOp = [Windows.Storage.StorageFile]::GetFileFromPathAsync($imgPath)
$file = AwaitWinRT $fileOp ([Windows.Storage.StorageFile])

$streamOp = $file.OpenAsync([Windows.Storage.FileAccessMode]::Read)
$stream = AwaitWinRT $streamOp ([Windows.Storage.Streams.IRandomAccessStreamWithContentType])

$decoderOp = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)
$decoder = AwaitWinRT $decoderOp ([Windows.Graphics.Imaging.BitmapDecoder])

$bitmapOp = $decoder.GetSoftwareBitmapAsync()
$bitmap = AwaitWinRT $bitmapOp ([Windows.Graphics.Imaging.SoftwareBitmap])

$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
$ocrOp = $engine.RecognizeAsync($bitmap)
$ocrResult = AwaitWinRT $ocrOp ([Windows.Media.Ocr.OcrResult])

Write-Output "Extracted text:"
Write-Output $ocrResult.Text
