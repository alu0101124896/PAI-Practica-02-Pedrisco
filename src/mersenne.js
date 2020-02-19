//  
//  File: mersenne.js
//  Author: Sergio Tabares Hernández (alu0101124896@ull.edu.es)
//  Date: Winter 2020
//  Course: Computer Science - Interactive Aplication Programing
//

//Funcion que calcula si el numero que se pasa por parametro es un numero primo
function isPrime(candidate) {
  for (let i = 2; i < candidate; i++) {
    if (candidate % i === 0) {
      return false;
    }
  }
  return true;
}

//Funcion que calcula si el numero que se pasa por parametro es un numero de mersenne. Un primo de Mersenne es un número primo de la forma 2^p - 1. Una propiedad conocida de los primos de Mersenne es que p debe ser también un número primo.
function isMersenne(candidate) {
  return (isPrime(candidate) && isPrime(Math.pow(2, candidate) - 1));
}

//Funcion principal
function main() {
  if (process.argv.length !== 3 || isNaN(process.argv[2])) {
    console.log('Error: Ejecute este programa aportando como argumento en la linea de comandos un numero entero.');
  } else {
    let totalNumbs = Number(process.argv[2]);
    let actualNumbs = 0;
    let mersNumbs = '';
    let candidate = 2;
    while (actualNumbs < totalNumbs) {
      if (isMersenne(candidate)) {
        actualNumbs += 1;
        mersNumbs += Math.pow(2, candidate) - 1;
        mersNumbs += ' ';
      }
      candidate += 1;
    }
    console.log("Los " + totalNumbs + " primeros numeros primos de mersenne son: " + mersNumbs)
  }
}

main()
