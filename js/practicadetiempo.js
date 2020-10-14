
/*console.info("inicio")
setTimeout(    () => { console.log("se ejecuto despues de 5 seg ")   },5000      ) 


console.log("final");


se
(    () => { console.log("se ejecuto despues de 1 seg ")   },1000      ) 
setTimeout(    () => { console.log("se ejecuto despues de 5 seg ")   },5000      ) 
setTimeout(    () => { console.log("se ejecuto despues de 5 seg ")   },5000      ) */

// haciendo un cronometro/*/*

/*setInterval( () => { console.log( new Date().toLocaleTimeString()  ) },1000 )*/


/*symbols

let id = Symbol("hola");
let id2 =Symbol("hola");

console.log(id!==id2)*/
/*LOS Simbol son unicos no se asemejan a ningun otro codigo*/
/* USUALEMENTE LOS Simbol se utilisan en un objeto ={}
const NAME = Symbol("sibolo de name")
const SALUDAR = Symbol()*/
/*ASI SE PONE UN SYMBOL EN UNA OBJETO 

const obtSymbol = {
	[NAME] : "pastel",color:"pastel2",sabor:"pastel3"
}*/
/*UN SIBOLO ES  UNICO AUNQUE CRES OTRO CIN EL MISMO NOMBRE NO LO MODIFICA ES UN VALOR PRIVADO DE UN OBJETO


obtSymbol[SALUDAR]= function () {
	console.log("se ejecuto saludar");
}
obtSymbol[SALUDAR]()
console.log(obtSymbol);

for(recorrer in obtSymbol){
	console.log(recorrer)
}
for(recorrer in obtSymbol){
	console.log(obtSymbol[recorrer])
}
*/

/*SET([]) ES UN SEMEJANTE A UN ARRAY PERO ESTE NO DEJA INGRESAR COPIAS

const variableSet = new Set([1,2,3,4,5,5,5,6,7,4,5,6,78,89,6,5,4,3,"perro"])
console.log(variableSet)*/
/*asi se agrega con un .add()

const variableSet2 = new Set()
variableSet2.add(1)
variableSet2.add(12)
variableSet2.add(13)
variableSet2.add(2)
variableSet2.add(1)
variableSet2.add("pwewpe")
  

  console.log(variableSet2);*/
  /*es .size SIRVE COMO EL LENGTH PERO EN SET
  console.log(variableSet2.size);*/

/* ASI ES COMO CONVERTIMOS UN Set EN UN ARR3 
let arr3 = Array.from(variableSet)


console.log(arr3);

console.log("recorrien variableSet------ convertida en array");

for(recorrer1 in arr3){
	console.log(recorrer1);
}
console.log("recorrien variableSet------ no convertida en array");
// con este creamos las catidad de copias de array de length en este caso 5
variableSet2.forEach(recorrer2 => console.log(          (variableSet2)        ))

// aqui  si se recorre la  variable de set 
variableSet2.forEach(recorrer2 => console.log(          (recorrer2)        ))*/

/* MAP ES UN DATO PRIMITIVO no se repite por  set y SU PROTOTIPO ES MAP */
let mapa = new Map();

mapa.set("hola","saludo");
mapa.set("hola","saludo");
mapa.set("hola","saludo");
mapa.set("cocacola","como");
mapa.set("numeros","12133243");
/*OTRA MANERA DE CREAR UN MAP

const mapa2 = new Map([
["nombre" , "lelo"] ,["edad" , "23"]
,[null,"null"]
	])




console.log(mapa2)*/


/*otrA MANERA DE RECORRRER UUN MAP
const llavesMapa2 = [...mapa2.keys()]
const valoresMapa2 = [...mapa2.values()]
console.log(llavesMapa2,valoresMapa2);
*/


/*asi es separado
console.log(mapa);
console.log(mapa.size);*/


/*HAS() SIRVE PARA VERIFICAR SI HAY
 O NO HAY DENTRO DE UN  ARREGLO O CUALQUIER COSA  SI SALE TRUE , SI NO HAY  FLASE 
console.log(mapa.has("fdsdf"));*/


/*COMO RECORREER UN MAP 
for (let [key , value ] of mapa){
	console.log([`llave:${key} , valor:${value}`])
}

*/



/*const ws = new WeakSet()


COMO SE AGREGA CONTENIDO AL WEAKSET  CON VARIABLES con objetos no se puede agregar de otra manera
let wsVariable1 = {"variable1":1}
let wsVariable2 = {"variable2":2}
let wsVariable3 = {"variable3":3}

ws.add(wsVariable1)
ws.add(wsVariable2)
ws.add(wsVariable3)
console.log(ws.has(wsVariable2));
ws.delete(wsVariable1)

ws.add(wsVariable1)
console.log(ws);

setInterval(()=>console.log(ws),1000)
console.log("----------------");

AQUI SE COLOCA EL SETTIMEOUT PARA BORRAR  LO QUE HAY EN LO QUE HAY EN EL SETINTERVAL

setTimeout(()=>{wsVariable1=null 
wsVariable2=null
wsVariable3=null
},1000)
console.log("--weakmap----");
const wm = new WeakMap()

let wm1 = {};
let wm2 = {};
let wm3 = {};


wm.set(wm1,1)
wm.set(wm2,2)
wm.set(wm3,3)

console.log(wm);



setInterval(()=>console.log(wm),1000)
setTimeout(()=>{
	wm1 = null},1000)

*/
/*Proxy - proxies  Esto es para la porgramacion orientada a objetos "para validar ibjetos"*/


/*const persona = {
	nombre : "" ,
	apellido : "" , 
	edad : 0 
}
// aqui en el manejador se puede hacer las validaciones para los objetos
 const manejador = {
 	set(obj,prop,valor){
 		if (Object.keys(obj).indexOf(prop) === -1 ) {
 			return console.error("el objeto que has agregado" , prop ,
 			 "no esta dentro de el objeto prinicipal");
 		}
 		if(
 			 ( prop === "nombre" || prop === "apellido") !(/A-Za-z\s/g.test(valor))
 			){return console.error("en este valor no se encueb");}
obj[prop] = valor
 	}
 

 }
// con esto podemos tener mas seguro el objeto y GREGAR VALORES
const jon = new Proxy(persona,manejador)
jon.nombre="fdsf";
jon.apellido="ñlflkfdfdfsdfdff";
jon.edad=34;
// javascript no permite la ñ        jon.sueniooo="sii";

console.log(jon)
console.log(persona)
*/
/*PROPIEDADES DINAMICAS */
/*para utilizar un objeto de uno  o otra manera se utiliza un nos [] si quieres poner funciones dentro es la manera que de*/



let aletorio = Math.round(Math.random()*100+6)
const objtUsuarios = {
	[`id_${aletorio}`]:"valor aletorio"
}
const usuarios = ["jamili","yasuri","msrtina","fernanda","Nathaniel","kenai"]

usuarios.forEach((usuarios,index)=>objtUsuarios[`id_${index}`]=usuarios )
console.log(objtUsuarios);



































/*COMO CREAR UN GENERATORS 
function* iterable() {
yield "hola";
console.log("hola consola");
yield "hola 2";
console.log("segimos con mas instrucones de codigo");
yield "hola 3";
yield "hola 4";

}
}//los valores itarables son los valores que se puede recorrer
let iterador = iterable();
/*console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());*/
/*esta es la manera de recorrer un generador con for of
for(let y of iterador){
	console.log(y);
}

const arr4 = [...iterable()]

console.log(arr4);

*/



