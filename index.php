<?php
function redirectTo($url) {
    header("Location: $url");
    exit; // Dừng việc thực thi của script ngay sau khi chuyển hướng
}

// Sử dụng hàm redirectTo để chuyển hướng đến một router cụ thể
redirectTo("./frontend/client/");
?>
