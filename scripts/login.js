const login = document.querySelector("#login");

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
