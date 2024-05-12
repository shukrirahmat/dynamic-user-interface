import "./styles.css";
import {setUpClickDropdown, setUpHoverDropdown} from "./setUpDropdown";

const dropdownClick = document.querySelector("#forclick");
const dropdownClickContent = document.querySelector("#clickcontent");
const dropdownHover = document.querySelector("#forhover");
const dropdownHoverContent = document.querySelector("#hovercontent");

setUpClickDropdown(dropdownClick, dropdownClickContent, "show");
setUpHoverDropdown(dropdownHover, dropdownHoverContent, "show");
