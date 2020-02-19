//Funcion que calcula si el numero que se pasa por parametro es un numero primo. Un número primo es aquél que sólo es divisible por 1 y por sí mismo.
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

//Funcion principal
function main () { 
  if (process.argv.length !== 3 || isNaN(process.argv[2])) {
    console.log('Error: Ejecute este programa aportando como argumento en la linea de comandos un numero entero.');
  } else {
    let num = Number(process.argv[2]);
    if (isPrime(num)) {
      console.log("El numero " + num + " es primo");
    } else {
      console.log("El numero " + num + " no es primo");
    }
  }
}

main()
