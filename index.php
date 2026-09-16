<?php
// WordPress veya sunucu index.php dosyasını öncelikli çalıştırdığı için doğrudan index.html yüklenir
$htmlFile = __DIR__ . '/index.html';

if (file_exists($htmlFile)) {
    header('Content-Type: text/html; charset=UTF-8');
    readfile($htmlFile);
    exit;
} else {
    http_response_code(404);
    echo "index.html dosyası bulunamadı.";
    exit;
}
