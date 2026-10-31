[Windows.Globalization.Language, Windows.Globalization, ContentType=WindowsRuntime] | Out-Null
[Windows.Media.Ocr.OcrEngine, Windows.Foundation, ContentType=WindowsRuntime] | Out-Null
[Windows.Graphics.Imaging.BitmapDecoder, Windows.Foundation, ContentType=WindowsRuntime] | Out-Null
[Windows.Storage.Streams.InMemoryRandomAccessStream, Windows.Storage.Streams, ContentType=WindowsRuntime] | Out-Null

Add-Type -AssemblyName System.Runtime.WindowsRuntime

$imgPath = "D:\Projects\npo-jibb\lithon\data-sources\Lith-On Corporate Deck\LITHON Corporate Deck_page-0001.jpg"
$bytes = [System.IO.File]::ReadAllBytes($imgPath)

$memStream = New-Object Windows.Storage.Streams.InMemoryRandomAccessStream
$netStream = [System.IO.WindowsRuntimeStreamExtensions]::AsStreamForWrite($memStream)
$netStream.Write($bytes, 0, $bytes.Length)
$netStream.Flush()
$memStream.Seek(0)

$decoderTask = [System.WindowsRuntimeSystemExtensions]::AsTask([Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($memStream))
$decoderTask.Wait()
$decoder = $decoderTask.Result

$bitmapTask = [System.WindowsRuntimeSystemExtensions]::AsTask($decoder.GetSoftwareBitmapAsync())
$bitmapTask.Wait()
$bitmap = $bitmapTask.Result

$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
$ocrTask = [System.WindowsRuntimeSystemExtensions]::AsTask($engine.RecognizeAsync($bitmap))
$ocrTask.Wait()
$ocrResult = $ocrTask.Result

Write-Host "SUCCESS! Extracted Text:"
Write-Host $ocrResult.Text
