/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no.
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true
  // Tu código:
  // 1
  // const numString = num.toString();
  // const length = numString.length;
  // for (let i = 0; i < length / 2; i++) {
  //   if (numString[i] !== numString[length - 1 - i]) {
  //     return false;
  //   }
  // }
  // return true;
  const numString = num.toString();
  const reverseNum = numString.split("").reverse().join("");
  return numString === reverseNum;
}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico;
