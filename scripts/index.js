const main = document.querySelector("main");
const heading = document.querySelector("#heading");
const textBlue = document.getElementById("text-blue");
const para = document.getElementById("para");
const login = document.getElementById("login");

main.classList.add("flex");
main.classList.add("flex-col");
main.classList.add("md:flex-row");
main.classList.add("items-center");
main.classList.add("justify-between");
main.classList.add("w-11/12");
main.classList.add("mt-20");
main.classList.add("mx-auto");

heading.classList.add("text-5xl");
heading.classList.add("font-poppins");
heading.classList.add("font-bold");

textBlue.classList.add("text-[#48cae4]");

para.classList.add("text-2xl");
para.classList.add("text-[#6c757d]");
para.classList.add("text-[#6c757d]");
para.classList.add("max-w-2xl");
para.classList.add("leading-relaxed");
para.classList.add("mt-6");
para.classList.add("font-tiro");

login.classList.add("bg-[#422AD5]");
login.classList.add("text-white");

login.addEventListener("click", () => {
  let nameInput = document.querySelector("#Name-Input").value;
  let pin = document.querySelector("#Password-Input").value;
  let convertPin = Number(pin);
  console.log(convertPin);
  if (nameInput === "") {
    alert("Please Enter Your Name First");
  } else {
    if (convertPin === 123456) {
      window.location.href = "./main.html";
    } else {
      alert("Invaild Login Code");
    }
  }
});
