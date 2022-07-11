const checkButton = document.getElementById("check");
const ul = document.querySelector(".opciones-nav");

checkButton.addEventListener("click", () => {
  ul.classList.toggle("checked");
});
