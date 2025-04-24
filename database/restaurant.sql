-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost:3306
-- Thời gian đã tạo: Th4 24, 2025 lúc 12:41 AM
-- Phiên bản máy phục vụ: 8.0.30
-- Phiên bản PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `restaurant`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `booking`
--

CREATE TABLE `booking` (
  `ID` int NOT NULL,
  `Date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `GuestName` varchar(256) COLLATE utf8mb4_bin NOT NULL,
  `GuestEmail` varchar(256) COLLATE utf8mb4_bin NOT NULL,
  `GuestPhone` varchar(15) COLLATE utf8mb4_bin NOT NULL,
  `Count` int NOT NULL,
  `Note` varchar(256) COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Đang đổ dữ liệu cho bảng `booking`
--

INSERT INTO `booking` (`ID`, `Date`, `GuestName`, `GuestEmail`, `GuestPhone`, `Count`, `Note`) VALUES
(9, '2025-04-25 19:30:00', 'Vo Van I', 'vovi@example.com', '0989012345', 2, 'Cần không gian yên tĩnh'),
(10, '2025-04-25 21:00:00', 'Dang J', 'dangj@example.com', '0990123456', 4, 'Tối nay có nhạc live?'),
(11, '2025-04-21 22:27:00', 'h', 'g@gmail.com', '0123', 1, '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orderdetail`
--

CREATE TABLE `orderdetail` (
  `ID` int NOT NULL,
  `orderID` int NOT NULL,
  `productID` int NOT NULL,
  `Quantity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `ID` int NOT NULL,
  `TotalPrice` int NOT NULL,
  `Status` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Chờ duyệt',
  `Date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `GuestName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `GuestEmail` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `GuestPhone` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `GuestAddress` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`ID`, `TotalPrice`, `Status`, `Date`, `GuestName`, `GuestEmail`, `GuestPhone`, `GuestAddress`) VALUES
(1, 282, 'Đơn bị hủy', '2024-04-19 12:41:38', 'Nguyễn Văn A', 'nguyenvana@example.com', '0987654321', '123 Đường ABC, Quận 1, Thành phố Hồ Chí Minh'),
(2, 257, 'Chờ duyệt', '2024-04-19 12:41:38', 'Trần Thị B', 'tranthib@example.com', '0123456789', '456 Đường XYZ, Quận 2, Thành phố Hà Nội'),
(3, 322, 'Chờ duyệt', '2024-04-19 12:41:38', 'Lê Văn C', 'levanc@example.com', '0123456789', '789 Đường DEF, Quận 3, Thành phố Đà Nẵng'),
(4, 290, 'Chờ duyệt', '2024-04-19 12:41:38', 'Phạm Thị D', 'phamthid@example.com', '0987654321', '101 Đường GHI, Quận 4, Thành phố Cần Thơ'),
(5, 137, 'Chờ duyệt', '2024-04-19 12:41:38', 'Nguyễn Văn E', 'nguyenvane@example.com', '0987654321', '111 Đường JKL, Quận 5, Thành phố Hải Phòng'),
(6, 110, 'Chờ duyệt', '2024-04-19 12:41:38', 'Trần Văn F', 'tranvanf@example.com', '0123456789', '222 Đường MNO, Quận 6, Thành phố Vũng Tàu'),
(7, 143, 'Chờ duyệt', '2024-04-19 12:41:38', 'Lê Thị G', 'lethig@example.com', '0123456789', '333 Đường PQR, Quận 7, Thành phố Nha Trang'),
(8, 72, 'Chờ duyệt', '2024-04-19 12:41:38', 'Phạm Văn H', 'phamvanh@example.com', '0987654321', '444 Đường STU, Quận 8, Thành phố Quy Nhơn'),
(9, 166, 'Chờ duyệt', '2024-04-19 12:41:38', 'Nguyễn Thị I', 'nguyenthii@example.com', '0987654321', '555 Đường VWX, Quận 9, Thành phố Hạ Long'),
(10, 114, 'Chờ duyệt', '2024-04-19 12:41:38', 'Trần Văn K', 'tranvank@example.com', '0123456789', '666 Đường YZ1, Quận 10, Thành phố Phú Quốc'),
(11, 16, 'Chờ duyệt', '2024-04-19 12:41:38', 'Lê Thị L', 'lethil@example.com', '0987654321', '777 Đường 234, Quận 11, Thành phố Tam Kỳ'),
(12, 72, 'Chờ duyệt', '2024-04-19 12:41:38', 'Phạm Văn M', 'phamvanm@example.com', '0123456789', '888 Đường 345, Quận 12, Thành phố Tây Ninh'),
(13, 112, 'Chờ duyệt', '2024-04-19 12:41:38', 'Nguyễn Thị N', 'nguyenthin@example.com', '0123456789', '999 Đường 456, Quận 13, Thành phố Bắc Ninh'),
(14, 295, 'Chờ duyệt', '2024-04-19 12:41:38', 'Trần Văn P', 'tranvanp@example.com', '0987654321', '1010 Đường 567, Quận 14, Thành phố Cao Lãnh'),
(15, 140, 'Chờ duyệt', '2024-04-19 12:41:38', 'Lê Thị Q', 'lethiq@example.com', '0987654321', '1111 Đường 678, Quận 15, Thành phố Bảo Lộc'),
(16, 290000, 'Chờ duyệt', '2024-04-19 12:41:38', 'Phạm Văn R', 'phamvanr@example.com', '0123456789', '1212 Đường 789, Quận 16, Thành phố Bắc Giang'),
(17, 68, 'Chờ duyệt', '2024-04-19 12:41:38', 'Nguyễn Thị S', 'nguyenthis@example.com', '0987654321', '1313 Đường 890, Quận 17, Thành phố Bắc Kạn'),
(18, 277, 'Chờ duyệt', '2024-04-19 12:41:38', 'Trần Văn T', 'tranvant@example.com', '0123456789', '1414 Đường 901, Quận 18, Thành phố Bắc Ninh'),
(19, 187, 'Chờ duyệt', '2024-04-19 12:41:38', 'Lê Thị U', 'lethiu@example.com', '0123456789', '1515 Đường 012, Quận 19, Thành phố Bắc Giang'),
(20, 169, 'Chờ duyệt', '2024-04-19 12:41:38', 'Phạm Văn V', 'phamvanv@example.com', '0987654321', '1616 Đường 123, Quận 20, Thành phố Bắc Kạn'),
(21, 207, 'Chờ duyệt', '2024-04-19 12:41:38', 'Nguyễn Văn A', 'nguyenvana@example.com', '0987654321', '123 Đường ABC, Quận 1, Thành phố Hồ Chí Minh'),
(22, 269, 'Chờ duyệt', '2024-04-19 12:41:38', 'Trần Thị B', 'tranthib@example.com', '0123456789', '456 Đường XYZ, Quận 2, Thành phố Hà Nội'),
(23, 64, 'Chờ duyệt', '2024-04-19 12:41:38', 'Lê Văn C', 'levanc@example.com', '0123456789', '789 Đường DEF, Quận 3, Thành phố Đà Nẵng'),
(24, 354, 'Chờ duyệt', '2024-04-19 12:41:38', 'Phạm Thị D', 'phamthid@example.com', '0987654321', '101 Đường GHI, Quận 4, Thành phố Cần Thơ'),
(25, 144, 'Chờ duyệt', '2024-04-19 12:41:38', 'Nguyễn Văn E', 'nguyenvane@example.com', '0987654321', '111 Đường JKL, Quận 5, Thành phố Hải Phòng'),
(26, 410000, 'Chờ duyệt', '2024-04-19 12:41:38', 'Trần Văn F', 'tranvanf@example.com', '0123456789', '222 Đường MNO, Quận 6, Thành phố Vũng Tàu'),
(27, 17, 'Chờ duyệt', '2024-04-19 12:41:38', 'Lê Thị G', 'lethig@example.com', '0123456789', '333 Đường PQR, Quận 7, Thành phố Nha Trang'),
(28, 90, 'Chờ duyệt', '2024-04-19 12:41:38', 'Phạm Văn H', 'phamvanh@example.com', '0987654321', '444 Đường STU, Quận 8, Thành phố Quy Nhơn'),
(29, 50, 'Chờ duyệt', '2024-04-19 12:41:38', 'Nguyễn Thị I', 'nguyenthii@example.com', '0987654321', '555 Đường VWX, Quận 9, Thành phố Hạ Long'),
(30, 10, 'Chờ duyệt', '2024-04-19 12:41:38', 'Trần Văn K', 'tranvank@example.com', '0123456789', '666 Đường YZ1, Quận 10, Thành phố Phú Quốc'),
(31, 310000, 'Chờ duyệt', '2024-04-19 12:41:38', 'Lê Thị L', 'lethil@example.com', '0987654321', '777 Đường 234, Quận 11, Thành phố Tam Kỳ'),
(32, 17, 'Chờ duyệt', '2024-04-19 12:41:38', 'Phạm Văn M', 'phamvanm@example.com', '0123456789', '888 Đường 345, Quận 12, Thành phố Tây Ninh'),
(33, 81, 'Chờ duyệt', '2024-04-19 12:41:38', 'Nguyễn Thị N', 'nguyenthin@example.com', '0123456789', '999 Đường 456, Quận 13, Thành phố Bắc Ninh'),
(34, 280000, 'Chờ duyệt', '2024-04-19 12:41:38', 'Trần Văn P', 'tranvanp@example.com', '0987654321', '1010 Đường 567, Quận 14, Thành phố Cao Lãnh'),
(35, 276, 'Chờ duyệt', '2024-04-19 12:41:38', 'Lê Thị Q', 'lethiq@example.com', '0987654321', '1111 Đường 678, Quận 15, Thành phố Bảo Lộc'),
(36, 77, 'Chờ duyệt', '2024-04-19 12:41:38', 'Phạm Văn R', 'phamvanr@example.com', '0123456789', '1212 Đường 789, Quận 16, Thành phố Bắc Giang'),
(37, 330000, 'Chờ duyệt', '2024-04-19 12:41:38', 'Nguyễn Thị S', 'nguyenthis@example.com', '0987654321', '1313 Đường 890, Quận 17, Thành phố Bắc Kạn'),
(38, 118, 'Chờ duyệt', '2024-04-19 12:41:38', 'Trần Văn T', 'tranvant@example.com', '0123456789', '1414 Đường 901, Quận 18, Thành phố Bắc Ninh'),
(39, 420, 'Chờ duyệt', '2024-04-19 12:41:38', 'Lê Thị U', 'lethiu@example.com', '0123456789', '1515 Đường 012, Quận 19, Thành phố Bắc Giang'),
(40, 250, 'Chờ duyệt', '2024-04-19 12:41:38', 'Phạm Văn V', 'phamvanv@example.com', '0987654321', '1616 Đường 123, Quận 20, Thành phố Bắc Kạn'),
(41, 101, 'Chờ duyệt', '2024-04-19 12:41:38', 'Nguyễn Văn A', 'nguyenvana@example.com', '0987654321', '123 Đường ABC, Quận 1, Thành phố Hồ Chí Minh'),
(42, 108, 'Chờ duyệt', '2024-04-19 12:41:38', 'Trần Thị B', 'tranthib@example.com', '0123456789', '456 Đường XYZ, Quận 2, Thành phố Hà Nội'),
(43, 24, 'Chờ duyệt', '2024-04-19 12:41:38', 'Lê Văn C', 'levanc@example.com', '0123456789', '789 Đường DEF, Quận 3, Thành phố Đà Nẵng'),
(44, 106, 'Chờ duyệt', '2024-04-19 12:41:38', 'Phạm Thị D', 'phamthid@example.com', '0987654321', '101 Đường GHI, Quận 4, Thành phố Cần Thơ'),
(45, 360000, 'Chờ duyệt', '2024-04-19 12:41:38', 'Nguyễn Văn E', 'nguyenvane@example.com', '0987654321', '111 Đường JKL, Quận 5, Thành phố Hải Phòng'),
(46, 157, 'Chờ duyệt', '2024-04-19 12:41:38', 'Trần Văn F', 'tranvanf@example.com', '0123456789', '222 Đường MNO, Quận 6, Thành phố Vũng Tàu'),
(47, 446, 'Chờ duyệt', '2024-04-19 12:41:38', 'Lê Thị G', 'lethig@example.com', '0123456789', '333 Đường PQR, Quận 7, Thành phố Nha Trang'),
(48, 128, 'Chờ duyệt', '2024-04-19 12:41:38', 'Phạm Văn H', 'phamvanh@example.com', '0987654321', '444 Đường STU, Quận 8, Thành phố Quy Nhơn'),
(49, 184, 'Chờ duyệt', '2024-04-19 12:41:38', 'Nguyễn Thị I', 'nguyenthii@example.com', '0987654321', '555 Đường VWX, Quận 9, Thành phố Hạ Long'),
(50, 183, 'Chờ duyệt', '2024-04-19 12:41:38', 'Trần Văn K', 'tranvank@example.com', '0123456789', '666 Đường YZ1, Quận 10, Thành phố Phú Quốc');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `ID` int NOT NULL,
  `Name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Price` int NOT NULL,
  `Img` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`ID`, `Name`, `Price`, `Img`) VALUES
(21, 'Burger', 58, 'images/products/burger.png'),
(22, 'Cơm rang hải sản', 60, 'images/products/dishes1_1.png'),
(23, 'Pizza xúc xích', 125, 'images/products/dishes1_3.png'),
(24, 'Cơm rang thập cẩm', 55, 'images/products/dishes1_2.png'),
(25, 'Gà rán kem hành', 122, 'images/products/dishes1_5.png'),
(26, 'Ức gà áp chảo', 88, 'images/products/dishes6_1.png');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `syn_orders_users`
--

CREATE TABLE `syn_orders_users` (
  `ID` int NOT NULL,
  `userID` int NOT NULL,
  `orderID` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `ID` int NOT NULL,
  `Name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `UserName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Password` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Phone` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Address` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Tier` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Basic',
  `Role` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`ID`, `Name`, `UserName`, `Password`, `Email`, `Phone`, `Address`, `Tier`, `Role`) VALUES
(3, 'Nguyên', 'khnguyen', '$2y$10$zJSc.Wd2k.R38IlplPrQnOHgrfyP6JYUXkGoRbJv.3EKEtcRNi.9m', 'khnguyen@gmail.com', '0123456789', 'Á A', 'Basic', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `vouchers`
--

CREATE TABLE `vouchers` (
  `ID` int NOT NULL,
  `Name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`ID`);

--
-- Chỉ mục cho bảng `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ordersdetail_oders` (`orderID`),
  ADD KEY `ordersdetail_products` (`productID`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`ID`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`ID`);

--
-- Chỉ mục cho bảng `syn_orders_users`
--
ALTER TABLE `syn_orders_users`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `syn_orders_users_orders` (`orderID`),
  ADD KEY `syn_orders_users_users` (`userID`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- Chỉ mục cho bảng `vouchers`
--
ALTER TABLE `vouchers`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `booking`
--
ALTER TABLE `booking`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `orderdetail`
--
ALTER TABLE `orderdetail`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT cho bảng `syn_orders_users`
--
ALTER TABLE `syn_orders_users`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `vouchers`
--
ALTER TABLE `vouchers`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD CONSTRAINT `ordersdetail_oders` FOREIGN KEY (`orderID`) REFERENCES `orders` (`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `ordersdetail_products` FOREIGN KEY (`productID`) REFERENCES `products` (`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Các ràng buộc cho bảng `syn_orders_users`
--
ALTER TABLE `syn_orders_users`
  ADD CONSTRAINT `syn_orders_users_orders` FOREIGN KEY (`orderID`) REFERENCES `orders` (`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `syn_orders_users_users` FOREIGN KEY (`userID`) REFERENCES `users` (`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
