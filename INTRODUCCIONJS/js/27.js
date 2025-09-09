// POO

// Object literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor
function Producto(nombre, precio, color) {
    this.nombre = nombre;
    this.precio = precio;
    this.color = color;
}
const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop"', 300);
const producto4 = new Producto('Tablet"', 800, "roja");
const producto5 = new Producto('Laptop"', 300, "Verde");

console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);