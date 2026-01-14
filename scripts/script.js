const description = document.getElementById("description");
const faq = document.getElementById("faq");
const facebook = document.getElementById("facebook");
const youtube = document.getElementById("youtube");
const github = document.getElementById("github");
const footer = document.getElementById("footer");
const logo = document.getElementById("logo");
const english = document.getElementById("english");
const bangla = document.getElementById("bangla");
const bnEn = document.getElementById("bn-En");
const footerTitle = document.getElementById("footer-title");
const social = document.getElementById("social");
const nav = document.getElementById("nav");
const logoContainer = document.getElementById("logo-container");
const logoEng = document.getElementById("logo-eng");
const logoBng = document.getElementById("logo-bng");
const header = document.getElementById("header");
const headerContainer = document.getElementById("header-container");

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

english.classList.add("font-bold");
english.classList.add("text-2xl");
english.classList.add("font-poppins");

bangla.classList.add("font-tiro");
bangla.classList.add("text-2xl");
bangla.classList.add("font-medium");

bnEn.classList.add("font-tiro");

footerTitle.classList.add("footer-title");

social.classList.add("grid");
social.classList.add("grid-flow-col");
social.classList.add("gap-4");

nav.classList.add("flex");
nav.classList.add("gap-3");

logoContainer.classList.add("flex");
logoContainer.classList.add("items-center");
logoContainer.classList.add("gap-1");

logoEng.classList.add("font-poppins");
logoEng.classList.add("font-bold");
logoEng.classList.add("text-2xl");

logoBng.classList.add("font-tiro");
logoBng.classList.add("text-2xl");
logoBng.classList.add("font-medium");

header.classList.add("bg-gray-100");
header.classList.add("border-b");
header.classList.add("border-b-[#C6BDBD]");
header.classList.add("border-b-[#C6BDBD]");
header.classList.add("sticky");
header.classList.add("top-0");
header.classList.add("z-50");

headerContainer.classList.add("flex");
headerContainer.classList.add("flex-col");
headerContainer.classList.add("md:flex-row");
headerContainer.classList.add("gap-4");
headerContainer.classList.add("justify-between");
headerContainer.classList.add("max-w-10/12");
headerContainer.classList.add("mx-auto");
headerContainer.classList.add("items-center");
headerContainer.classList.add("p-5");
