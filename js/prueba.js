// 1.crear  un elementeo
	// var elemento = document.createElement("li");
// 2.crear un nodo de texto
  // contenido = document.createTextNode("resplazamos el elemento 2");
// 3.añadir el nodo de texto al elmento
// elemento.appendChild(contenido);
//4.agregar el atributo al elemento
// elemento.setAttribute('aling', 'center')
// 5.agrege el elemento al ducumento

// var padre = document.getElementsByTagName("li")[0].parentNode;
// var hijo = document.getElementsByTagName("li")[1];
//  padre.insertBefore(elemento,hijo);





// con esto agregas estilos a script muy facil
   // nombre del elemento.setAttribute("class o id","nombre de la clase y id")

// elemento.setAttribute("class","azul")

// otra manera de hacer eso es
// elemento.className = "nombre de la class"

// con esto agregas los elementos

// 00000000000000000000000000000000000000000000000000000000000000000000000
// con esto removemis el eelemento
// padre.removeChild(hijo)
// como cambiar los estilos o aplicarlos con javascript
// elemento.style.color = "red";
// elemento.style.fontFamlily = "sal serif";
// elemento.style.backgraund = "navy";
// nombre del elemento.style.nombre del elemento = " valor"
(function() {
	var formulario = document.getElementsByTagName('formulario')[0] ;
		elementos = document.formulario.elements ,
		boton = document.getElementById("btn") ;

		validar = function(){
		validarName = function (){
			if(formulario.nombre.value === 0 ){
				alert("Comnpleta el Campo Nombre")
			}
		}		
		}

		formulario.addEventListener("submit",validar)
} ())

