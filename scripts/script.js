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
const section = document.getElementById("api-section");
const lesson = document.getElementById("lesson");

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

faq.classList.add("text-[#422AD5]");
faq.classList.add("border-2");
faq.classList.add("border-[#422AD5]");

section.classList.add("w-10/12");
section.classList.add("mx-auto");
section.classList.add("my-20");

lesson.addEventListener("click", () => {
  removeActive();
  lesson.classList.add("active");
  section.scrollIntoView({ behavior: "smooth" });
});

const h1 = document.createElement("h1");
h1.innerHTML = `
<span class="text-[#00BCFF]">Let's</span> Learn Vocabularies`;

h1.classList.add("font-poppins");
h1.classList.add("text-4xl");
h1.classList.add("font-bold");
h1.classList.add("text-center");
h1.classList.add("mb-20");

section.appendChild(h1);

const container = document.createElement("div");
container.classList.add("flex");
container.classList.add("justify-center");
container.classList.add("items-center");
container.classList.add("flex-wrap");
container.classList.add("gap-6");
section.appendChild(container);

const cardContainer = document.createElement("div");
cardContainer.classList.add("bg-[#F8F8F8]");
cardContainer.classList.add("rounded-3xl");
cardContainer.classList.add("rounded-3xl");
cardContainer.classList.add("my-10");
cardContainer.classList.add("p-8");
cardContainer.classList.add("grid");
cardContainer.classList.add("grid-cols-3");
cardContainer.classList.add("gap-6");
cardContainer.classList.add("auto-rows-fr");
section.appendChild(cardContainer);
// {
//     "id": 101,
//     "level_no": 1,
//     "lessonName": "Basic Vocabulary"
// }

function loadButtons() {
  const URL = `https://openapi.programming-hero.com/api/levels/all`;
  fetch(URL)
    .then((response) => response.json())
    .then((data) => displayLessons(data.data));
}

const displayLessons = (data) => {
  // console.log(data);

  for (item of data) {
    const name = item.lessonName;

    const div = document.createElement("div");

    div.innerHTML = `
    <button id=btn-${item.level_no} class="btn text-[#422AD5] border-2 border-[#422AD5]" onclick=loadLessons(${item.level_no}) >
            <i class="fa-etch fa-solid fa-book-open"></i> ${name}
          </button>
    `;
    container.appendChild(div);
  }
};

loadButtons();

function loadLessons(id) {
  console.log(id);
  const URL = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      removeActive();
      const clickedbtn = document.getElementById(`btn-${id}`);
      clickedbtn.classList.add("active");
      displayWords(data.data);
    });
}

// {
//     "id": 5,
//     "level": 1,
//     "word": "Eager",
//     "meaning": "আগ্রহী",
//     "pronunciation": "ইগার"
// }

const displayWords = (words) => {
  console.log(words);
  cardContainer.innerHTML = "";
  words.forEach((word) => {
    const card = document.createElement("div");
    card.innerHTML = `
      <div class="card bg-white rounded-xl h-full">
          <div class="card-body items-center text-center">
            <h2 class="card-title text-black font-bold text-3xl">${word.word}</h2>
            <p class="text-black font-bold text-lg text-gray-500">
              Meaning /Pronounciation
            </p>
            <p class="text-black font-bold text-2xl">
              "${word.meaning} / ${word.pronunciation}"
            </p>
            <div class="card-actions justify-between w-full mt-6">
              <button class="btn">
                <i class="fa-etch fa-solid fa-circle-info text-lg"></i>
              </button>
              <button class="btn">
                <i class="fa-solid fa-volume text-lg"></i>
              </button>
            </div>
          </div>
        </div>
    `;
    cardContainer.append(card);
  });
};
