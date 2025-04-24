document.addEventListener("DOMContentLoaded", async () => {
  _init();
  _filterByCondition();
});

async function _init() {
  var items = await Helper.fetchData("booking");
  var table = document.querySelector("#example5 tbody");
  var itemDiv = table.querySelector("tr").cloneNode(true);

  table.innerHTML = "";
  items.forEach(async (item) => {
    var cloneitemDiv = itemDiv.cloneNode(true);
    cloneitemDiv.querySelector("._bookingGuestName").textContent =
      item.GuestName;
    cloneitemDiv.querySelector("._bookingDate").textContent = item.Date;
    cloneitemDiv.querySelector("._bookingCount").textContent = item.Count;
    cloneitemDiv.querySelector("._bookingGuestEmail").textContent =
      item.GuestEmail;
    cloneitemDiv.querySelector("._bookingGuestPhone").textContent =
      item.GuestPhone;
    cloneitemDiv.querySelector("._bookingNote").textContent = item.Note;

    cloneitemDiv
      .querySelector("._buttonDelete")
      .addEventListener("click", async () => {
        cloneitemDiv.remove();
        await fetch(
          "../../backend/?controller=booking&action=delete&id=" + item.ID
        );
      });
    table.appendChild(cloneitemDiv);
  });
}

async function _filterByCondition() {
  document
    .querySelector("#selectOrderStatus")
    .addEventListener("change", filter);
  document
    .querySelector(".search-area button")
    .addEventListener("click", filter);

  function filter() {
    document.querySelectorAll("#example5 tbody tr").forEach((item) => {
      selectOrder(item) && searchBy(item)
        ? item.classList.remove("d-none")
        : item.classList.add("d-none");
    });

    function selectOrder(trSelected) {
      var bookingStatus = trSelected.querySelector(
        "._bookingStatus span"
      ).textContent;
      if (document.querySelector("#selectOrderStatus").value == "Tất cả") {
        return true;
      } else if (
        bookingStatus != document.querySelector("#selectOrderStatus").value
      ) {
        return false;
      } else {
        return true;
      }
    }

    function searchBy(trSelected) {
      var keyWord = document
        .querySelector(".search-area input")
        .value.toLowerCase();
      if (
        trSelected
          .querySelector("._bookingGuestName")
          .textContent.toLowerCase()
          .includes(keyWord)
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
}
