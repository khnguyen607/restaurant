<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>

    <!--<< Favcion >>-->
    <link rel="shortcut icon" href="assets/img/favicon.png">
    <!--<< Bootstrap min.css >>-->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <!--<< All Min Css >>-->
    <link rel="stylesheet" href="assets/css/all.min.css">
    <!--<< Animate.css >>-->
    <link rel="stylesheet" href="assets/css/animate.css">
    <!--<< Magnific Popup.css >>-->
    <link rel="stylesheet" href="assets/css/magnific-popup.css">
    <!--<< MeanMenu.css >>-->
    <link rel="stylesheet" href="assets/css/meanmenu.css">
    <!--<< Swiper Bundle.css >>-->
    <link rel="stylesheet" href="assets/css/swiper-bundle.min.css">
    <!--<< Nice Select.css >>-->
    <link rel="stylesheet" href="assets/css/nice-select.css">
    <!--<< Main.css >>-->
    <link rel="stylesheet" href="assets/css/main.css">

    <style>
        /* Initial state: fully transparent */
        main {
            opacity: 0;
            /* Apply transition effect to opacity property */
            transition: opacity 0.5s ease-in-out;
        }

        /* When section.thesidebar_section is visible (e.g., after a class is added via JavaScript) */
        main.show {
            opacity: 1;
        }
    </style>

</head>

<body>
    <!-- body wrap start -->
    <div class="body-wrap overflow-hidden">
        <!-- main body start -->
        <?php
        include_once("shared/components/header.html");
        // Xác định router và trang cần được tải
        $page = isset($_GET['page']) ? $_GET['page'] : 'home';

        // Kiểm tra xem trang có tồn tại hay không
        $page_path = "pages/$page/$page";
        if (file_exists("$page_path.html")) {
            // Tải tệp HTML tương ứng
            include_once("$page_path.html");
        } else {
            // Trang không tồn tại, xử lý bằng cách hiển thị trang 404 hoặc trang mặc định khác
            include_once("pages/404/index.html");
        }

        include_once("shared/components/footer.html");
        ?>
        <!-- main body end -->
    </div>
    <!--<< All JS Plugins >>-->
    <script src="assets/js/jquery-3.7.1.min.js"></script>
    <!--<< Bootstrap Js >>-->
    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <!--<< Waypoints Js >>-->
    <script src="assets/js/jquery.waypoints.js"></script>
    <!--<< Counterup Js >>-->
    <script src="assets/js/jquery.counterup.min.js"></script>
    <!--<< Viewport Js >>-->
    <script src="assets/js/viewport.jquery.js"></script>
    <!--<< Magnific popup Js >>-->
    <script src="assets/js/magnific-popup.min.js"></script>
    <!--<< Tilt Js >>-->
    <script src="assets/js/tilt.min.js"></script>
    <!--<< Swiper Slider Js >>-->
    <script src="assets/js/swiper-bundle.min.js"></script>
    <!--<< MeanMenu Js >>-->
    <script src="assets/js/jquery.meanmenu.min.js"></script>
    <!--<< Wow Animation Js >>-->
    <script src="assets/js/wow.min.js"></script>
    <!--<< Nice Select Js >>-->
    <script src="assets/js/nice-select.min.js"></script>
    <!-- contact js -->
    <script src="assets/js/contact.form.js"></script>
    <!--<< Main.js >>-->
    <script src="assets/js/main.js"></script>

    <script src="shared/scripts/app.js"></script>
    <script src="shared/scripts/init.js"></script>
    <?php
    echo "<script src='$page_path.js'></script>"
    ?>
</body>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        var main = document.querySelector("main");
        main.classList.add("show"); // Add the "show" class to trigger the animation
    });
</script>

</html>