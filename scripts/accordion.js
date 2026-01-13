const faq = document.getElementById("faq");

faq.addEventListener("click", () => {
  const accordion = document.getElementById("accordion");
  accordion.scrollIntoView({ behavior: "smooth" });
});
