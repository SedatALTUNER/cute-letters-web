$url = "ftp://ftp.cute-letters.com/app-ads.txt"
$filePath = "e:\ws_harfler\cute_letters_web_site\app-ads.txt"

$request = [System.Net.FtpWebRequest]::Create($url)
$request.Method = [System.Net.WebRequestMethods+Ftp]::UploadFile
$request.Credentials = New-Object System.Net.NetworkCredential("info@cute-letters.com", "k76uUetenpPbUS8")
$request.UsePassive = $true
$request.UseBinary = $true
$request.KeepAlive = $false

try {
    $content = [System.IO.File]::ReadAllBytes($filePath)
    $requestStream = $request.GetRequestStream()
    $requestStream.Write($content, 0, $content.Length)
    $requestStream.Close()
    
    $response = $request.GetResponse()
    Write-Output "Upload status: $($response.StatusDescription)"
    $response.Close()
} catch {
    Write-Output "Upload failed. Error: $_"
    if ($_.Exception.Response) {
        $response = $_.Exception.Response
        $reader = New-Object System.IO.StreamReader($response.GetResponseStream())
        $errResponse = $reader.ReadToEnd()
        Write-Output "Server response: $errResponse"
        $reader.Close()
    }
}
