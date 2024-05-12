import "./styles.css";

const dropdowncontent = document.querySelector(".dropdowncontent");
const dropdownbutton = document.querySelector(".dropdownbutton");

const toggleDropDown = function () {
  dropdowncontent.classList.toggle("show");
};

dropdownbutton.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleDropDown();
});

document.documentElement.addEventListener("click", () => {
  if (dropdowncontent.classList.contains("show")) {
    toggleDropDown();
  }
});
