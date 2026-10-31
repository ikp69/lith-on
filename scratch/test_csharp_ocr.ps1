$source = @"
using System;
using System.IO;
using System.Threading.Tasks;
using Windows.Globalization;
using Windows.Media.Ocr;
using Windows.Graphics.Imaging;
using Windows.Storage.Streams;

public class OcrHelper
{
    private OcrEngine engine;

    public OcrHelper()
    {
        engine = OcrEngine.TryCreateFromUserProfileLanguages();
        if (engine == null)
        {
            engine = OcrEngine.TryCreateFromLanguage(new Language("en-US"));
        }
    }

    public async Task<string> RecognizeFileAsync(string filePath)
    {
        byte[] bytes = File.ReadAllBytes(filePath);
        using (var memStream = new InMemoryRandomAccessStream())
        {
            using (var stream = memStream.AsStreamForWrite())
            {
                await stream.WriteAsync(bytes, 0, bytes.Length);
                await stream.FlushAsync();
            }
            memStream.Seek(0);
            var decoder = await BitmapDecoder.CreateAsync(memStream);
            var softwareBitmap = await decoder.GetSoftwareBitmapAsync();
            var result = await engine.RecognizeAsync(softwareBitmap);
            return result.Text;
        }
    }
}
"@

$references = @(
    "System.Runtime.WindowsRuntime",
    "System.IO",
    "System.Threading.Tasks",
    (Get-Item "C:\Windows\System32\WinMetadata\Windows.Foundation.winmd").FullName,
    (Get-Item "C:\Windows\System32\WinMetadata\Windows.Media.winmd").FullName,
    (Get-Item "C:\Windows\System32\WinMetadata\Windows.Graphics.winmd").FullName,
    (Get-Item "C:\Windows\System32\WinMetadata\Windows.Storage.winmd").FullName,
    (Get-Item "C:\Windows\System32\WinMetadata\Windows.Globalization.winmd").FullName
)

Add-Type -TypeDefinition $source -ReferencedAssemblies $references

$helper = New-Object OcrHelper
$path = "D:\Projects\npo-jibb\lithon\data-sources\Lith-On Corporate Deck\LITHON Corporate Deck_page-0001.jpg"
$task = $helper.RecognizeFileAsync($path)
$task.Wait()
Write-Host "C# OCR SUCCESS:"
Write-Host $task.Result
