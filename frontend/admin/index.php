<?php if (!isset($_GET['page'])) header("location: ./?page=orders");?>
<!DOCTYPE html>
<html lang="vi">

<head>

	<!-- Title -->
	<title>Trang quản trị</title>
	
	<!-- Favicon icon -->
	<link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.png">
	<link href="assets/vendor/owl-carousel/owl.carousel.css" rel="stylesheet">

	<!-- Style Css -->
	<link class="main-css" href="assets/css/style.css" rel="stylesheet">
	<script src="assets/vendor/ckeditor/ckeditor.js"></script>
	
    <link rel="stylesheet" href="assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css">

	<script src="shared/scripts/app.js"></script>
</head>

<body>

	<!--*******************
        Preloader start
    ********************-->
	<div id="preloader">
		<div class="sk-three-bounce">
			<div class="sk-child sk-bounce1"></div>
			<div class="sk-child sk-bounce2"></div>
			<div class="sk-child sk-bounce3"></div>
		</div>
	</div>
	<!--*******************
        Preloader end
    ********************-->

	<!--**********************************
        Main wrapper start
    ***********************************-->
	<div id="main-wrapper">

		<?php
		include_once("shared/components/layout.html");
		?>

		<!--**********************************
            Content body start
        ***********************************-->
		<div class="content-body">
			<!-- row -->
			<?php
			// Xác định router và trang cần được tải
			$page = isset($_GET['page']) ? $_GET['page'] : 'orders';

			// Kiểm tra xem trang có tồn tại hay không
			$page_path = "pages/$page/$page";
			if (file_exists("$page_path.html")) {
				// Tải tệp HTML tương ứng
				include_once("$page_path.html");
			} else {
				// Trang không tồn tại, xử lý bằng cách hiển thị trang 404 hoặc trang mặc định khác
				include_once("pages/404/index.html");
			}
			?>
		</div>
		<!--**********************************
            Content body end
        ***********************************-->

		<!--**********************************
            Footer start
        ***********************************-->
		<div class="footer">
			<div class="copyright">
				<p>Copyright © 2025</p>
			</div>
		</div>
		<!--**********************************
            Footer end
        ***********************************-->

		<!--**********************************
           Support ticket button start
        ***********************************-->

		<!--**********************************
           Support ticket button end
        ***********************************-->


	</div>
	<!--**********************************
        Main wrapper end
    ***********************************-->

	<!--**********************************
        Scripts
    ***********************************-->
	<!-- Required vendors -->
	<script src="assets/vendor/global/global.min.js"></script>
	<script src="assets/vendor/chart.js/chart.bundle.min.js"></script>
	<script src="assets/vendor/owl-carousel/owl.carousel.js"></script>
	<script src="assets/js/custom.min.js"></script>
	<script src="assets/js/deznav-init.js"></script>

	
    <script src="assets/vendor/bootstrap-select/dist/js/bootstrap-select.min.js"></script>
	<?php
		echo "<script src='$page_path.js'></script>"
	?>
	<script>
		function assignedDoctor() {

			/*  testimonial one function by = owl.carousel.js */
			jQuery('.assigned-doctor').owlCarousel({
				loop: false,
				margin: 30,
				nav: true,
				autoplaySpeed: 3000,
				navSpeed: 3000,
				paginationSpeed: 3000,
				slideSpeed: 3000,
				smartSpeed: 3000,
				autoplay: false,
				rtl: true,
				dots: false,
				navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
				responsive: {
					0: {
						items: 1
					},
					576: {
						items: 2
					},
					767: {
						items: 3
					},
					991: {
						items: 2
					},
					1200: {
						items: 3
					},
					1600: {
						items: 4
					},
					1920: {
						items: 5
					}
				}
			})
		}

		jQuery(window).on('load', function() {
			setTimeout(function() {
				assignedDoctor();
			}, 1000);
		});
	</script>

</body>

</html>