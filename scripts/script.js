const description = document.getElementById("description");
const faq = document.getElementById("faq");
const facebook = document.getElementById("facebook");
const youtube = document.getElementById("youtube");
const github = document.getElementById("github");
const footer = document.getElementById("footer");
const logo = document.getElementById("logo");

facebook.href = "https://www.facebook.com";
facebook.target = "_blank";
youtube.target = "_blank";
youtube.href = "https://www.youtube.com/";
github.href = "https://github.com/FahimFaysalNirjhar";
github.target = "_blank";

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

description.classList.add("flex");
description.classList.add("flex-col");
description.classList.add("md:flex-row");
description.classList.add("items-center");
description.classList.add("justify-between");
description.classList.add("w-11/12");
description.classList.add("mx-auto");
description.classList.add("mt-20");

footer.classList.add("flex");
footer.classList.add("flex-col");
footer.classList.add("md:flex-row");
footer.classList.add("justify-between");
footer.classList.add("items-center");
footer.classList.add("w-11/12");
footer.classList.add("mx-auto");

logo.classList.add("flex");
logo.classList.add("items-center");
logo.classList.add("gap-1");
