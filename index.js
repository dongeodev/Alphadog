
const $buttonMenu = document.getElementById('hamburger-menu')
const $menu = document.getElementById('menu')
const $li1 = document.getElementById('link1')
const $li2 = document.getElementById('link2')
const $li3 = document.getElementById('link3')
const $li4 = document.getElementById('link4')

$buttonMenu.addEventListener('click', (e)=>(  
    $menu.classList.toggle('is-active')
))

$li1.addEventListener('click', (e)=>{  
  $menu.classList.remove('is-active')
})
$li2.addEventListener('click', (e)=>{  
  $menu.classList.remove('is-active')
})
$li3.addEventListener('click', (e)=>{  
  $menu.classList.remove('is-active')
})
$li4.addEventListener('click', (e)=>{  
  $menu.classList.remove('is-active')
})
