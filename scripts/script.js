const faq = document.getElementById("faq");
const facebook = document.getElementById("facebook");
const youtube = document.getElementById("youtube");
facebook.href = "https://www.facebook.com";
facebook.target = "_blank";
youtube.target = "_blank";
youtube.href = "https://www.youtube.com/";

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
