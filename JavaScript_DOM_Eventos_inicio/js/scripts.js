// querySelector

const heading = document.querySelector('#heading') // Retorna 0 o 1 elemento
heading.textContent = "HOLA MUNDO";
console.log(heading)

// querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = "Nuevo Texto para Enlace";
enlaces[0].classList.add('nueva-clase');
enlaces[0].classList.remove('navegacion__enlace');

// getElmentByID

const heading2 =document.getElementById('heading');
console.log(heading2);