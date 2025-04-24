document.addEventListener("DOMContentLoaded", async () => {
  // Khởi tạo trang
  _init();
});

async function _init() {
  const discount = 30000;
  var items = await CartManager.getItem();
  var cartList = document.querySelector("tbody.checkout_table");
  var cartProduct = cartList.querySelector("tr.cart_item").cloneNode(true);
  cartList.innerHTML = "";
  var _totalPriceCart = 0;
  Object.keys(items).forEach((item) => {
    var cloneCartProduct = cartProduct.cloneNode(true);
    cloneCartProduct.querySelector(".cartname").textContent = item;
    item = items[item];
    cloneCartProduct.querySelector("img").src = Helper.getLink(item.Img);
    cloneCartProduct.querySelector(".price_text").textContent =
      (item.Price * 1000).toLocaleString("vi-VN") + "₫";
    cloneCartProduct.querySelector(".quantity_text").textContent =
      item.Quantity;
    cloneCartProduct.querySelector(".total_price").textContent =
      (parseInt(item.Price) * parseInt(item.Quantity) * 1000).toLocaleString(
        "vi-VN"
      ) + "₫";
    _totalPriceCart += parseInt(item.Price) * parseInt(item.Quantity) * 1000;
    cartList.appendChild(cloneCartProduct);
  });
  var checkout = document.querySelector("tfoot.checkout-ordertable");
  checkout.querySelector(".total_price_1").textContent =
    _totalPriceCart.toLocaleString("vi-VN") + "₫";
  checkout.querySelector(".total_discount").textContent =
    discount.toLocaleString("vi-VN") + "₫";
  checkout.querySelector(".total_price_2").textContent =
    (_totalPriceCart - discount).toLocaleString("vi-VN") + "₫";
}

async function _setUserInfo() {
  var userInfo = await Helper.fetchData("user&action=find&id="+Helper.getCookie("user_id"))
  userInfo ? document.querySelector("#_formCheckout .checkbox_item").classList.add("d-none") : document.querySelector("#_formCheckout .checkbox_item").classList.remove("d-none")
  var inputs = document.querySelectorAll("#_formCheckout input")
  inputs[0].value = userInfo.Name
  inputs[1].value = userInfo.Email
  inputs[2].value = userInfo.Phone
  inputs[3].value = userInfo.Address
}

async function _sendData() {
  document.querySelector("._btnOrder").addEventListener('click', (event) => {
      event.preventDefault(); // Corrected preventDefault usage
      const formData = new FormData(document.querySelector("#_formCheckout"));
      formData.append('TotalPrice', parseInt(document.querySelector(".total_price").textContent.replace(/[^\d]/g, ""))/1000);
      formData.append('orderDetails', JSON.stringify(CartManager.getItem()));
      if (Helper.getCookie("user_id")) {
          formData.append('userID', Helper.getCookie("user_id"));
      }
      fetch('../../backend/?controller=order&action=insert', {
          method: 'POST',
          body: formData
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(result => {
          console.log(result);
          if (result == true) {
              alert("Cảm ơn bạn đã tin tưởng mua hàng!")
              CartManager.clear()
              window.location.href = "./";
          }
      })
      .catch(error => {
          console.error('Error sending data:', error);
      });
  });
}