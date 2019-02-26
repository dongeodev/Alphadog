
const $buttonMenu = document.getElementById('hamburger-menu')
const $menu = document.getElementById('menu')
const $li1 = document.getElementById('link1')
const $li2 = document.getElementById('link2')
const $li3 = document.getElementById('link3')
const $li4 = document.getElementById('link4')
const phone = window.matchMedia('screen and (max-width:480px)')

function toggleShow(){
  $menu.classList.toggle('is-active')
}
function validation (e){
  if(e.matches ){

    $buttonMenu.addEventListener('click', toggleShow)
    $li1.addEventListener('click', toggleShow)
    $li2.addEventListener('click', toggleShow)
    $li3.addEventListener('click',toggleShow)
    $li4.addEventListener('click', toggleShow)
  }else{
    $buttonMenu.removeEventListener('click', toggleShow)
    $li1.removeEventListener('click', toggleShow)
    $li2.removeEventListener('click', toggleShow)
    $li3.removeEventListener('click',toggleShow)
    $li4.removeEventListener('click', toggleShow)
  }
  
}
phone.addListener(validation)

