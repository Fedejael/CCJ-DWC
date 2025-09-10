const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;

    if(auth) {
        resolve('Usuario Auntenticado'); // EL PROMISE SE CUMPLE
    } else {
        reject('No se pudo iniciar sesión'); // EL PROMISE NO SE CUMPLE
    }
});

usuarioAutenticado
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error))


// En los Promises existen 3 valores 
// Pending : No se ha cumplido pero tampoco se ha rechazado
// Fulfilled : Ya se cumplio
// Rejected :  se ha rechazado o no se pudo cumplir