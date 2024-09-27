// Get the modal elements
const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const closeModalBtn = document.querySelector(".close");

// Get all list items that will trigger the modal
const listItems = document.querySelectorAll(".list-item");

// When any list item is clicked, open the modal and display corresponding text
listItems.forEach((item) => {
  item.addEventListener("click", function () {
    modalText.textContent = this.getAttribute("data-modal");
    modal.style.display = "block";
  });
});

// Close the modal when the 'x' is clicked
closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Close the modal when the user clicks outside of the modal content
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
