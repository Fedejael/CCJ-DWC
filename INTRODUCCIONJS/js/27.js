// POO

// Object literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor
function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}
Cliente.prototype.formatearCliente = function() {
    return `El cliente es: ${this.nombre} ${this.apellido}`;
}

// --------------------------------------------------------------------------------------

function Producto(nombre, precio, color) {
    this.nombre = nombre;
    this.precio = precio;
    this.color = color;
}
// Crear funciones que solo se utilizan en un objeto en especifico.
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
}

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop"', 300);
const producto4 = new Producto('Tablet"', 800, "roja");
const producto5 = new Producto('Laptop"', 300, "Verde");
const cliente = new Cliente('Juan"', "De La Torre");

console.log(producto2);
console.log(producto2.formatearProducto() );
console.log(producto3.formatearProducto() );
console.log(cliente.formatearCliente() );

/* console.log(producto4);
console.log(producto5); */

