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
const footerTag = document.querySelector("footer");
const headerTitle = document.getElementById("header-title");
const headerPara = document.getElementById("header-para");

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
const div = document.createElement("div");
section.appendChild(container);
section.appendChild(div);
div.classList.add("text-center");
div.classList.add("py-6");
div.classList.add("hidden");

const cardContainer = document.createElement("div");
cardContainer.classList.add("bg-[#F8F8F8]");
cardContainer.classList.add("rounded-3xl");
cardContainer.classList.add("rounded-3xl");
cardContainer.classList.add("my-10");
cardContainer.classList.add("p-8");
cardContainer.classList.add("grid");
cardContainer.classList.add("grid-cols-1");
cardContainer.classList.add("lg:grid-cols-3");
cardContainer.classList.add("gap-6");
cardContainer.classList.add("auto-rows-fr");
section.appendChild(cardContainer);

cardContainer.innerHTML = `
  <div class="flex flex-col gap-5 justify-center items-center col-span-3">
          <p class="text-[#79716B] font-tiro text-sm">
            আপনি এখনো কোন Lesson Select করেননি
          </p>
          <p class="font-tiro font-semibold text-[#292524] text-3xl">
           একটি Lesson Select করুন।
          </p>
        </div>
`;
// {
//     "id": 101,
//     "level_no": 1,
//     "lessonName": "Basic Vocabulary"
// }

div.innerHTML = `
  <span class="loading loading-spinner loading-xs"></span>
<span class="loading loading-spinner loading-sm"></span>
<span class="loading loading-spinner loading-md"></span>
<span class="loading loading-spinner loading-lg"></span>
<span class="loading loading-spinner loading-xl"></span>
`;

function showLoader() {
  div.classList.remove("hidden");
  cardContainer.classList.add("hidden");
}

function hideLoader() {
  div.classList.add("hidden");
  cardContainer.classList.remove("hidden");
}

function loadButtons() {
  const URL = `https://openapi.programming-hero.com/api/levels/all`;
  fetch(URL)
    .then((response) => response.json())
    .then((data) => displayLessons(data.data));
}

const displayLessons = (data) => {
  console.log(data);

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
  showLoader();
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
  if (words.length === 0) {
    cardContainer.innerHTML = `
  <div class="flex flex-col gap-5 justify-center items-center col-span-3">
          <img src="assets/alert-error.png" alt="" />
          <p class="text-[#79716B] font-tiro text-sm">
            এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
          </p>
          <p class="font-tiro font-semibold text-[#292524] text-3xl">
            নেক্সট Lesson এ যান
          </p>
        </div>
`;
  }
  words.forEach((word) => {
    const meaning = word.meaning === null ? "অর্থ নেই" : word.meaning;
    const card = document.createElement("div");
    card.innerHTML = `
      <div class="card bg-white rounded-xl h-full">
          <div class="card-body items-center text-center">
            <h2 class="card-title font-poppins text-black font-bold text-3xl">${word.word}</h2>
            <p class="text-black font-poppins font-semibold text-lg text-gray-500">
              Meaning /Pronounciation
            </p>
            <p class="text-black font-tiro font-bold text-2xl">
              "${meaning} / ${word.pronunciation}"
            </p>
            <div class="card-actions justify-between w-full mt-6">
              <button onclick = loadWordDetails(${word.id}) class="btn">
                <i class="fa-etch fa-solid fa-circle-info text-lg"></i>
              </button>
              <button class="btn" onclick="pronounceWord('${word.word}')">
                <i class="fa-solid fa-volume text-lg"></i>
              </button>
            </div>
          </div>
        </div>
    `;
    cardContainer.append(card);
  });
  hideLoader();
};

function pronounceWord(word) {
  console.log(word);

  window.speechSynthesis.cancel(); // stop previous speech
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-US";
  window.speechSynthesis.speak(utterance);
}

function loadWordDetails(id) {
  console.log(id);
  const URL = `https://openapi.programming-hero.com/api/word/${id}`;
  fetch(URL)
    .then((response) => response.json())
    .then((data) => displayModal(data.data));
}

// {
//     "word": "Eager",
//     "meaning": "আগ্রহী",
//     "pronunciation": "ইগার",
//     "level": 1,
//     "sentence": "The kids were eager to open their gifts.",
//     "points": 1,
//     "partsOfSpeech": "adjective",
//     "synonyms": [
//         "enthusiastic",
//         "excited",
//         "keen"
//     ],
//     "id": 5
// }

const displayModal = (word) => {
  console.log(word.word);
  const meaning = word.meaning === null ? "অর্থ পাওয়া যায়নি" : word.meaning;

  const partsOfSpeech = word.partsOfSpeech ? word.partsOfSpeech : "";

  const synonyms = word.synonyms?.length ? word.synonyms : [];

  const p = synonyms.map(
    (synonym) => `
      <p class="flex gap-3 px-4 py-3 rounded-md border border-[#D7E4EF] bg-[#EDF7FF]">
        ${synonym}
      </p>
    `,
  );

  document.getElementById("word_details").showModal();
  const modal = document.querySelector(".details-container");
  console.log(modal);

  modal.innerHTML = `
  <div class="p-6 rounded-xl border-2 border-[#EDF7FF] bg-white flex flex-col gap-6">
    <h1 class="text-xl font-bold font-poppins">${word.word}(<i class="fa-etch fa-solid fa-microphone"></i> ${word.pronunciation})</h1>

    <h1 class="text-sm font-poppins font-semibold">Meaning</h1>
    
    <h1 class="text-lg font-semibold font-tiro">${meaning}</h1>

    <h1 class="text-sm font-poppins font-semibold">Example</h1>

    <h1 class="text-sm font-poppins">${word.sentence}</h1>

    <h1 class="text-sm font-poppins font-semibold">Parts Of Speech</h1>

    <h1 class="text-sm font-poppins">${partsOfSpeech}</h1>

    <h1 class="text-lg font-semibold font-tiro">সমার্থক শব্দ গুলো</h1>

    <div class = "flex flex-col md:flex-row gap-3">${p}</div>
    
  </div>
`;
};

console.log(footerTag);

footerTag.classList.add("p-10");
footerTag.classList.add("border-t-4");
footerTag.classList.add("border-t-[#FFEBEB]");

headerTitle.classList.add("text-5xl");
headerTitle.classList.add("font-poppins");
headerTitle.classList.add("font-bold");

headerPara.classList.add("text-2xl");
headerPara.classList.add("text-[#6c757d]");
headerPara.classList.add("max-w-2xl");
headerPara.classList.add("leading-relaxed");
headerPara.classList.add("mt-6");
headerPara.classList.add("font-tiro");
