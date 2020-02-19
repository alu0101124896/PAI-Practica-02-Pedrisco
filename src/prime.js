//  
//  File: prime.js
//  Author: Sergio Tabares Hernández (alu0101124896@ull.edu.es)
//  Date: Winter 2020
//  Course: Computer Science - Interactive Aplication Programing
//

//Funcion que calcula si el numero que se pasa por parametro es un numero primo. Un número primo es aquél que sólo es divisible por 1 y por sí mismo.
function isPrime(candidate) {
  for (let i = 2; i < candidate; i++) {
    if (candidate % i === 0) {
      return false;
    }
  }
  return true;
}

//Funcion principal
function main() {
  if (process.argv.length !== 3 || isNaN(process.argv[2])) {
    console.log('Error: Ejecute este programa aportando como argumento en la linea de comandos un numero entero.');
  } else {
    let candidate = Number(process.argv[2]);
    if (isPrime(candidate)) {
      console.log("El numero " + candidate + " es primo");
    } else {
      console.log("El numero " + candidate + " no es primo");
    }
  }
}

main()
