document.addEventListener('DOMContentLoaded', async () => {
    // Khởi tạo trang
    _init();
    _sendData()
    _setUserInfo()
    // document.querySelector(".coupon_update_btn").addEventListener("click", async () => {
    //     let items = await CartManager.getItem();
    //     CartManager.clear();
    //     document.querySelectorAll(".cart_table tbody tr").forEach(item=>{
    //         console.log(item.querySelector(".input_number").value);
    //         items[item.querySelector(".item_title").textContent]["Quantity"] = parseInt(item.querySelector(".input_number").value)
    //         CartManager.setItem(item.querySelector(".item_title").textContent, items[item.querySelector(".item_title").textContent])
    //     })
    //     _init();
    // })
})

async function _init() {
    var items = await CartManager.getItem();
    var cartList = document.querySelector(".checkout_table tbody")
    var cartProduct = cartList.querySelector("tr").cloneNode(true)
    cartList.innerHTML = ""
    var _totalPriceCart = 0
    Object.keys(items).forEach(item => {
        var cloneCartProduct = cartProduct.cloneNode(true)
        cloneCartProduct.querySelector(".item_title").textContent = item
        item = items[item]
        cloneCartProduct.querySelector("img").src = Helper.getLink(item.Img)
        cloneCartProduct.querySelector(".price_text").textContent = (item.Price * 1000).toLocaleString("vi-VN") + "₫"
        cloneCartProduct.querySelector(".quantity_text").value = item.Quantity
        cloneCartProduct.querySelector(".total_price").textContent = (parseInt(item.Price) * parseInt(item.Quantity) * 1000).toLocaleString("vi-VN") + "₫"
        _totalPriceCart += (parseInt(item.Price) * parseInt(item.Quantity) * 1000)
        cartList.appendChild(cloneCartProduct)
    });
    var trTemp = document.createElement("tr")
    trTemp.innerHTML = `
        <td></td>
        <td></td>
        <td>
            <span class="subtotal_text">Toàn bộ</span>
        </td>
        <td><span class="total_price">${_totalPriceCart.toLocaleString("vi-VN") + "₫"}</span></td>
    `
    cartList.appendChild(trTemp)
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