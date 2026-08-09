$url = "ftp://cute-letters.com/"
$request = [System.Net.FtpWebRequest]::Create($url)
$request.Method = [System.Net.WebRequestMethods+Ftp]::ListDirectory
$request.Credentials = New-Object System.Net.NetworkCredential("info@cute-letters.com", "k76uUetenpPbUS8")
try {
    $response = $request.GetResponse()
    $reader = New-Object System.IO.StreamReader($response.GetResponseStream())
    $content = $reader.ReadToEnd()
    Write-Output "FTP Listing for cute-letters.com:"
    Write-Output $content
    $reader.Close()
    $response.Close()
} catch {
    Write-Output "Failed for cute-letters.com. Error: $_"
}

$url2 = "ftp://ftp.cute-letters.com/"
$request2 = [System.Net.FtpWebRequest]::Create($url2)
$request2.Method = [System.Net.WebRequestMethods+Ftp]::ListDirectory
$request2.Credentials = New-Object System.Net.NetworkCredential("info@cute-letters.com", "k76uUetenpPbUS8")
try {
    $response2 = $request2.GetResponse()
    $reader2 = New-Object System.IO.StreamReader($response2.GetResponseStream())
    $content2 = $reader2.ReadToEnd()
    Write-Output "FTP Listing for ftp.cute-letters.com:"
    Write-Output $content2
    $reader2.Close()
    $response2.Close()
} catch {
    Write-Output "Failed for ftp.cute-letters.com. Error: $_"
}
