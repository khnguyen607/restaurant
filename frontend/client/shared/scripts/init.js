document.addEventListener("DOMContentLoaded", async () => {
  // Đặt các layouts
  await _getLayouts();
  // Hiển thị sản phẩm đang có trong cart
  CartManager.show();
});

async function _getLayouts() {
  try {
    // Set loginModal
    if (Helper.getCookie("user_id")) {
      // Khởi tạo myOrderModal
      // _myOrderModal()
      var user = await Helper.fetchData(
        "user&action=find&id=" + Helper.getCookie("user_id")
      );
      const headerlogin = document.querySelector("#header-user");
      if (user) {
        headerlogin.innerHTML = `Chào ${user.Name}, <i class="fal fa-sign-out-alt"></i>`;
        headerlogin.onclick = () => {
          document.cookie.split(";").forEach((c) => {
            document.cookie = c
              .replace(/^ +/, "")
              .replace(
                /=.*/,
                "=;expires=" + new Date().toUTCString() + ";path=/"
              );
          });
          location.reload();
        };
      } else {
        headerlogin.innerHTML = `<i class="fal fa-user-circle"></i>`;
        headerlogin.onclick = () => {
          location.href = `?page=login`;
        };
      }
    } else {
      document.querySelector("#collapseExample .dropdown_content").innerHTML = `
                <div class="profile_info clearfix">
                    <div class="user_thumbnail">
                        <img src="assets/images/meta/meta1.png" alt="image_not_found">
                    </div>
                    <div class="user_content">
                        <h4 class="user_name">__Khách__</h4>
                    </div>
                </div>
                <ul class="settings_options ul_li_block clearfix text-center">
                    <li><button style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#_loginModal" class="btn btn-primary rounded-pill">Đăng nhập</button></li>
                </ul>
            `;
    }
  } catch (error) {
    console.error("Error loading HTML:", error);
  }
}

async function _myOrderModal() {
  try {
    // Get myOrderModal
    var myOrderModal = document.createElement("div");
    myOrderModal.innerHTML = await Helper.fetchHTML(
      "./shared/components/myOrders.html"
    );
    var items = await Helper.fetchData(
      "order&action=getOrderForUser&userID=" + Helper.getCookie("user_id")
    );
    console.log(items);
    myOrderModal.querySelector(".modal-body .list-group").innerHTML = "";
    items.forEach((item) => {
      var orderDetail = document.createElement("a");
      orderDetail.classList.add("list-group-item", "list-group-item-action");
      orderDetail.innerHTML = `
                <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Đơn hàng: HD${item.orderID}</h5>
                <small>Thời gian đặt hàng: ${item.Date}</small>
                </div>
                <p class="mb-1">Tổng tiền: ${(
                  item.TotalPrice * 1000
                ).toLocaleString("vi-VN")}₫</p>
                <small>Trạng thái: ${item.Status}</small>
            `;
      myOrderModal
        .querySelector(".modal-body .list-group")
        .appendChild(orderDetail);
    });
    // Set Modal
    document.querySelector("body").appendChild(myOrderModal);
  } catch (error) {
    console.error("Error loading HTML:", error);
  }
}
