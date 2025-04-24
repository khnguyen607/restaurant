document.addEventListener('DOMContentLoaded', async () => {
    _init()
    _sendData()
    _searchData()
})

async function _init() {
    var items = await Helper.fetchData("user")
    var table = document.querySelector("#example5 tbody")
    var itemDiv = table.querySelector("tr").cloneNode(true)
    table.innerHTML = ""
    items.forEach(item => {
        var cloneitemDiv = itemDiv.cloneNode(true)
        cloneitemDiv.querySelector(".text-nowrap").textContent = item.Name
        cloneitemDiv.querySelector("._userTier").textContent = item.Tier
        cloneitemDiv.querySelector("._userRole").textContent = (item.Role == 1) ? "Quản trị viên" : "Khách"
        cloneitemDiv.querySelector("._userUserName").textContent = item.UserName
        cloneitemDiv.querySelector("._btnDelete").href = "../../backend/?controller=user&action=delete&id=" + item.ID
        cloneitemDiv.querySelector(".edit-staff").addEventListener('click', () => showEditModal(item.ID));
        table.appendChild(cloneitemDiv)
    });

    async function showEditModal(userID) {
        var userInfo = await Helper.fetchData("user&action=find&id=" + userID)
        document.querySelector("#_edituserName").value = userInfo.Name
        document.querySelector("#_edituserUserName").value = userInfo.UserName
        document.querySelector("#_edituserRole").value = userInfo.Role == "0" ? "Khách" : "Admin"
        document.querySelector("#_edituserTier").value = userInfo.Tier
        document.querySelector("#_editUserForm").action = "../../backend/?controller=user&action=update&userID=" + userID
    }
}

async function _sendData() {
    document.querySelector("#exampleModal .modal-footer .btn-primary").addEventListener('click', async () => {
        const inputs = document.querySelectorAll("#_addUserForm input");
        for (let input of inputs) {
            console.log(input.value);
            if (input.value == "") {
                alert("Vui lòng nhập đủ thông tin");
                return; // Thoát khỏi hàm
            }
        }
        // Dữ liệu form
        const formData = new FormData(document.getElementById('_addUserForm'));

        // Tùy chọn cấu hình cho request
        const requestOptions = {
            method: 'POST', // Phương thức HTTP
            body: formData, // Dữ liệu form
        };

        // URL của endpoint nhận request
        const url = "../../backend/?controller=user&action=insert";

        // Gửi request sử dụng fetch
        fetch(url, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Đọc và trả về dữ liệu JSON từ phản hồi
            })
            .then(data => {
                console.log(data == true);
                data == true ? alert("Thêm người dùng thành công") : alert("Thêm người dùng thất bại")
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
    })
}

async function _searchData() {
    function checkKeyword(tds, keyWord) {
        for (let td of tds) {
            if (td.textContent.toLowerCase().includes(keyWord)) {
                return true
            }
        }
        return false
    }

    document.querySelector(".search-area button").addEventListener('click', () => {
        var keyWord = document.querySelector(".search-area input").value.toLowerCase()
        document.querySelectorAll("#example5 tbody tr").forEach(item => {
            checkKeyword(item.querySelectorAll("td"), keyWord) ? item.classList.remove("d-none") : item.classList.add("d-none")
        })
    })
}

async function _sendeditData(userID) {
    document.querySelector("#editUserModal .modal-footer .btn-primary").addEventListener('click', async () => {
        // Dữ liệu form
        const formData = new FormData(document.getElementById('_editUserForm'));

        // Tùy chọn cấu hình cho request
        const requestOptions = {
            method: 'POST', // Phương thức HTTP
            body: formData, // Dữ liệu form
        };

        // URL của endpoint nhận request
        const url = "../../backend/?controller=user&action=update&userID=" + userID;

        // Gửi request sử dụng fetch
        fetch(url, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Đọc và trả về dữ liệu JSON từ phản hồi
            })
            .then(data => {
                console.log(data == true);
                data == true ? alert("Chỉnh sửa người dùng thành công") : alert("Chỉnh sửa người dùng thất bại")
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
    })
}

