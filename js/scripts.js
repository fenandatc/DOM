// let ega =  prompt ("dime tu edad")
// let adulega = ega >= 18 
// 		? "si eres mayor"
// 		: "no eres mayor"
// alert(adulega) 






// coon .tofixed(n) LO VUELVE DECIMAL LO QUE HAY EN EL PARENTESISI Y SI QUIERES REDONDERAR DECIMALES TAMBIEN HAY




// let numbre = "55"
// undefined
// let numbreToNumber = parseInt(numbre,10)    
// undefined
// numbreToNumber
// 55(cuando un nada codena de texto o texto lo puedes volver numero utilizando)parceInt(nombre de la variable , 10)en el 
// ,10 no siempre es 10 pero mayor mente si pero se adapta a la situacion.
// n=nombre de variable

// ---parceFloat(nombre de la variable,10)no te duelve no convierte un numero en dicimal si no lo es ,si no que a diferencia de el parceInt(n) que aunque seha decimal se convierte en INT este solo le quita las " " y si es entero se queda entero pero sino se queda decimzl.
                                                           // let number = prompt("escriba cual quier numero")
// undefined
// let numeroa = number * 10
// console.log(numeroa)


//Math.floor(pon el numero que deseas redondondear)lo redonde hacia abajo osea 20.8 = 20


//Math.celi(pon el numero que deseas redondondear)lo redonde hacia arriba osea 20.2 = 21



//Math.round(pon el numero que deseas redondondear)redondonde normalmente.


//Math.random()te da un numero cualquiera de redondear
// solo se modifica *100 oseA POR EL NUMERO QUE DESEES + 1




// si quieres un numero aletori que se menor que 100 ESO SISRVE PARA DAR UN NUMERO ALETORIA  TENIENDO 100 COMO NUMEO <¡ DE EL UTILIZANDO Math.ciel(Math.ramdo()*10)
// Math.ceil(Math.random()*100)
// 53


	// (en ninguno de estos se pone valor)por que sirven para modificar al string

// .length (literal)SIRVE PARA LEER LA CANTIDAD QUE EXITE EN RL.

// .trim() SIREVE PARA QUITAR LOS ESPACIOS EN BLANCO "      HOLA       "
// RPT:"HOLA"

// .toUpperCase(aqui nos se pone valoe) sirve para que la asignacion de prompt se escriba en miniscula


// let preg = prompt("capi de PE").toUpperCase().trim()
// undefined
// let quiz = preg === "LIMA"
//           ? "ADIVINASTE PERRO"
//           : "NO ADIVINASTE"
// alert(quiz)

// indexOf(se pone lo que deseas bucar empesanso de izquierda a derecha para string)comienza de cero
// perro.indexOf(e)
// rpt:1




//lastindexOf()es semejante solo que comienza de derecha a izquierda y te devuelve un boolean cuando utilizas ruta url comienza de cero

// starwith(aqui dentro se pone el texto que deseaas parar)ESTO SIRVE PARA CUANQUIERAS VER SI SE ASEMEJA EL CO,IEMZO DE STRING TE DEVUELVE UN BOOL
// EJM:PERRRO.starwith(pe)
// trude
// EJM:PERRRO.starwith(po)
// false


// endwith()es lo mismo solo que se ve si termina con lo que hay en el parentesis y tambien te da un bool
// EJM:PERRRO.endwith(RRO)
// trude
// EJM:PERRRO.endwith(RRU)
// false

// .replace ("string que vas a cambiar " , "palabra con la remplazaras")
// "hola perro".replace("perro","perry")
// rpt:"hola perry"


// cuando quieres obtener una letra se utiliza []todo comienza de sero
// ejp : "martin"[2]
// rpt:"r"


// cuando quieas dividir un strin utiliza .split("")
// en la img que viene vas a verla

// substr(te da una posion para buscar la letra )imagen que explica carqui video 2 .11 edteam
// las imagenes te exlicara mejor pero cuando lo necesitas hay esta el video




if (3>2) { console.log("popo") } 
	if (4<8){ console.log("se cumple")}
	if (4<8){ console.log("se cumple")}
	if (4<8){ console.log("se cumple")} 
else if (2 === 2 ) { console.log("pipi")}	
else { console.log("pepe")}  

  




   // if(3>1) { console.log("li") }

   // if(3>1) { console.log("l9") }

   // if(3>1) { console.log("l0") }

   // 	else { console.log("aque si perro")}



 // else if(9<7) { console.log("if") }

//  else {console.log("asda")}

// console.log("pel")

// let age = parseInt(prompt("ingrese su edad"),10)

// if(age) {

//  if (ega >= 18) {alert("eres mayor")}


//  else {alert("eres menor")}

//  }
// else { age = parseInt(prompt("ingrese su edad en numero"),10) }

// let autestima = parseInt(prompt("ingrese su nivel de autestima del 1 al 4"),10) 
// switch (autestima) {
// 	case 1: alert("ers muy timido") 
// 	break;
// 	case 2:  alert("ers timido")  
// 	break;
// 	case 3:  alert("ers eres normalmente")
// 	break;
// 	case 4:  alert("ers un creido")
// 	break;
// 	default :
// 	parseInt(prompt("ingrese su nivel de autestima del 1 al 4 no se intente pasar de listo hijo de su madre"),10)
// 	break;


// }

// let contraseña="perri"
// let contra
// do {
// 	contra = prompt("dime la contraseña hermANO")
// }
// while (
// 	contra !== contraseña
// )
// 	if (contra === contraseña) {alert("ingresante hermANO")}


// for  ( i=1 ; i<1000 ; i++ ) 
// 	console.log(i)

// _________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// ``````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
 // `hola ${persona}`
function saluda(persona){
	return `hola ${persona}`
}
console.log(saluda("martin"))



function saludar(persona,sexo){
	return sexo >= "18" 
				?`eres grande  ${persona}`
				:`eres chico ${persona}`
}
console.log(saludar("martin", 5))
console.log(saludar("juana",54))
console.log(saludar("miranda",16))




// ------.....prueba....---------------
// let nombre = prompt("dime tu nombre3").trim.toUpperCase
// let sexo = prompt("ingrese tu sexo m o f").trim.toUpperCase

// function saludo (nombre,sexo){
// 	let saludo  
// 	if (saludo = sexo === "M") {saludo = "BIENIDO"}
// 	else {saludo = "BIENIDA"}
// 	return 	` ${saludo}"mismo" , ${nombre}  `


// }
// alert(saludo(nombre,sexo))
// console.log(saludo(nombre,sexo))
















// function saludo (nombre){
// 	return `hola ${nombre}`


// }
// alert(saludar(nombre))+}
//----------------------------------- funcio nombre de la funcio(variable o variables de la function){
// 	return --retorno que va a reteornar la function
// }

// ---------------este se utiliza cuando tu codigo es mucho mas peqeño--------------------
// const suma = (a , b) => a * b 

// // -----este se utiliza cuando tu codigp es mas grande----
// function sume (a,b) {
// 	return a*b
// }
// console.log(suma(1,4))
// console.log(sume(7,2))


var suma = function(numero1 , numero2){
	var numero1 = parseFloat(document.getElementById("numero1").value);
	var numero2 = parseFloat(document.getElementById("numero2").value);
	var resutado = numero1 + numero2 ;
return resutado;	}



