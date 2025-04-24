document.addEventListener('DOMContentLoaded', async () => {
    // Đổ danh sách sản phẩm
    _init();
})

async function _init() {
    var items = await Helper.fetchData("product")
    await showProducts(items)
    // Thêm sự kiện lọc giá khi bấm lọc
    document.querySelector(".shop_sidebar_searchbar i").addEventListener('click', () => filterBy())
    
    // Kiểm tra xem có biến q không thì lọc ra sản phẩm tương ứng
    if (Helper.getParameterByName("q")) {
        document.querySelector(".shop_sidebar_searchbar input").value = Helper.getParameterByName("q")
        filterBy()
    }
}

async function filterBy() {
    document.querySelectorAll("#grid_layout .row.g-4 .col-sm-6").forEach(item => {
        if (
            byName(item.querySelector(".product_title a").textContent)
        ) {
            item.classList.remove("d-none")
        } else {
            item.classList.add("d-none")
        }
    })


    // Lọc theo tên
    function byName(name) {
        var nameValue = document.querySelector(".shop_sidebar_searchbar input").value
        if (name.toLowerCase().includes(nameValue.toLowerCase())) {
            return true
        } else {
            return false
        }
    }

}

async function showProducts(items) {
    var dataList = document.querySelector("#grid_layout .row.g-4")
    var data = document.querySelector("#grid_layout .row.g-4 .col-sm-6").cloneNode(true)
    dataList.innerHTML = ""
    await items.forEach(item => {
        let cloneData = data.cloneNode(true)
        cloneData.querySelector(".product_title a").textContent = item.Name
        cloneData.querySelector("span.sale_price").textContent = (item.Price * 1000).toLocaleString('vi-VN') + "₫"
        cloneData.querySelector(".product_image").href += `&id=${item.ID}`
        cloneData.querySelector(".product_image img").src = Helper.getLink(item.Img)
        dataList.appendChild(cloneData)
    });
    document.querySelector(".shop_sidebar_searchbar input").value = Helper.getParameterByName("search")
    filterBy()
}
