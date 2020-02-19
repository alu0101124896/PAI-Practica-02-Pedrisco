//Funcion que calcula si el numero que se pasa por parametro es un numero primo
function isPrime(candidato) {
  for (let i = 2; i < candidato; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

//Funcion que calcula la diferencia entre dos numeros primos sucesivos
function primeGap(candidato_1, candidato_2) {
  
}

//Funcion principal
function main () {
  if (process.argv.length !== 3 || isNaN(process.argv[2])) {
    console.log('Error: Ejecute este programa aportando como argumento en la linea de comandos un numero entero.');
  } else {
    numberPrimeNumbs = Number(process.argv[2]);
    for (let i = 0; i < numberPrimeNumbs; ) {
      
    }
  }
}

main()

