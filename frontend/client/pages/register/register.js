document.addEventListener("DOMContentLoaded", async () => {
  // Khởi tạo trang
  _init();
});

async function _init() {
  const form = document.getElementById("register-form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault(); // Ngăn submit mặc định

    const formData = new FormData(form); // Gửi đúng kiểu để PHP đọc bằng $_POST

    try {
      const response = await fetch(
        "../../backend/index.php?controller=user&action=insert",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.text();
      console.log("Server response:", result);

      if (result.trim() === "true") {
        alert("Đăng ký thành công!");
        form.reset();
        window.location.href = "?page=login";
      } else {
        alert("Đã xảy ra lỗi khi đăng ký.");
      }
    } catch (error) {
      console.error("Lỗi:", error);
      alert("Không thể gửi dữ liệu.");
    }
  });
}
