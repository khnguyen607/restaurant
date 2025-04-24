document.addEventListener("DOMContentLoaded", async () => {
  // Khởi tạo trang
  _init();
});

async function _init() {
  const form = document.getElementById("login-form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault(); // Ngăn submit mặc định

    const formData = new FormData(form); // Gửi đúng kiểu để PHP đọc bằng $_POST

    try {
      const response = await fetch(
        "../../backend/index.php?controller=user&action=login",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.text();
      console.log("Server response:", result);

      if (result.trim() === "true") {
        alert("Đăng nhập thành công!");
        form.reset();
        window.location.href = "/";
      } else {
        alert("Kiểm tra lại thông tin");
      }
    } catch (error) {
      console.error("Lỗi:", error);
      alert("Không thể gửi dữ liệu.");
    }
  });
}
