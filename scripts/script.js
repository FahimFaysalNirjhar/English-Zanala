const faq = document.getElementById("faq");

function removeActive() {
  const activebtn = document.querySelectorAll(".active");
  activebtn.forEach((btn) => {
    btn.classList.remove("active");
  });
}

faq.addEventListener("click", () => {
  removeActive();
  faq.classList.add("active");
  const accordion = document.getElementById("accordion");
  accordion.scrollIntoView({ behavior: "smooth" });
});
