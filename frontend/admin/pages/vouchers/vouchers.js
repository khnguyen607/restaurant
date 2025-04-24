document.addEventListener("DOMContentLoaded", async () => {
  _init();
  _sendData();
  _searchData();
});

async function _init() {
  var items = await Helper.fetchData("voucher");
  var table = document.querySelector("#example5 tbody");
  var itemDiv = table.querySelector("tr").cloneNode(true);
  table.innerHTML = "";
  items.forEach((item) => {
    var cloneitemDiv = itemDiv.cloneNode(true);
    cloneitemDiv.querySelector(".text-nowrap").textContent = item.Name;

    cloneitemDiv
      .querySelector("._buttonDelete")
      .addEventListener("click", async () => {
        cloneitemDiv.remove();
        await fetch(
          "../../backend/?controller=voucher&action=delete&id=" + item.ID
        );
      });
    table.appendChild(cloneitemDiv);
  });
}

async function _sendData() {
  document
    .querySelector("#exampleModal .modal-footer .btn-primary")
    .addEventListener("click", async () => {
      const inputs = document.querySelectorAll("#_addUserForm input");
      for (let input of inputs) {
        console.log(input.value);
        if (input.value == "") {
          alert("Vui lòng nhập đủ thông tin");
          return; // Thoát khỏi hàm
        }
      }
      // Dữ liệu form
      const formData = new FormData(document.getElementById("_addUserForm"));

      // Tùy chọn cấu hình cho request
      const requestOptions = {
        method: "POST", // Phương thức HTTP
        body: formData, // Dữ liệu form
      };

      // URL của endpoint nhận request
      const url = "../../backend/?controller=voucher&action=insert";

      // Gửi request sử dụng fetch
      fetch(url, requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json(); // Đọc và trả về dữ liệu JSON từ phản hồi
        })
        .then((data) => {
          console.log(data == true);
          data == true ? alert("Thêm thành công") : alert("Thêm thất bại");
          if (data == true) window.location.reload();
        })
        .catch((error) => {
          console.error(
            "There was a problem with your fetch operation:",
            error
          );
        });
    });
}

async function _searchData() {
  document
    .querySelector(".search-area button")
    .addEventListener("click", () => {
      var keyWord = document
        .querySelector(".search-area input")
        .value.toUpperCase();
      console.log(keyWord);
      document.querySelectorAll("#example5 tbody tr").forEach((item) => {
        item
          .querySelector(".text-nowrap")
          .textContent.toUpperCase()
          .includes(keyWord)
          ? item.classList.remove("d-none")
          : item.classList.add("d-none");
        console.log(
          item.querySelector(".text-nowrap").textContent.toUpperCase()
        );
      });
    });
}
