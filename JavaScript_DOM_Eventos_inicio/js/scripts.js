// querySelector

const heading = document.querySelector('#heading') // Retorna 0 o 1 elemento
heading.textContent = "HOLA MUNDO";
console.log(heading)

// querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = "Nuevo Texto para Enlace";
enlaces[0].classList.add('nueva-clase');
/* enlaces[0].classList.remove('navegacion__enlace'); */

// getElmentByID - FORMA VIEJA

/* const heading2 =document.getElementById('heading');
console.log(heading2); */

// Generar un nuevo enlace

const nuevoEnlace = document.createElement('A')

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';
// Agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';
// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


console.log(nuevoEnlace);


// Eventos 

console.log(1);

window.onload = function () {
    console.log(3);
}

window.addEventListener('load', function() { // LOAD espera a que el JavaScript y los archivos que dependen del HTML estén listos.
    console.log(2);
})

document.addEventListener('DOMContentLoaded', function () { // Solo espera por el HTML, pero no espera CSS o imagenes
    console.log(4);
})

console.log(5);

window.onscroll = function() {
    console.log('scrolling...');
}