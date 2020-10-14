const $button = document.querySelector(".nav__button");
const text = ($button.textContent = " ");
const $menu = document.querySelector(".menu");
const $menulink = document.querySelectorAll(".menu__link");
/*
$menu.setAttribute("style", "transition: linear transform 200ms ");*/
$button.addEventListener("click", () => {
  /*esta line de codigo dice: que menu se le agrege la clase ' ("classList").contains' ESTO VA JUNTO PARA AGREGAR UNA CLASE A LO QUE PONGA*/
  if ($menu.classList.contains("menu__button--on")) {
    $menu.classList.toggle("menu__button--on");
   
  } else {
    $menu.classList.toggle("menu__button--on");
     
  }
});


$menulink.forEach((elem) => {
  elem.addEventListener("click", () => {
    
 /*aqui dice que cunado cuando de click se remueva 
 la clase "menu__button--on" */
    $menu.classList.remove("menu__button--on");
    
  });
});
