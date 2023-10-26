/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function soloNumeros(array) {
  // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los enteros.
  // Ej:
  // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

  // Tu código aca:
  // 1
  // return array.filter(e => typeof e === 'number' && !isNaN(e));
  // 2
  // const onlyNumber = [];
  // array.forEach((e) => {
  //   if (Number.isInteger(e)) onlyNumber.push(e);
  // });
  // return onlyNumber;
  // 3
  // const onlyNumber = [];
  // for (const i of array) {
  //   if (Number.isInteger(i)) onlyNumber.push(i);
  // }
  // return onlyNumber;
  // 4
  // const onlyNumber = [];
  // for (let i = 0; i < array.length; i++) {
  //   if (Number.isInteger(array[i])) onlyNumber.push(array[i]);
  // }
  // return onlyNumber;
  return array.filter((e) => parseInt(e) === e);
}

// No modifiques nada debajo de esta linea //

module.exports = soloNumeros;
