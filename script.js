lucide.createIcons();
const giftBtn = document.getElementById("giftBtn");
const giftModal = document.getElementById("giftModal");
const closeModal = document.getElementById("closeModal");

giftBtn.addEventListener("click", () => giftModal.style.display = "block");
closeModal.addEventListener("click", () => giftModal.style.display = "none");
window.addEventListener("click", (e) => { if(e.target === giftModal) giftModal.style.display = "none"; });
