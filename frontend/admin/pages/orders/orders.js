document.addEventListener('DOMContentLoaded', async () => {
    _init()
    _filterByCondition()
})

async function _init() {
    var items = await Helper.fetchData("order")
    var table = document.querySelector("#example5 tbody")
    var itemDiv = table.querySelector("tr").cloneNode(true)

    var tableOrderDatail = document.querySelector("#exampleModal table.table tbody")
    var itemDivOrderDatail = tableOrderDatail.querySelector("tr")
    table.innerHTML = ""
    items.forEach(async (item) => {
        var cloneitemDiv = itemDiv.cloneNode(true)
        cloneitemDiv.querySelector("._orderID").textContent = "HD" + item.ID
        cloneitemDiv.querySelector("._orderGuestName").textContent = item.GuestName
        cloneitemDiv.querySelector("._orderDate").textContent = item.Date
        cloneitemDiv.querySelector("._orderTotalPrice").textContent = (item.TotalPrice * 1000).toLocaleString("vi-VN") + "₫"
        setStatus(cloneitemDiv.querySelector("._orderStatus"), item.Status, item.ID)

        cloneitemDiv.querySelector("._btnDetail").addEventListener('click', async () => {
            var modal = document.querySelector("#exampleModal")
            modal.querySelector("h4._orderID").textContent = "Mã hóa đơn: HD" + item.ID
            modal.querySelector("._guestName").textContent = "Họ và tên: " + item.GuestName
            modal.querySelector("._guestPhone").textContent = "Số điện thoại: " + item.GuestPhone
            modal.querySelector("._guestEmail").textContent = "Email: " + item.GuestEmail
            modal.querySelector("._guestAddress").textContent = "Địa chỉ: " + item.GuestAddress

            tableOrderDatail.innerHTML = ""
            var orderDetails = await Helper.fetchData("orderDetail&action=getOrderDetail&orderID=" + item.ID)
            var orderDetailsTotalPrice = 0
            orderDetails.forEach(orderDetail => {
                var cloneitemDivOrderDatail = itemDivOrderDatail.cloneNode(true)
                var tds = cloneitemDivOrderDatail.querySelectorAll("td")
                tds[0].textContent = orderDetail.Name
                tds[1].textContent = (orderDetail.Price * 1000).toLocaleString("vi-VN") + "₫"
                tds[2].textContent = orderDetail.Quantity
                tds[3].textContent = orderDetail.Unit
                tds[4].textContent = (orderDetail.Price * 1000 * orderDetail.Quantity).toLocaleString("vi-VN") + "₫"
                orderDetailsTotalPrice += (orderDetail.Price * 1000 * orderDetail.Quantity)
                tableOrderDatail.appendChild(cloneitemDivOrderDatail)
            });
            modal.querySelector("table.table ._TotalPriceOrderDetail").textContent = orderDetailsTotalPrice.toLocaleString("vi-VN") + "₫"
        })
        table.appendChild(cloneitemDiv)
    });
}

async function setStatus(_orderStatus, itemStatus, id) {
    var nextStatus = null
    var changeStatus = _orderStatus.parentNode.querySelector("._buttonChangeStatus .btn-rounded")
    var status = _orderStatus.querySelector("span")
    changeStatus.addEventListener('click', async () => {
        await Helper.fetchData(`order&action=changeStatus&id=${id}&currentStatus=${itemStatus}`)
        itemStatus = nextStatus
        _changeStatus(itemStatus)
    })
    _changeStatus(itemStatus)
    function _changeStatus(value) {
        status.textContent = value
        let colors = ["warning", "primary", "secondary", "success", "danger"]
        for (const color of colors) {
            status.classList.remove("text-" + color)
            changeStatus.classList.add("btn-" + color)
        }

        switch (value) {
            case "Chờ duyệt":
                status.classList.add("text-warning")
                changeStatus.textContent = "Duyệt đơn"
                nextStatus = "Đã duyệt"
                changeStatus.classList.add("btn-primary")
                break;
            case "Đã duyệt":
                status.classList.add("text-primary")
                changeStatus.textContent = "Giao hàng"
                nextStatus = "Đang giao hàng"
                changeStatus.classList.add("btn-secondary")
                break;
            case "Đang giao hàng":
                status.classList.add("text-secondary")
                changeStatus.textContent = "Tới nơi"
                nextStatus = "Đã giao hàng"
                changeStatus.classList.add("btn-info")
                break;
            case "Đã giao hàng":
                status.classList.add("text-success")
                changeStatus.textContent = "Hủy đơn"
                nextStatus = "Đơn bị hủy"
                changeStatus.classList.add("btn-danger")
                break;
            case "Đơn bị hủy":
                status.classList.add("text-danger")
                changeStatus.textContent = "Giao lại"
                nextStatus = "Đang giao hàng"
                changeStatus.classList.add("btn-dark")
                break;
            default:
                status.textContent = "Trạng thái không xác định"
                break;
        }
    }
}

async function _filterByCondition() {
    document.querySelector('#selectOrderStatus').addEventListener('change', filter);
    document.querySelector('.search-area button').addEventListener('click', filter);

    function filter() {
        document.querySelectorAll("#example5 tbody tr").forEach(item => {
            (selectOrder(item) && searchBy(item)) ? item.classList.remove("d-none") : item.classList.add("d-none")
        })

        function selectOrder(trSelected) {
            var orderStatus = trSelected.querySelector("._orderStatus span").textContent
            if (document.querySelector("#selectOrderStatus").value == "Tất cả") {
                return true
            } else if (orderStatus != document.querySelector("#selectOrderStatus").value) {
                return false
            } else {
                return true
            }
        }

        function searchBy(trSelected) {
            var keyWord = document.querySelector(".search-area input").value.toLowerCase()
            if (
                trSelected.querySelector("._orderID").textContent.toLowerCase().includes(keyWord)
                ||
                trSelected.querySelector("._orderGuestName").textContent.toLowerCase().includes(keyWord)
            ) {
                return true
            } else {
                return false
            }
        }
    }


}
