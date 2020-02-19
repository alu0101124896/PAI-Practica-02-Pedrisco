//Funcion que calcula si el numero que se pasa por parametro es un numero primo
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

//Funcion que calcula si el numero que se pasa por parametro es un numero de mersenne. Un primo de Mersenne es un número primo de la forma 2^p - 1. Una propiedad conocida de los primos de Mersenne es que p debe ser también un número primo.
function isMersenne(num) {
  return (isPrime(num) && isPrime(Math.pow(2, num) - 1));
}

//Funcion principal
function main () {
  if (process.argv.length !== 3 || isNaN(process.argv[2])) {
    console.log('Error: Ejecute este programa aportando como argumento en la linea de comandos un numero entero.');
  } else {
    let mersenneNumbers = 0;
    let num = Number(process.argv[2]);
    let iterator = 2;
    while (mersenneNumbers < num) {
      if (isMersenne(iterator)) {
        mersenneNumbers += 1;
        console.log(Math.pow(2, iterator) - 1);
      }
      iterator += 1;
    }
  }
}

main()
