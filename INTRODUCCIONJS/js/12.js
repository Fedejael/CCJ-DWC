/* "use strict"; */ // Correr JS en modo estricto
// Objetos
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.seal(producto);

producto.precio = 'NUEVO PRECIO'; // .freeze .seal

delete producto.precio;

console.log(producto);