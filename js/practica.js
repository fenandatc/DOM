// import (PI) from './exportar.js'CON ESTO PODEMOS IMPORTAR ARCHIVOS PRIMERO VA
/*IMPORT (NOMBRE DE LA VARIABLE QUE VAMOS A EXPORTAR ) FORM ´./EL NOMBRE DE LA CARPETA EN LA QUE ESTA EL ARCHIVO´  ./ ES PARA DECIRLE A LA COMPU QUE ESTA EN LA MISMA CARPETA*/

/*COMIENZO DE LA PRACTICA DE JAVASCRIPT "BASICO"*/

/*1) Programa una función que cuente el número de caracteres de una cadena de texto,
 pe. miFuncion("Hola Mundo") devolverá 10.
 
  let miFuncion1 = prompt("Introduce el texto que vas a contar")
	function length() {
	if (miFuncion1 === "") {
		console.warn("No colocaste letras");
	}
	else{
  console.log("Este es el index : " , miFuncion1.length)}

}

console.log(length());  CON ARROW FUNCTION --->
  
  // con operador ternario 

let miFuncion1 = (cadena = "") => (!cadena) ? console.warn("No colocaste letras")  
: console.log("Este es el index : " , cadena.length)

console.log(miFuncion1());
*/
 // ESTE ES LA RESOLUCION 

 

 /* 2) Programa una función que te devuelva el texto recortado según  
el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */

/*let miFuncion2 = prompt("Coloca el texto que vas a cortar")

let textRecort = function (string ,desde , longitud = undefined ) {
	if (string === "") {
		console.warn("no as escrito ni una letra");
	} else {
		console.info("las palabras :" , string , "secortara a partir de esta"  
			, (string.slice(desde , longitud) ) );
	}

	
}

textRecort("hola mundo",0,4)*/
/*con ARRAY FUNCUTION()

let textRecort=(string2 ,desde = undefined , longitud = undefined ) => (string2 === "")
? console.log("NO AS COLOCA NADA") : console.info("la palabras que ingresasrte es :" , string2 , "el resultado es este :"  , string2.slice(desde,longitud) );
 
 console.log(textRecort("hola mundo",0,6));
*/
/*````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````*/

/*console.log(miFuncion2.slice(0,4))sirve para separrar las partes desde su posisciom*/




/*3) Programa una función que dada una String te devuelva un Array de textos 
separados por cierto caracter, pe. miFuncion('hola que tal', ' ')
 devolverá ['hola', 'que', 'tal'].*/ 
// .split separa una cadena de texto depende de lo que le pidas y lo vuelve array con condicion que le mandas

/*let miFuncion3 = function () {
	cadenita =('hola que tal')
	console.log(cadenita.split(" "))
} 
console.log(miFuncion3());
let funcionArray = function (string3 ,separacion = undefined ) {

if (!string3 ) {
	console.warn("coloca un numero");}

	else{
		console.info(string3.split(separacion));
	}
}

console.log(funcionArray('hola que tal', 'a') )

// 3.2 con arrow funcion
let funcionArray =(string3 ,separacion = undefined ) =>(string3 === "") ? console.warn("coloca un numero") :console.info(string3.split(separacion));
	


console.log(funcionArray('hola que tal', ' ') )



*/


/*4) Programa una función que repita un texto X veces, 
pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/
/*
 let string ='Hola Mundo '

let miFuncion4 = function () {
	console.log('Hola Mundo');
	console.log('Hola Mundo');
	console.log('Hola Mundo');

	
	// AQUI ESTAMOS UTILIZANDO EL .REPEAT()
	
	console.log(string.repeat(3));
}

console.log(miFuncion4());*/
/*como se hace 

let repeat1 = function (cadenota  , numero = undefined ) {
 if(!cadenota){console.warn("escribe algo correcto");}
 else{console.info(cadenota.repeat(numero))} }

console.log(repeat1('Hola Mundo ', 30));

// con arrow function

let repeat1 = (cadenota  , numero  ) =>(!cadenota ) ? console.warn("escribe algo correcto") : console.info(cadenota.repeat(numero))

console.log(repeat1('Hola Mundo ', 5));

*/


/*5) Programa una función que invierta las palabras de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH"

let reversa = function (string5 ) {
	if(string5 === ""){console.warn("escribe algo correcto");}
	else{console.info(string5.split("").reverse().join(""))} }

console.log(reversa("Hola Mundo")); .*/
	
/*6) Programa una función para contar el número de veces que se repite una 
palabra en un texto largo, pe. miFuncion
("hola mundo adios mundo", "mundo") devolverá 2.

const buscaElNumero = function (cadena6="" , texto="" ) {
if (!cadena6){console.warn("coloca bien");}
if (!texto){console.warn("coloca bien");}
let i = 0
let contador = 0

while (i !== -1){
	i = cadena6.indexOf(texto,i)
if (i !== -1) {
	i++ ;
	contador++  }
}
^_ð═ü\\\/ 

COMO SACAR \í\\○Ì☻♣6ã♣A☺☻♥♦♣♠•N◘○♦♣♠☺☺♂ooW«Ì♣Ü+,•7x ALT +92 = \©○\○2\\\\\○292í22l992○2

return console.info("la palabra", texto , "se repite" , contador )
}
buscaElNumero("mundo mundo mundo miFuncion1 miFuncion1m","mundo")*/

/*7) Programa una función que valide si una palabra o frase dada,
 es un palíndromo (que se lee igual en un sentido que en otro), 
 pe. mifuncion("Salas") devolverá true.


 const palindroma =function (palabras1) {
 	if ( !palabras1 ){
 		console.warn("coloca bien");}
 palabras1 = palabras1.toLowerCase()

 let alReves = palabras1.split("").reverse().join("")


return palabras1 === alReves ? "true" : "false"

 }

 console.log(palindroma("Salas"))
*/
/*
 8) Programa una función que elimine cierto 
patrón de caracteres de un texto dado, 
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") 
devolverá  "1, 2, 3, 4 y 5.

let eliminarCaracteres = function (texto = "" , eliminar = "") {
(!texto) ?console.warn("coloca bien")
    :(!eliminar)
		? console.warn("coloca bien")
		: console.info(texto.replace(new RegExp(eliminar,"ig"),""));


}

console.log(eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "XYZ"));*/


/*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

console.log(Math.round (Math.random()*100 )+500)*/

/*
10) Programa una función que reciba un número y evalúe si es 
capicúa o no (que se lee igual en un sentido que en otro), pe. 
miFuncion(2002) devolverá true

const capi3cua = (numero12 = undefined) => {
 if(!numero12)return console.warn("no ingresaste correcto");
 if(typeof numero12 !== "number") return console.error("no ingresaste correcto");
 
 let numero12 = numero12.toString()   

 let alReves2 = numero12.split("").reverse().join("")

 return ( (numero12) === alReves2 )
 ?console.info("true") :console.info("false" )
 }

 
capi3cua()



/*11) Programa una función que calcule el factorial de un número 
(El factorial de un entero positivo n, se define como el producto
 de todos los números enteros positivos desde 1 hasta n),
  pe. miFuncion(5) devolverá 120.
NO SE QUE ES FACTORIAL


*/
/*
12) Programa una función que determine si un número
 es primo (aquel que solo es divisible por sí mismo y 1) o no,
  pe. miFuncion(7) devolverá true.


  const primo = (numero = undefined)=> {
  	if(numero === undefined )return console.warn("no pusiste numero");

  	if(typeof numero !== "number") return console.warn(numero , "eso no es un numero")

  	if( numero === 0 ) return console.warn("0 no pon un numero")

  	if( numero === 1 ) return console.warn(" 1 no pon un numero")


  	if (Math.sign(numero)=== -1) return console.warn("el numero no puede ser negativo")

  let divisible = false ;
  for (var i = 2 ; i < numero ; i++) {
  		if((numero % i) === 0 ){
  			divisible = true ;
  			break;

  		}

  }
		return (divisible)? " numero , 22222es primo" : " numero , no es primo"

}

console.log(primo(-15))
*/

/*  13) Programa una función que 
determine si un número es par o impar, pe.
 miFuncion(29) devolverá Impar.

 const nParImpar = (numero = undefined)=> {
  	if(numero === undefined )return console.warn(numero ,"no pusiste numero");

  	if(typeof numero !== "number") return console.warn(numero , "eso no es un numero")
   return ((numero % 2) === 0 )
   	? console.info("el numero es par")
    : console.info("no es par")


  }
nParImpar(22)
nParImpar("sd")
nParImpar([22])
nParImpar(22)
nParImpar(23)

*/
/*14) Programa una función para convertir 
grados Celsius a Fahrenheit y viceversa, 
pe. miFuncion(0,"C") devolverá 32°F.
*/
/*21) Programa una función que dado un array numérico devuelve otro array 
con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) 
devolverá [1, 16, 25].

const cuadradoNumeros = (arr = undefined) =>{
	if (arr === undefined) return console.warn("no pusiste nada entro");

	if (!(arr instanceof Array)) return console.warn ("no colocas correctamente")

	if(arr.length === 0 )return console.warn ("no colocaste nada dentro")

	for (num of arr) {
	if(typeof num !== "number")return console.error("no colocaste un error " )

	}

	let resolve = arr.map(el => el * el)

	return console.info ("el elemento " , arr ,"ya fue potenciado " , resolve )
}

cuadradoNumeros([1,2,4,3,3,4])*/


/*22) Programa una función que dado un array devuelva el número mas alto 
y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60]. ||{A~

const numerosMaxMin = (arr1 = undefined) =>{
	if (arr1 === undefined) return console.warn("no pusiste nada entro");

	if (!(arr1 instanceof Array)) return console.warn ("no colocas correctamente")

	if(arr1.length === 0 )return console.warn ("no colocaste nada dentro")

	for (num of arr1) {
	if(typeof num !== "number")return console.error("no colocaste un error " )

	}
return console.info("el arreglo" ,  arr1 , "su numero mayor es " , Math.max(...arr1) , "y el minimo es " , Math.min(...arr1))
 


}

numerosMaxMin([5,4,4,5,545,5,111111,55444,555555555])*/
/*espacio de una linea \n */
/*23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena
 los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0])
  devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

  const parImpar = (arr2 = undefined) =>{
	if (arr2 === undefined) return console.warn("no pusiste nada entro");

	if (!(arr2 instanceof Array)) return console.warn ("no colocas correctamente")

	if(arr12.length === 0 )return console.warn ("no colocaste nada dentro")

	for (num of arr1) {
	if(typeof num !== "number")return console.error("no colocaste un error " )
}

return console.info( {

par : arr2.filter(num => num % 2 === 0 ),

impar : arr2.filter(num => num % 2 === 1 ) } )

	
}

parImpar()
*/
// propiedades de array
// .filter(colback) esto solo filtra las que cumplan la condicon del colback de un array 
/*return console.info( {

par : arr2.filter(num => num % 2 === 0 ),

impar : arr2.filter(num => num % 2 === 1 ) } )

23*/
// .map(colback )este sirve para crear una copia pero sigiendo una una funcion
/*let resolve = arr.map(el => el * el)

return console.info({
	arr,
	ascendentes: arr.map(el => el ).sort(),<---esta coma es muy importsnte
	desendentes: arr.map(el => el ).sort().reverse()
})

	return console.info ("el elemento " , arr ,"ya fue potenciado " , resolve ) 
	21*/

/*

24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos
, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, 
pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }
	
  const acendenteYDecendente = (arr3 = undefined) =>{
	if (arr3 === undefined) return console.warn("no pusiste nada entro");

	if (!(arr3 instanceof Array)) return console.warn ("no colocas correctamente")

	if(arr3.length === 0 )return console.warn ("no colocaste nada dentro")

	for (num of arr3) {
	if(typeof num !== "number")return console.error("no colocaste un error " )
}

return console.info( {

acendente : arr3.filter(num => num = num ).sort(),
decendente : arr3.filter(num => num = num ).sort().reverse()      } )

	
}
acendenteYDecendente([1,3,5,6,7,4])
*/


/*
25) Programa una función que dado un 
arreglo de elementos, elimine los duplicados, 
pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true])
 devolverá ["x", 10, 2, "10", true].

 const borrarDuplicado = (arr4 = undefined) =>{
	if (arr4 === undefined) return console.warn("no pusiste nada entro");

	if (!(arr4 instanceof Array)) return console.warn ("no colocas correctamente")

	if(arr4.length === 0 )return console.warn ("no colocaste nada dentro")

	for (num of arr4) {
	if(typeof num !== "number")return console.error("no colocaste un error " )
}

return console.info({
	original: arr4 ,
	sinCopia: arr4.filter( ( value , index , self ) => self .indexOf(value) === index  ) --->ASI SE HACE PARA NO TENER COPIAS O REPLICAS
})




}

borrarDuplicado([1,25,55,44,55,44,5555,1,5,1,1,1,1,1,1,1,1])

*/

/*26) Pro/grama una función que dado un arreglo de números obtenga el 
promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.*
 
 const promrdio = (arr5 = undefined) =>{
	if (arr5 === undefined) return console.warn("no pusiste nada entro");

	if (!(arr5 instanceof Array)) return console.warn ("no colocas correctamente")

	if(arr5.length === 0 )return console.warn ("no colocaste nada dentro")

	for (num of arr5) {
	if(typeof num !== "number")return console.error("no colocaste un error " )}

return console.info(arr5.reduce((total,index,arr) => {total += num ;if(index === arr5.length-1)
	{return "el promedio de" , arr5.join("+") ,"es " total/arr5.length} 
}) 
); 
}*/

/*
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos:
 id de la película en IMDB, titulo, director, año de estreno, país o países de origen
 , géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, 
Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History,
 Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport,
  Talk-Show, Thriller, War, Western  const  generovalidos= ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime","Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game - Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality - TV", "Romance", "Sci - Fi", "Short", "Sport", "Talk - Show", "Thriller", "War", "Western"]
class pelicula {
    constructor(objecto){
        
if(objecto.id === undefined || objecto.titulo === undefined || objecto.director === undefined || objecto.ano === undefined || objecto.pais === undefined || objecto.generos === undefined || objecto.calificacion === undefined) return console.log("por favor introduca todos los campos");
      
    let regletras=/^[:alpha:]/
     let regnumeros = /[0-9]{2}$/
    let regano= /^[0-9]{4}/  
    
if (!typeof objecto.titulo==="string"||!typeof objecto.director==="string" ) return console.log("tiene que ser untexto")
        
if (objecto.id.length>9|| regletras.test(objecto.id) ||regnumeros.test(objecto.id) )return console.log("has introducido mal el id");
 
 
   if (objecto.titulo.length>100  ) return "introduce un titulo mas corto"
if (objecto.director.length > 50 ) return "introduce un director mas corto"
if (!regano.test(objecto.ano) ) return "introduce un año correcto"
if (!objecto.pais instanceof Array ||!objecto.genero instanceof Array ) return "introduce un arrego"
 
objecto.generos.forEach(element => {
    if( !generovalidos.includes(element))return "no ha introducido un genero correcto"});
    let arraycalificacion = (objecto.calificacion+"").split(".") 
   if(!objecto.calificacion >= 0 && !objecto.calificacion <= 10 && !arraycalificacion[1].length===1) return "la calificacion tiene que ser un numero de 0 a 10 como maximo una decima"
    
    
       this.id= objecto.id      
       this.titulo= objecto.titulo
       this.director=objecto.director
        this.ano= objecto.ano
        this.pais=objecto.pais
        this. generos= objecto.generos
        
        
        let calificacion= objecto.calificacion
        
    }

    static getGenero(){console.log(generovalidos.join(","));
    
     }

  getPelicula(){console.log(`la pelicula de id ${this.id} que se titula ${this.titulo} del director ${this.director} realizada el año ${this.ano} en el pais ${this.pais} es del genero ${this.generos}`);
  }
}

let datosPeliculas=[{
    id:"1234567po",
    titulo:"titulo",
    director:"director",
    ano:1234,
    pais:["espa"],
    generos: ["Action"],
    calificacion:3.4},{
        id: "9999999po",
        titulo: "titulo1",
        director: "director1",
        ano: 9999,
         pais: ["espa"],
        generos: ["Action"],
        calificacion: 4.4
    }]
  
  
       

pelicula.getGenero()    
instancia_Pelicuas=[]
for (let i = 0; i <datosPeliculas.length ; i++) {
    instancia_Pelicuas.push(new pelicula(datosPeliculas[i])) 
  console.log(i)
}
instancia_Pelicuas[0].getPelicula()
instancia_Pelicuas[1].getPelicula().*/







