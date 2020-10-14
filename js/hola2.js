
//   let perro = "hola"
//   console.log(perro);
//   console.log(window)

//   let variable = "sdsdadsadasd"
// let hola ="HOLA MUNDO"

let espacios = "e s p a c i o s hola"

	// document.write(variable.length, " "  , hola.length)
  
  //el length sirve para contar la cantidad de elementos que hay 
  
   // document.write( variable.toUpperCase() ) CON ESTO SE PONE EN MAYUSCULAS 
	// document.write(hola.toLowerCase() )   con esto se pone en mayusculas


 // document.write(hola.includes("hola") ) esta sirve para saver si incluye es true y si no flase

 
 // console.log( espacios.trim() )para quitar espacios

 // console.log( espacios.split(" ")) esto crea arreglos depende la condicion que le pidas aqui dise que cree un array para cuando haiga  un espacio;

 // ______________como concatenar______________________
 // let nombre = prompt("escribe tu nombre")
  let apellido = "torres canari"
  let bienvenida = "bienvenida"

 // let saludo = bienvenida + " " + nombre + " " + apellido + "."
 // document.write(saludo.toUpperCase() ) resultado = BIENVENIDA FERRRRR TORRES CANARI./**/



/*templeme script sirve comm `````` yt e ayuda a diferentes cosas*/
	/* let name =`lkñlk $(bienvenida) persona $(apellido)
 addClass('class_name')
 saas`
 console.log(name)*/

 // `````````````te permite poner saltos de lineas```````````````````````````````````


 // NaN es no hay numero
 // undefinet es el elemento esta indefinido por la computadora osea vacio
 // null es que el objeto esta vacio por el programador


 /*FUNCIONES ES UNN BLOQUE DE COGIDO QUE SE EJECUTA BARIAS BESES */
/*function nombreDeLaFuncion() {
	// AQUI SE REALICE EL LA OPERACION O QUE QUIERES  esta funcion no tiene para metros
	QUE HAGA CON LA FUNCION
	console.log("1")
	console.log("2")
	console.log("3")  
}
*/

/*function nombreDeLaFuncion() {
	console.log("1")
	console.log("2")
	console.log("3")
}
nombreDeLaFuncion()*/
/*function nombreDeLaFuncionPeroEstaDevuelveValor() { 
	document.write("1");
	document.write("2");
	document.write("3");
	return "la funcion retorna una cadena de texto ";*/
	/* console.log("4")}*/ //no nos retorna estro por que solo se queda hasta donde esta return es como el defealt osea te retorna ek valor y hay para


/*nombreDeLaFuncionPeroEstaDevuelveValor()*/
/*NUNCA TE OLVIDES COLOCAR AL ULTIMO DE UNA FUNCION ES () POR QUE SI NO NO TE DEJA HACERLO */
/*
let EstaEsLaFormaDeRetornarLaCadenaDeTexto = nombreDeLaFuncionPeroEstaDevuelveValor()
document.write(EstaEsLaFormaDeRetornarLaCadenaDeTexto)*/

/*ESTA ES LA FORMA DE RETORANAR UN TEXTO POR QUE HACI POR QUE NO PUEDES PONER UN CONSOLE.LOG DENTRO DE OTRO O DOCUMENT.WRITE NO SE PUEDE PONER DENTRO DE OTRO*/



/*separacion--------------------------------------*/
// esta es una funcion para hacer una funcion con parametros

function saludo1(NOMBRE= "deconocido" ,EDAD = 0 ) // de esta manera poner un valor definido osea que no salga undefai si no valor establecido 
 { 
console.log(`holis mi nimbre es ${NOMBRE} Y TENGO ${EDAD} años.`)
}

// de esta manera es  fucion ( parametro1 , parametro2 )

saludo1("mari",2)


// osea que con esto no te va a salir undefaint si no el valor establecido

saludo1()

/*OPERADORES + - * % */

                          /*  let a = parseFloat(prompt(" a "))
                               let b = parseFloat(prompt(" b")) 
 
                                // let resultado3 = a + b  (ESTO ES UNA PRUEBA DE EJEMPLO)

                                    document.write(resultado3)
*/
   /*relacionados > < >= <= == === != !==*/

/* incrementacion i++ y decrementacion i--*/

/*LOGUCOS TODAS TE DEVUELVE BOOL S

! ESTE NIEGA


&& Y ETE TIENS QUE  CUMPLIR TODAS LAS CONDICIONES


|| O ESTE SIGNIFICA QUE UNA DE LAS CONDICIONES SE DEVE DE CUMPLIR



*/
// CONDICIONALES

// CONDICIONALES SIMPLES
/*if ( 8 > 7) {
	console.log("si es mayor")
}
*/
//CONDICIONALES MULTIPLES 

/*if (8 < 7 ) {
	console.log("siete es mayor")
} else {
	console.log("SIETE NO ES MAYOR QUE OCHO ")
} 
*/
// CONDICIONALES ANIDADAS

  //IF DENTRO DE IF 

// if (5 < 7 ) {/*si se cuumple se ´pasa a verificar si los if dentro de if se cumple si no se cumple no verifican si no no lo verifican*/
// 	console.log("siete es mayor")

// 	if (5 === 5 ) {
// 		console.log("son iguales")}

// 	if (6 === 5 ) {
// 		console.log("son iguales")} /* si no se cumple pues nose ejecuta y si se cumple se ejecuta*/
// 	if (4 !== 5 ) {
// 		console.log("son difere")}
// 	} else {
// 	console.log("SIETE NO ES MAYOR QUE OCHO 2")
// } 

// if feura de if EN ESTA LO QUE SE HACE ES QUE VERIFICA CADA IF COMO UNICO NO CONTANDO 

/*if (8 < 7 ) {
	console.log("siete es mayor")
} 
if (8 < 7 ) {
	console.log("siete es mayor")
}
if (4 < 7 ) {
	console.log("siete es mayor")
}

else {
	console.log("SIETE NO ES MAYOR QUE OCHO ")
} */
 /*RECUERDA QUE IF ES SI Y ELSE ES SI NO*/

 /*CICLOS

/*CICLOS LOOPS*/

// FOR


 // decrementacion

 for (var i = 10; i >= 0; i--) {
 console.log(i)
 }
console.log("____________________________________________________________")

// incremento

 // for (var i = 10; i <= 100; i++) {
 // console.log(i)
 // }
/*let numeroe = [1,2,3,4,5,12,1,5,5,1]  asi se recorre un array
  for (var i =numeroe.length - 1; i >= 0; i--) {
  console.log( numeroe[i] )}


// FOR IN 

const maria = {
	nombre : "maria",
	apellido : "porras",
	edad : "54"
}

for (const propiedad in maria ){
	console.log(` key: ${propiedad} , value: ${maria[propiedad]}` )
} 

*/
// para recorrer el objeto con for in

// FOR OF de este manera se recorre un aarray 

// FOR (CONTS NOMBREDELAVARAIBLEQUEVAMOSACAMBIAR OF ELNOMBREDELAVARIABLE){
// 	CONSOLE.LOG(NOMBREDELAVARAIBLEQUEVAMOSACAMBIAR)
// }

let numera = [1,2,3,4,5,12,1,5,5,1]
for (const elementoss of numera){
	console.log(elementoss)
}
// DE ESTA MANERA SE RECOORE UNA CADENA DE STRING 
let cadenaDeCaracteres = "hola peroo"

for(ejemplo of cadenaDeCaracteres){
	console.log(ejemplo)
}




/*CICLO switch este sirve para descartar casos si eso es lo quieres 
let animales = ""
 switch (animales) {
 case "gato" :
 console.log("es gato")
 break;
 case "perro" :
 console.log("es perro")
 break;
 case "conejo" :
 console.log("es conejo")
 break;
 default :
 console.log("no es ninguno de ellos")
}
*/

// CONTROLANDO ERRORES es una menera de crear erroes para las paginas el catch se ejecuta cuando hay un erro y el finally siemplre se va a ejecutaaar
/* try{
 	console.log("me ejecute")
 	noExiste;
 	console.log("en el try se agraga codigo para evaluae")}

 	catch(error) {
 		console.log("catch captura el error surgido en el try ")}
 	
 	finally {
 		console.log("el bloque finally se ejecuta dalfinal de un bloque de try-catch")
 	}*/

 	// ahora acon numeros ok
// traducuuion pa que comprenda dice si no hay numero que se produsca este error despues con el catch que es donde se almacena el error lo utilisamos como variable
/*	 	
console.log("---utilisamos la try para crear un erro---")

 try {
 		let number = "fd"
 		if ( isNaN(number) ){
 			throw new Error("numero el caracte no es numero")
 		} console.log(number*number)
 	}
 	catch(error){
 		console.log(`se produjo un error. ${error}`)/*el que se crea para alacenar una variable tiene que ser en mayusculad y el que es el paametro en minuscula la letra incial el primero Error , y el segunso error*/
 	/* }*/
 
// break : haci se para la funcion y continue : aqui se continua   -------------------------
/*
let vocales = [4,5,6,7,8]
for (let i = 0  ; i < vocales.length  ; i++) {
	if (i === 6) { break ; }
  
   console.log(vocales[i])

	 }

for (let i = 0  ; i < vocales.length  ; i++) {
 if (i === 6) {
 	continue ;
 }
 	

 	console.log(vocales[i])

}
// Resolvi el ejercicio así :

console.log("--------------------------------------------")
let nums = [1, 3, 34, 56, 345, 76, 2, 67, 89, 32, 46, 74, 12, 109, 23];


for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 ) {
        continue;
    }
    console.log(nums[i]); // solucion en la consola 34 56 76 2 32 46 74 12 
}
*/
/*---------------------destrocturracion------------------
array en AMBOS EJEMPLOS SE UTILIZA LA MISMA VARIABLE
const lados = ["top","left","botton","rigth"]*/
// sin destrocturacion
/*
let top1 = lados[0]
let left2 = lados[1]
let botton3 = lados[2]
let rigth4 = lados[3]*/


// console.log(top1,left2,botton3,rigth4)

// con destruccion 

// const [abajo1,derecha2,arriba3,izquierda4] = lados

/*OBJETOS para que la destrocturacion funcione las variablles a las que vamos a almacenar en una varable tiene que tener el mismo nombre de variable */
/*const biograf ={pedro :32,marta:43,lorenzo:23,hernan:3}

const {pedro,hernan,lorenzo,marta} = biograf
*/
// console.log(pedro,marta,lorenzo,hernan)

/*objetos literales PARA HACER UN OBJETO LITERAL NECESITAS VARIABLES YA EXISTENTES  */
/*let name = "ramona"
let ega = "3 years"
let color ="while"
// esta la manera mas sencilla y resumida de usar objetso made2015
const dog = {name,ega,color,ladrar(){console.log("miau miau miau")},tipo:"perro",numberq:4
	
} 
// console.log( dog)
// MAS DE DOS PARAMETROS para metros infinitos
// ESTA ES LA MANERA DE TENER PARAMETROS INFINITOS COM ...
function suma(a,b,...c) {
	let resultado7= a + b ;
 c.forEach ( function ( n ){ resultado7 += n } )
    return resultado7 + " " +"este es el resultado."
}
console.log(suma(5,5,5,2131,1,5,5,5,54,))

// operador de propagacion o aumenton son los siguientes

let arr1 =[1,2,3]
let arr2 =[4,5,6]
let arr3 =[...arr1,...arr2]
// esta es una manera de aumentar los array de estos tres ... de propagacion pero siempre se ponen al comienso es una menera de juntar un array
// ESTA ES LA MANERA JUNTAR UN ARRAY
console.log(arr3)
*/
// ARRAW FUCTION O FUNCIOES EN FLECHA "ANONIMAS" esta funcion reduce las funciones
/*FUNCION NORMAL
let sumamos = function(a,b){
	return a + b 
}

console.log(sumamos(5,55))

*/

/*FUNCION DE FLECHA


let sumemos = (c,d) => c + d 

console.log(sumemos(222,4))

*/

/*OTRO EJEMPLO DE FUNCION CON FLECHA

let functionConVariasLineas=() =>{
	console.log("siete")
	console.log("siete")
	console.log("siete")
	console.log("acabo")
	console.log("----------------------------------------------")
}

console.log(functionConVariasLineas())

 
let ejemplo1=[1,2,3,4,5,6,7,8,9,10]

ejemplo1.forEach( (el,index) => console.log(`${el} esta en la posicion ${index}`)  )  
NO PONGAS UNA FUNCION FLECHA DENTRO DE UN OBJETO LITERAL
AZUCAR SINTACTICO */
/*prototipos esto es como crear una funcion pero que se almacene en el prototipo o P.o.o 
osea programacion orientada a objetos  se utiliza this creando funciones contrustoras*/

// el constructor es un metodo especial que se ejecuta en el momento de 
// instalar la clase


/*PROTOTIPO*/

// class animales1 {

// /*ATRIBUTO*/
// constructor(nombre1,genero1){
//  this.nombre1 = nombre1
//  this.genero1 = genero1
// }

// //  LOS METODOS SON LAS FUNCIONES QUE VAN A GUARDAR FUNCIONES
// /*´METODOS*/
// sonar(){ console.log("hago riduo");}

// saludar1(){console.log(`hola soy ${this.nombre1}`);}
// }



// class perro1 extends animales1{
// /*ATRIBUTO*/
// 	constructor(nombre1,genero1,tamanio,){
// 		// con el metodo super() se manda a llamar el constructor de la clase padre
// 	super(nombre1,genero1)
// 	this.tamanio = tamanio
// 	// asi se usa el ibjeto null
// 	this.noIdentificado = null ;
// }
	

// /*METODO*/

// miSonidoEs (){ console.log("guaa guaa guaa");  }

// saludoEsclusivo () { console.log("mi nombre es ramono y soy un perro");}
// /* los setters  y getters son metodos especiales que nos permite establecer y obtener
// los valores de atributos de nuestra clase  */

// get getnoIdentificado() {return this.getnoIdentificado } 

// set setnoIdentificado(noIdentificado){
// 	this.noIdentificado = noIdentificado}


// }

// const mimi = new animales1 ("mimi","hembra")
// const ramono = new perro1 ("ramono","macho","pequenio")

// console.log(mimi);
// console.log(ramono);

/*get element*/

//  ramono.setnoIdentificado = "hay no"
// console.log(ramono.setnoIdentificado)



/*PRACTICA*/



// class comida {
// // atributos
// constructor(favorita,noFavorita){

// this.favorita = favorita ;
// this.noFavorita = noFavorita 

// }
// // metodo
// static saborear () {console.log("la comida es demasiado rica");}

// static recomendar () {console.log("esta comida esta deficiosa");}

// }

// const tallarin = new comida ("arros" ,"pollo" )

// console.log(tallarin);

// class arrosConPollo extends comida {
// 	constructor(favorita,noFavorita,noQuiero){
// 	super(favorita,noFavorita)
// 	this.noQuierto = noQuiero }


 
//  comidaBuena(){
//  	console.log("que buena comida ");}

 
// }

// const aji = new arrosConPollo (" gusta"

// 	,"comer","quiero") 

// console.log(aji);



// STATIC sirbe para llamar una funcion fuera por que de´porsi no se puede

/*comida.recomendar()*/

/*OBJETO CONSOLE

console.log(console);

// creando un error con console.error()

console.error("esto es un error credo por mi");

// creando una aviso con console.warn()

console.warn("esto es un aviso");

// consola para dar informacio console.info()

console.info("aqui se almacena informacio");

// como limpiar la consola console.clear()

console.clear();

// como aseder al documento de html y a todo lo que esta dentro
// con esto se ase preferible usar el dir enves del log
console.dir(document)
console.dir(window)
// intersecion 
console.clear();

// como clear grupos en la consola
// CONSOLE.GROUP() Y CONSOLE.GROUPEMD
console.group("colores en ingles")
console.log("yellow");
console.log("blue");
console.log("red");
console.log("pink");
console.log("purple");
console.log("navy");
console.groupEnd()
// este es otra manera de utilisar
console.groupCollapsed("colores en ingles")
console.log("yellow");
console.log("blue");
console.log("red");
console.log("pink");
console.log("purple");
console.log("navy");
console.groupEnd()

// COMO CREAR UNA TABLA CON LA CONSOLA se puede con window y console
console.table(Object.entries(window))

// con el sort() se puede poner ordenada sin el se pone desorenada

console.table(Object.entries(window).sort())

console.clear();
// otros ejemplos con tablas con array


let animales = ["perro","gato","piojos","renacuajos","jiraja"]

console.table(animales)

let animalesObject = {
	primer : "perro" , segundo :"gato" , tercero :"piojos" ,cuarto : "renacuajos",quinto :"jirafa"

}

console.table(animalesObject);

// COMO PONER UN MENSAJE REPETIDO POR FOR ALGO PERO ES RECOMENDABLE UTILISARLO EN LO CICLOS
 
 

 AQUI ESTA EL FIN DE COMENTARIO DE OBJETO CONSOLE
 
 


for (var i = 0; i <= 50; i++){
	console.count("este mensaje se repetira por el console.count()")
	console.log(i); }

 */  // ESTO SIRVE PARA REPETIR EL MENSAJE REPETIDAS CUANTA VEECES EL FOR Lo aga

/* ESTE SIRVE PARA VERIFICAR SI LA FUNCION ESTA BIEN Y SI NO LO ESTA MANDA UNA ERROR
console.clear();

let a = 5
let b = 3 
let pruebaAB = "esto te informa que has colocado la variable a mayor que la variable b y eso error por que el progama es para verificar que variable b seha mayor"
 console.assert( a < b ,{a,b,pruebaAB} );
 // si funcio y sirve para verificar las varicar las variables respeta y si no se cumple se muestra el emsaje

 */
console.clear()
 /*OBJECTO DATE
// con esto consiges la flecha y hora osea todo de hacerca de tu horario en donde este 
 console.log(Date())

 let fecha = new Date() ;
  console.log(fecha);

  // esto vale para saber en el dia que esta como hoy 30
  console.log(fecha.getDate())

  // esto es para ver el dia de la semana en la que estas osea D L M M J V S ---> 0 1 2 3 4 5 6 

  console.log(fecha.getDay())

  // como sacar el mes como es un arreglo comienza desde la posiscon cero

  console.log(fecha.getMonth())

// como sacar el año 

console.log(fecha.getFullYear());

// hora

console.log(fecha.getHours())

// minutos

console.log(fecha.getMinutes())

// segundos

console.log(fecha.getSeconds());
// milisegundos

console.log(fecha.getMilliseconds());

//fecha de manera mas simplificada
 
 console.log(fecha.toString())

 // otra manera mas simplicafa

 console.log(fecha.toDateString())

 // otra manera mas simplifica con 00/00/00
 console.log(fecha.toLocaleDateString())

 // y para el tiempo de una manera resumida 00h 00m 00s  
 console.log(fecha.toLocaleTimeString())

 // para ver el dia horaio en el que estamos

  console.log(fecha.getTimezoneOffset(
  	))
*/



/*OBJETO MATH*/

console.log(Math.PI);

// como sacar promedio pero hacia el sigiwn numero
// osea siempre promedia hacia el siguiente 
console.log(Math.ceil(2.3))

// ESTE SIRVE PARA AL CONTRARIO DEL OTRO PARA PONER HACIA ABAJO
// OSEA QUE PROMEDIA HACIA osea que quita el promedio

console.log(Math.floor(2.8))

// ESTE DE ACA PROMEDIA DE VERDAD

console.log(Math.round(2.6))

// ESTE ES PARA SACAR LA RAIZ DE UN NUMERO

console.log(Math.sqrt(144))

//ESTE SIRVE PARA SACAR LA POTENCIA DE UN NUMERO+

console.log(Math.pow(5,2));

//ESTE SIRVE PARA SAVER SI EL NUMERO ES NEGATIVO
// te sale -1 si es negativo 
// te sale 1 si es positiva
// te sale 0 si es sero
console.log(Math.sign(-5)) ; -1
console.log(Math.sign(5)); 1
console.log(Math.sign(0)); 0

// COMO SACAR UN NUMERO RAMDO

console.log(Math.random());

// como sacar un numero aletorio 
// aqui en ves de 1000 puedes poner la cantidad de numeros de limite que desees
// si quieres con un numero random de 1 al 100 poner * 100

console.log( Math.round    (Math.random()*1000)        );
console.clear();
  
// `````````````te permite poner saltos de lineas```````````````````````````````````

/*PRUEBAS DE FUNCIONES

let variableF = function(nombre = "desconocido") {
return`hola ${nombre} como estas`
}

console.log(variableF("funcion normal"));

console.log(variableF());

let variableA = (nombre1) => { return `hola ${nombre1} como estas` }

console.log(variableA("arrow funcion"));



let dede ={
perico(){console.log("EL PERICO DICE OI ");} ,
perico : "azul" ,
mañana : "dsfdfsdf",
animales : "almacenas"
}

console.table(dede)
*/


/*SIRCUITOS || Y &&
°EL SIRCITO || sirve como o  osea que es si esta condicion no se cumple la 
la otra tambien : Osea que si variable 1 no sirve , se pasa en variable 2 
osea que es si 1 no se cumple pasamos a 2


°EL SIRCUITO && este es si a y b  no se cumplen : osea que se tiene que
cumplir los dos para aser



*/


/*alert() , confirm() , prompt()  */

// este sirve para mandar una alerta

window.alert("esto es una alerta")

// este es para confirmacion de aceptar o rechasar osea confirmacion

window.confirm("esto sirve para hacer una confirmacion y aceptar o rechaazar")

// este sirve para promponer una palabra desde una alerta

window.prompt("este es para proponer unas palabras")

/*EXPRECIONES REGULARES*/

let cadena =` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nihil
 rem quo. Nisi pariatur exercitationem minima in doloremque sunt amet corporis fug
 iat, distinctio maiores earum porro quos dolor aspernatur, sequi!`;

//-- esta es una manera de usar una exprecion regular
// "i" sirve para buscar la misma palabra pero con miniscula o mayuscula

// let expReg = new  RegExp  ("nisi""i");

// "g" este sirve para buscar todos osea el para en el ultimo


// let expReg = new  RegExp("nisi""g")

// --ESta es otra manera de utilisarlas

// ejemplo con i"estee busca en mayuscula y minsucula"

let expReg2 = /nisi/i

// ejemplo con g"buca el ultimo"

let expReg3 = /lorem/g

//LA FORMA DE ACTIVAR ES ESTA

// console.log(nombreDeLaExprecionquevaAvericarsihayesoono.testOexec(aqui va el nombre de la cadena que vaos
 // a verficar));


// PRUEBA DE LA I
console.log(expReg2.test(cadena));


console.log(expReg2.exec(cadena));


// PRUEBA DE LA G

console.log(expReg3.test(cadena));


console.log(expReg3.exec(cadena));
// alert("dsf") este es una alerta
// EN SI SIRVE PARA VERIFICAR SI SE ENCUENTRA O NO EN ESTE STRING O PLABRA O SIRVE PARA BUSCAR COSAS

/*FUNCIONES ANONIMAS AUTO EJECUTABLES*/
// sin parametros 

	( function() {
	console.log("funcion auto ejecutabel sin parametros"); /*este es una funcion auto ejecutabel anonima osea asi (funnction(){})()*/
	} )()

// coon parametros

(function (d,w,c) {
	console.log("este es una funcion con parametros");})
(document,window,console);

	
 
