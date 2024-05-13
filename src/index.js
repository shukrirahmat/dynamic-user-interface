import "./styles.css";
import "./index.html";
import { setUpClickDropdown, setUpHoverDropdown } from "./setUpDropdown";
import setUpImageCarousel from "./setUpImageCarousel";

const dropdownClick = document.querySelector("#forclick");
const dropdownClickContent = document.querySelector("#clickcontent");
const dropdownHover = document.querySelector("#forhover");
const dropdownHoverContent = document.querySelector("#hovercontent");
const slideimages = document.querySelectorAll(".slides");
const nextbtn = document.querySelector(".next");
const previousbtn = document.querySelector(".previous");

setUpClickDropdown(dropdownClick, dropdownClickContent, "show");
setUpHoverDropdown(dropdownHover, dropdownHoverContent, "show");
setUpImageCarousel([...slideimages], nextbtn, previousbtn, "show");
