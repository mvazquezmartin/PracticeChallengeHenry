/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function filtrar(funcion) {
  // Escribi una función filtrar en el prototipo de Arrays,
  // que recibe una funcion (callback) que devuelve true o false.
  // filtrar los elementos de ese arreglo en base al resultado de esa funcion
  // comparadora, devolver un nuevo arreglo con los elementos filtrados.
  // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
  // ej:
  // var productos = [{
  //   price: 100,
  //   name: 'tv'
  // }, {
  //   price: 50,
  //   name: 'phone'
  // }, {
  //   price: 30,
  //   name: 'lamp'
  // }]
  // productos.filtrar(function(p) {
  //   return p.price >= 50;
  // }) => [{price: 100, name:'tv'}]

  //1
  // Array.prototype.filtrar = function(funcion) {
  //   const newArray = [];
  //   for (let i = 0; i < this.length; i++) {
  //     if (funcion(this[i])) {
  //       newArray.push(this[i]);
  //     }
  //   }
  //   return newArray;
  // }
  // 2
  // Array.prototype.filtrar = function(funcion) {
  //   const newArray = [];
  //   this.forEach(elemento => {
  //     if (funcion(elemento)) {
  //       newArray.push(elemento);
  //     }
  //   });
  //   return newArray;
  // };
  // 3
  // Array.prototype.filtrar = function(funcion) {
  //   return this.reduce((resultados, elemento) => {
  //     if (funcion(elemento)) {
  //       resultados.push(elemento);
  //     }
  //     return resultados;
  //   }, []);
  // };

  Array.prototype.filtrar = function (funcion) {
    const newArray = [];
    for (const elemento of this) {
      if (funcion(elemento)) {
        newArray.push(elemento);
      }
    }
    return newArray;
  };
}

// No modifiques nada debajo de esta linea //

module.exports = filtrar;
