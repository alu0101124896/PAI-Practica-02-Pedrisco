//  
//  File: primegap.js
//  Author: Sergio Tabares Hernández (alu0101124896@ull.edu.es)
//  Date: Winter 2020
//  Course: Computer Science - Interactive Aplication Programing
//

//Funcion que calcula si el numero que se pasa por parametro es un numero primo
function isPrime(candidato) {
  for (let i = 2; i < candidato; i++) {
    if (candidato % i === 0) {
      return false;
    }
  }
  return true;
}

//Funcion que calcula la diferencia entre dos numeros primos sucesivos
function primeGap(primeNum_1, primeNum_2) {
  return primeNum_2 - primeNum_1;
}

//Funcion principal
function main() {
  if (process.argv.length !== 3 || isNaN(process.argv[2])) {
    console.log('Error: Ejecute este programa aportando como argumento en la linea de comandos un numero entero.');
  } else {
    let numberPrimeNumbs = Number(process.argv[2]);
    let actualPrimeNumbs = 0;
    let primeNum_1 = 1;
    let primeNum_2 = 2;
    let primeGaps = '';
    while (actualPrimeNumbs < numberPrimeNumbs) {
      while (!isPrime(primeNum_2)) {
        primeNum_2++;
      }
      primeGaps += primeGap(primeNum_1, primeNum_2);
      primeGaps += ' ';
      primeNum_1 = primeNum_2;
      primeNum_2++;
      actualPrimeNumbs++;
    }
    console.log(primeGaps);
  }
}

main()

