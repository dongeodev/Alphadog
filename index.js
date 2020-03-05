import "./index.css";
import heroLogo from "./Images/logo.svg";
import paseador from "./Images/paseador.png";
import paseo from "./Images/paseo.png";
import paseovip from "./Images/paseovip.png";
import guarderia from "./Images/guarderia.png";

const $buttonMenu = document.getElementById("hamburger-menu");
const $menu = document.getElementById("menu");
const $li1 = document.getElementById("link1");
const $li2 = document.getElementById("link2");
const $li3 = document.getElementById("link3");
const $li4 = document.getElementById("link4");
const phone = window.matchMedia("screen and (max-width:480px)");

function toggleShow() {
  $menu.classList.toggle("is-active");
}
function validation(e) {
  if (e.matches) {
    $buttonMenu.addEventListener("click", toggleShow);
    $li1.addEventListener("click", toggleShow);
    $li2.addEventListener("click", toggleShow);
    $li3.addEventListener("click", toggleShow);
    $li4.addEventListener("click", toggleShow);
  } else {
    $buttonMenu.removeEventListener("click", toggleShow);
    $li1.removeEventListener("click", toggleShow);
    $li2.removeEventListener("click", toggleShow);
    $li3.removeEventListener("click", toggleShow);
    $li4.removeEventListener("click", toggleShow);
  }
}
phone.addListener(validation);

const $hlogo = document.getElementById("hero__logo");
$hlogo.setAttribute("src", heroLogo);
const $walker1 = document.getElementById("walker1--img");
$walker1.setAttribute("src", paseador);
const $walker2 = document.getElementById("walker2--img");
$walker2.setAttribute("src", paseador);
const $walker3 = document.getElementById("walker3--img");
$walker3.setAttribute("src", paseador);

const $paseo = document.getElementById("paseo");
$paseo.setAttribute("src", paseo);
const $paseovip = document.getElementById("paseo--vip");
$paseovip.setAttribute("src", paseovip);
// console.log($paseo);
const $guarderia = document.getElementById("guarderia");
$guarderia.setAttribute("src", guarderia);
