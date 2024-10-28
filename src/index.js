import "./styles.css";
import  { home } from "./home";
import { about } from "./about";
import { menu } from "./menu";

home();

document.querySelector("#home").addEventListener("click", () => {home()});
document.querySelector("#about").addEventListener("click", () => {about()});
document.querySelector("#menu").addEventListener("click", () => {menu()});