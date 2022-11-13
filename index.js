/* 
CASES --> combinación de mayusculas y minusculas, dependen del lenguaje de programación

PascalCase - clases, que empiezan con mayusculas - JABA

camelCase - variables, funciones y atributos - JavaScript
    variable -> parrafoInicial
    funcion -> parrafoInicial()
    atributo -> parrafoInicial

snake_case -> python

CASE - constantes (siempre en mayusculas)

*/


/* 
tIPOS DE VARIABLES 

var --> modificarse, scope global (se queda activa y viva hasta que la página se cierre), ya no se recomienda a menos de que se vaya hacer una variable global, pero en ese caso mejor se usa una constante
let --> Modificarse, scope limitado, cuando se sale del scope o del ambito donde esta actuando la variable, se muere, está es la recomendada
cont --> es una constante que no se modifica, scope global


javaScript debilmente tipado o dinamicamente tipado, es decir que un variable puede ser un numero entero, un string, o un numero decimal etc.
*/

//Forma 1
//normalmente se puede aplicar cuando no se le va nada al elemento, es decir, solo para hacer un evento (si hay alguna acción)

/*
document.getElementById("parrafoinicial").onclick = function () {
    accion()
}

function accion (){
    alert("Esto es una alerta")    
}
*/

//Forma 2

const parrafoInicial = document.getElementById("parrafoinicial");

console.log(parrafoInicial);

parrafoInicial.onclick = function (){
    cambioColorAleatorio();
}

function cambioColorAleatorio(){
    const colores = [
        "red",
        "blue",
        "pink",
        "cyan",
        "brown",
        "black",
    ];

    console.log(colores[Math.floor(Math.random())]);
    //math.floor redondea el valor al numero más cercano
    //math.random devuelve un valor aleatorio que va desde 0 a 1 el cual incluye el 0 pero no el uno
    parrafoInicial.style.color = colores[Math.floor(Math.random() * colores.length )];
}


/* 
Cual es la diferencia entre darle refresh (F5) contra seleccionarl la URL del navegador y darle enter
    refresh --> es una actualiación normal y toma archivos teporales
    Enter al navegador --> ignora caches de la sesión, se entra como si se hubiera entrado a la página 
        NOTA: se recomienda seleccionar la URL del navegador y darle enter para forzar la carga completa de la página
*/