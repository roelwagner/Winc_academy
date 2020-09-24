const btnAlert = document.querySelector("#mybutton");
const alertButton = () => {
  alert("button clicked");
};
btnAlert.addEventListener("click", alertButton);

const bkg = document.querySelector(".blue-background");
const toggleBackground = () => {
  bkg.classList.toggle("red-background");
};
bkg.addEventListener("click", toggleBackground);
