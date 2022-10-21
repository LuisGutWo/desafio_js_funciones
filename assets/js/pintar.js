//1-crea las variables necesarias para modificar en el DOM h2,h3 y p

// let tituloGrande = document.querySelector("#tituloGrande");
// let tituloMediano = document.querySelector("#tituloMediano");
// let parrafo = document.querySelector("#parrafo");
// let botonA = document.querySelector("#botonA");
// let botonB = document.querySelector("#botonB");

//desde js dale los siguientes estilos: 
//color del texto (h1, h3 y p #bca371)
//color de fondo (h1 #ddfff7 , h3 #ddfff7 , p #93e1d8)



// tituloGrande.style.color = "#bca371";
// tituloMediano.style.color = "#bca371";
// parrafo.style.color = "#bca371";
// tituloGrande.style.backgroundColor = "#ddfff7";
// tituloMediano.style.backgroundColor = "#ddfff7";
// parrafo.style.backgroundColor = "#93e1d8";



//2-crea una funcion para que cuando presionen la letra a cambiaràn los colores a : 
//color del texto (h1 #c97064 , h3 #c97064 , p #bca371)
//color de fondo (h1 #32965d , h3 #a6b07e , p  #68a357)
//y que cuando presionen la letra b cambiaràn los colores a : 
//color del texto (h1 #846267 , h3 #c37d92 , p #c37d92)
//color de fondo (h1 #e0c1b3 , h3 #d89a9e , p #aeb4a9)

// function cambiarColor() {
//     tituloGrande.style.color = "#c97064";
//     tituloMediano.style.color = "#c97064";
//     parrafo.style.color = "#bca371";
//     tituloGrande.style.backgroundColor = "#32965d";
//     tituloMediano.style.backgroundColor = "#a6b07e";
//     parrafo.style.backgroundColor = "#68a357";
// }

// function cambiarColorB() {
//     tituloGrande.style.color = "#846267";
//     tituloMediano.style.color = "#c37d92";
//     parrafo.style.color = "#c37d92";
//     tituloGrande.style.backgroundColor = "#e0c1b3";
//     tituloMediano.style.backgroundColor = "#d89a9e";
//     parrafo.style.backgroundColor = "#aeb4a9";

// }

// document.addEventListener('keydown', function (event) {
//     if (event.key === 'a') {
//         cambiarColor();
//     } 
//     if (event.key === 'b') {
//         cambiarColorB();
//     }  
//     })


//cuando hagan click en cualquier parte los colores volveràn a ser como al comienzo: 


// Desafio
// ejecrcicio 3


// function pintar(){
// ele = document.getElementById("ele1")
// ele.style.backgroundColor = 'yellow'
// }

const ele = document.getElementById("ele1");
ele.style.backgroundColor = "green"


const pintar = () => ele.style.background = 'yellow'


ele.addEventListener("click", pintar)
























