

/*document.getElementsByTagName("li,a,html")
document.getElementsByName("nombre de el imput")
document.getElementsByclassName("Wnombre de clase")*/

/*PA Q SIRVE EL setAttribute("se puede agrgar para css y htaml l que sea"," y aqui complemento")
const $linkDom = document.querySelector(".link-dom")
console.log($linkDom);*/
/*EJEMPLOS
console.log($linkDom.setAttribute("target","blank"));
console.log($linkDom.setAttribute("id","feo"));
console.log($linkDom.setAttribute("rel","noopener"));
console.log($linkDom.setAttribute("href","https://hola.com"));
*/
/*.hasAttribute("") sirve para la ver si hay o nahysi true mo flase 

console.log($linkDom.hasAttribute("rel"));



$linkDom.removeAttribute("rel")

 
 console.log($linkDom.hasAttribute("rel"));
*/
/*aqui lo volvi A AGREGAR

console.log($linkDom.setAttribute("rel","noopener"));

console.log($linkDom.hasAttribute("rel")); */

//continuamos "Data-Attributes" 

/*console.log($linkDom.getAttribute("data-description"));
console.log($linkDom.dataset);
console.log($linkDom.dataset.description);*/

/*style en javascript

console.log($linkDom.style);
*/
//otra manera COMO TRAER EL ARCHIVO SOLITO

// console.log($linkDom.getAttribute('style'));

/*text en dom*/
//como cambiar el texto de un documento html con javarscript
// const $whatlsDom = document.getElementById("que-es")

// let text= "<p> fasdfdsadsadsadasdssdasdsadsaaasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p><br><p>sdasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p><br><p>{{{{{{{{{{llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll</p>"
/*1es te lo copia de esa manera que esta no leyendo domcumento html la como esta lo cambia
$whatlsDom.innerText = text */
/*2.1esto si le el documento html pero su sintaxis no es la mejor y necita mejorar para eso se utilisa 
con .outerHTML
$whatlsDom.innerHTML = text ;*/

/*2.2este ase que la sintaxis HTMLse bien escrita
$whatlsDom.outerHTML = text; */

/*3este no respeta los espacios y solo lo copias asi nomas solo lo copias sin respetare el html

$whatlsDom.textContent = text */
// 	LOS TRES SIRVEN DE MANERAS DISSTINATAS PERO AGREGAN CAMBIAN DE CONTENIDA POR MEDIO DE J.S CAMBIAN EL DOM
/*PRACTICS*/
/*const $imagenesDom = document.querySelector(".cards") 
const $imagenesDom = document.getElementsByClassName(".cards") 
const $imagenesDom = document.querySelector(".cards") 
console.log($imagenesDom);
console.log($imagenesDom.setAttribute("id","perro"));
const $parrafos = document.querySelector("#clase1") 
console.log($parrafos.setAttribute("class","dedo"));

console.log($parrafos);

const text11 = '<p id="clase1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae modi natus doHPLA PERRA lor praesentium laudantium saepe possimus sapiente consectetur? Explicabo culpa obcaecati unde temporibus sapiente ipsam distinctio perferendis iusto, iure at</p>'
$parrafos.innerHTML = text11
console.log($parrafos.outerHTML = text11
);
*/



/*	DOM TRAVERSING "RECORRIENDO EL DOM"
const $imagenesDom = document.querySelector(".cards") 
//ASI SE PONE TODO EL CUERPO DE EL BODY 
console.log($imagenesDom);
//ASI ENTRAMOS EN EL HIJO DEL ARCHIVO $IMAGENESDOM OSEA EL [] SE UTILISA COMO UN ARRAY
console.log($imagenesDom.children[3]);
// CON EL PARENTELEMENT SEÑALAS A LOS PADRE DE ESE ELEMENTO O DEL ELEMENTO MAS CERCANO
console.log($imagenesDom.parentElement);
// abos traen el primer archivp completo pero solo el primero
console.log($imagenesDom.firstElementChild);
//el ultimo  archivo completo pero solo el ultimo
console.log($imagenesDom.lastElementChild);
//ami no me da nada...
 console.log($imagenesDom.previousElementSibling);
 // me trae el archivo padre y el RCHICVO HIJO DEL PRIMER LENGTH[1]...
  console.log($imagenesDom.nextElementSibling);
  // aqui buscas dentro del el archivo no afuera SALE NULL SI NO AHY Y SI HAY NOS MUESTRA
   console.log($imagenesDom.closest("h1"));
  */
 
 /* CREANDO ELEMENTOS Y FRAGMENTOS EN JAVASCRIPT 
 const $figure = document.createElement("figure");
 console.log($figure);
 $img = document.createElement("img");
 $figcaption = document.createElement("figcaption");
 $figcaptionText = document.createTextNode("animals");
 $cards = document.querySelector(".cards");




$img.setAttribute("src","https://placeimg.com/180/180/animals");
$img.setAttribute("alt","animals");
$figure.classList.add("card")//ESTE SIRVE PARA CREAR CLASES DESDE J.S AQUI DICE SE AGREGA LA CLASE


 $figcaption.appendChild($figcaptionText);
 $figure.appendChild($img);
 $figure.appendChild($figcaption);
 $cards.appendChild($figure);

// ESTE ES PARTE DE LA COMO CREAR ELEMENTOS PERO ESTE ES CON innerHTML

$figure2 = document.createElement("figure");


$figure2.innerHTML = '<img src="https://placeimg.com/180/180/nature" alt="people"><figcaption>nature</figcaption>';	


 $figure2.classList.add("card");
 $cards.appendChild($figure2)
*/
/*PRACTICAMOS CREAR ELEMENTOS */
/*const $figure = document.createElement("figure");
const $img =document.createElement("img");
const $figcaption = document.createElement("figcaption");
const $figcaptionText=document.createTextNode("arquitectura");
const $agregarAlDom = document.querySelector(".cards")

$img.setAttribute("src","https://placeimg.com/300/300/arch");
$img.setAttribute("alt","arch");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$figure.classList.add("card");
$agregarAlDom.appendChild($figure)

console.log($figure)


//ESTE ES LA SEGUNDA MANERA DE CREAR ELEMENTOS MAS FACIL PERO CON PROMBLEMAS DE SINTASXIS

const $figure2 = document.createElement("figure");

$figure2.innerHTML="<img src='img/gomball.jpg' alt='gomball'><figcaption>gomball</figcaption>";
$figure2.classList.add("card");
$agregarAlDom.appendChild($figure2)
console.log($figure2);
/*FRAGMENTOS*/

/*
// primera forma de crear un elemento 1.0
document.write("<h2>ESTACIONES DEL AÑO</h2>")
const arrayEstaciones=["invierno","verano","otoño","primavera"];
const $ul =document.createElement("ul");
document.body.appendChild($ul);
$ul.innerHTML="";
arrayEstaciones.forEach(el=>$ul.innerHTML +=`<li>${el}</li>`);*/
/*```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````*/

/*// segunda manera 2
document.write("<h2>continetes</h2>")
const continentes =["america","occioanial","europa","artica"];
$ul2=document.createElement("ul")
document.body.appendChild($ul2)

continentes.forEach(el=>{
	const $li = document.createElement("li");
	$li.textContent = el ;
	$ul2.appendChild($li)
})
//CREANDO FRAGMENTOS QUE SON MAS FACILES QUE CREAR ELEMENTOS 3


const meses =["enero","febrero","marzo","abril","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
$ul3=document.createElement("ul");
$fragmentos2=document.createDocumentFragment();
meses.forEach(el=>{
	const $li = document.createElement("li");
	$li.textContent=el;
	$fragmentos2.appendChild($li);
})
document.write("<h2>meses DEL AÑO</h2>")

$ul3.appendChild($fragmentos2);
document.body.appendChild($ul3)


//PRACTICA


document.write("--COLORES-- createElement")
const colores=["rojo","negro","azul","amarillo","rosa","celeste","verde"]
const $ul4 = document.createElement("ul");
document.body.appendChild($ul4);
colores.forEach(el=>{
	$li=document.createElement("li");
	$li.textContent=el;
 $ul4.appendChild($li)
})

document.write("--COLORES--2 con innerHTML")
const colores2=["rojo","negro","azul","amarillo","rosa","celeste","verde"]
const $ul5 = document.createElement("ul");
document.body.appendChild($ul5);
$ul5.innerHTML="";
colores.forEach(el=>{$ul5.innerHTML += `<li>${el}</li>`	
}) 



document.write("--COLORES3-- fragmentos")
const colores3=["rojo","negro","azul","amarillo","rosa","celeste","verde"]
const $ul6 = document.createElement("ul");
const $fragmentos3 =document.createDocumentFragment();

colores3.forEach(el=>{
	$li=document.createElement("li");
	$li.textContent=el;
 $fragmentos3.appendChild($li)
})
$ul6.appendChild($fragmentos3)
document.body.appendChild($ul6);


*/









  /*EL TEMPLATE EN JAVASCRIPT */
/*const $cards = document.querySelector(".card");
 $template = document.getElementById("template");
$fagmants = document.createDocumentFragment();
cardContent = [{
	title:"tecnologia",
	img:"https://placeimg.com/180/180/tech"
},
{
	title:"animales",
	img:"https://placeimg.com/180/180/amimals"
},
{
	title:"people",
	img:"https://placeimg.com/180/180/personas"
},
{
	title:"naturaleza",
	img:"https://placeimg.com/180/180/nature"
},
{
	title:"arquitectura",
	img:"https://placeimg.com/180/180/arch"
}
]
 

 cardContent.forEach(el=>{
  	$template.querySelector("img").setAttribute("src","el.img");
  	$template.querySelector("img").setAttribute("alt","el.title");
  	$template.querySelector("figcaption").textContent = el.title;

  	let $clone = document.importNode($template,true)
  }) 

$card.appendChild($fragments)*/







/*MODIFICANDO LOS ELEMENTOS*/
/* 
.insertAdjacent...
    .insertAdjacentElement(position,el)
    .insertAdjacentHTML(position,html)
    .insertAdjacentText(position,text)

posiciones:
    beforebegin (hermano anterior)
    afterbegin (primer hijo)
    beforeend (ultimo hijo)
    afterend  (hermano siguiente)
*/

/*practica de todos juntos...*/


const $agregarAlDom = document.querySelector(".cards")
const $figure2 = document.createElement("figure");

$figure2.innerHTML="<img src='img/gomball.jpg' alt='gomball'><figcaption></figcaption>";
$figure2.classList.add("card");


$figure2.insertAdjacentHTML("beforeend",$agregarAlDom)
$figure2.querySelector("figcaption").insertAdjacentText("afterbegin","gomballbebe")
$agregarAlDom.insertAdjacentElement("afterbegin",$figure2)



/*// inseta antes del primer hijo OSEA PRIMER HIJO
$agregarAlDom.insertAdjacentElement("afterbegin",$figure2)
*/


/*SE AGREGA COMO ULTIMO HIJO
$agregarAlDom.insertAdjacentElement("beforeend",$figure2)*/


//PARA INSERETAR FUERS DE EL ELEMENTO

/*// se agrega como hermano mayor de la tarjeta oseeeeea fuera de la section
$agregarAlDom.insertAdjacentElement("beforebegin",$figure2)*/


/*SE AGREGA AL ULTIMP FUERRA DE LA SECTION
$agregarAlDom.insertAdjacentElement("afterend",$figure2)

/*MANEJANDO EVENTOS... */
// evento con atributo html
function perro(){
	alert("hola perro");
	console.log(event);
}


// evento semantico
 const $elEventoSemantico = document.getElementById('evento-semantico')
$elEventoSemantico.onclick = perro;

// evento multiple

const $elEventoMultiplo = document.getElementById('evento-multiple');
$elEventoMultiplo.addEventListener("click",perro);
$elEventoMultiplo.addEventListener("click",(e)=>{
	alert("HOLA ESTE ES UN EVENTO MULTIPLE ");
	console.log(e);
	console.log(e.type);
	console.log(e.target);
	console.log(event);
})

function funcional() {
	alert("lo logre ama")
}
const $manejadorDePractica = document.getElementById("manejador-practica");
$manejadorDePractica.addEventListener("click",funcional);
$manejadorDePractica.addEventListener("click",(e)=>{
	console.log("lo logramos x2")
})


/*REMOVIENDO EVENTOS removeEventListener("click-dblclick",function)*/
function saludar(nombre="desconocid@") {
	alert("bienvenid@" ,nombre,"adios .");
}


const $manejadorDePracticaEliminar = document.getElementById("manejador-practicaEliminar");
$manejadorDePracticaEliminar.addEventListener("click",saludar);
$manejadorDePracticaEliminar.addEventListener("click",(e)=>{
	console.log("lo logramos 82")});
$manejadorDePracticaEliminar.addEventListener("dblclick",(e)=>{
	console.log("se removera un evebto de semantico");
	$elEventoSemantico.removeEventListener("click",perro)

})

// flujo de eventos
// con el stopPropagation PROPAGAS EL EVENTO ... PERO TIENE QUE IR EN LA FUNCION

function eventosFujos(e) {
	console.log(`hola perro te saluda ${this.className} desde el boton ${e.target.className}`)
	e.stopPropagation();}
// false + al - burbuja
// true - al + captura
const $divsEventos=document.querySelectorAll(".eventos-flujos div")
console.log($divsEventos)
$divsEventos.forEach(div=>{
	div.addEventListener("click",eventosFujos,{capture:true,once:true});}


)

/*const $aid =document.getElementById("aid");
$aid.addEventListener("click",(e)=>{
	alert("hola entraras a una pagina esterna");
	e.preventDefault();

	e.stopPropagation()
})*/

/*.addEventListener
.addEventListener
.addEventListener
.addEventListener
.addEventListener
.addEventListener.AddEventListener
// esto es para poner stop una ves de se propage osea solo se puede aser el evento una vez
e.stopPropagation
e.stopPropagation
e.stopPropagation
e.stopPropagation
// para poner un evento antes de su ejcucion osea antes de
e.preventDefault
e.preventDefault
e.preventdefault
e.preventDefault
e.preventDefault
*/
/*Propiedades yeventos */
/*// ESTO SIRVE PARA VER LA VENTANA Y SU TAMAÑO CON TODO TIPO DE MODIIFICACION;
console.log(window.innerWidth);
console.log(window.innerHeight);
//ESTO ES CON EL VIEWPORT SI ASE MAS PEQUEÑA LA PESTAÑA TE DIRA LAS MEDIDAS
console.log(window.outerWidth);
console.log(window.outerHeight);*/
window.addEventListener("resize",(e)=>{
	// este evento se ase cuando tu mueves los tamaños de pantalla asi se hace
	console.clear();
	console.log("...evento resize...");
	console.log(window.innerWidth);
	console.log(window.innerHeight);
	console.log(window.outerWidth);
	console.log(window.outerHeight);
	console.log(e);
})

window.addEventListener("scroll",(e)=>{
	// este evento se ase cuando mueves el scroll x o y
	// x asia abojo
	// y asia los costados
	console.clear();
	console.log("...evento scroll...");
	console.log(window.scrollY);
	console.log(window.scrollX);
	console.log(e);
})

/*window.addEventListener("load",(e)=>{
	// este evento se produce bien comienze la carga 

	console.clear();
	console.log("...evento load...");
	console.log(window.scrollY);
	console.log(window.scrollX);
	console.log(e);
})


window.addEventListener("DOM",(e)=>{
	// este evento se produce bien comienze la carga  esto es de javasrip reativa

	console.clear();
	console.log("...evento load...");
	console.log(window.scrollY);
	console.log(window.scrollX);
	console.log(e);
})

*/



/*BOM: METODOS */
let variableVentanaNew;
const $botonAbrir=document.getElementById("abrir-ventana")
const $botonCerrar=document.getElementById("cerrar-ventana")
const $botonImprimir=document.getElementById("imprimir-ventana")
$botonAbrir.addEventListener("click",(e)=>{
	// este sirve para abrir una pestaña0
	variableVentanaNew=window.open("https://jonmircha.com")
})
$botonCerrar.addEventListener("click",(e)=>{
	// esto es para cerrar ventanas q abramos con el open("")
	variableVentanaNew.close();
})
$botonImprimir.addEventListener("click",(e)=>{
	// esto espara imprimir
	window.print()
})

/*OBJRTOS URL , HISTORIA Y NAVEGADOR el cap79 nos muestra el location que 
sobre los url y href que podemos buscar con el location*/

console.log(history);




