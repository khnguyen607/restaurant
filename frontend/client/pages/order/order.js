document.addEventListener("DOMContentLoaded", async () => {
  // Đổ danh sách sản phẩm
  _init();
});

async function _init() {
  var items = await Helper.fetchData("product");
  await showProducts(items);
  // Thêm sự kiện lọc giá khi bấm lọc
  document
    .querySelector("._product-search-button")
    .addEventListener("click", () => filterBy());

  // Kiểm tra xem có biến q không thì lọc ra sản phẩm tương ứng
  if (Helper.getParameterByName("q")) {
    document.querySelector("._product-search").value =
      Helper.getParameterByName("q");
    filterBy();
  }
}

async function filterBy() {
  document
    .querySelectorAll("#grid_layout .row.g-4 .col-sm-6")
    .forEach((item) => {
      if (byName(item.querySelector(".product_title a").textContent)) {
        item.classList.remove("d-none");
      } else {
        item.classList.add("d-none");
      }
    });

  // Lọc theo tên
  function byName(name) {
    var nameValue = document.querySelector(
      ".shop_sidebar_searchbar input"
    ).value;
    if (name.toLowerCase().includes(nameValue.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  }
}

async function showProducts(items) {
  var dataList = document.querySelector("._product-list");
  var data = document
    .querySelector("._product-list ._product-item")
    .cloneNode(true);
  dataList.innerHTML = "";
  await items.forEach((item, index) => {
    let cloneData = data.cloneNode(true);
    data.setAttribute("data-wow-delay", `${0.2 + index * 0.2}s`);
    cloneData.querySelector("._product-title").textContent = item.Name;
    cloneData.querySelector("._product-price").textContent =
      (item.Price * 1000).toLocaleString("vi-VN") + "₫";
    cloneData.querySelector("._product-image").src = Helper.getLink(item.Img);

    cloneData.querySelector("._addCart").addEventListener("click", () => {
      CartManager.setItem(item.Name, {
        Price: item.Price,
        Img: item.Img,
        Quantity: 1,
        ID: item.ID,
      });
      // alert("Thêm giỏ hàng thành công")
      CartManager.show();
    });
    dataList.appendChild(cloneData);
  });
  document.querySelector("._product-search").value =
    Helper.getParameterByName("search");
  filterBy();
}
