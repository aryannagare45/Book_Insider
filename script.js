const books = document.querySelectorAll(".book");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalAudio = document.getElementById("modalAudio");

books.forEach(book => {
  book.addEventListener("click", () => {
    modalTitle.innerText = book.dataset.title;
    modalImg.src = book.dataset.img;
    modalDesc.innerText = book.dataset.desc;

    modalAudio.src = book.dataset.audio;
    modalAudio.load();
    modalAudio.currentTime = 0;

    modal.style.display = "flex";
  });
});

function closeModal() {
  modalAudio.pause();
  modalAudio.currentTime = 0;
  modal.style.display = "none";
}
