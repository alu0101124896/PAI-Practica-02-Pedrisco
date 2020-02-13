if (process.argv.length !== 4 || isNaN(process.argv[2]) || isNaN(process.argv[3]) || Number(process.argv[2]) >= Number(process.argv[3])) {
  console.log('Error: Ejecute este programa aportando como argumentos en la linea de comandos dos numeros enteros, siendo el primero menor que el segundo.');
} else {
  let maxIters = 0, maxItersNum = 0, minIters = Number.MAX_VALUE, minItersNum = 0;
  for (let i = Number(process.argv[2]); i <= Number(process.argv[3]); i++) {
    let iters = 0;
    let number = i;
    while (number !== 1) {
      if (number % 2 === 0) {
        number /= 2;
      } else if (number % 2 === 1) {
        number *= 3;
        number++;
      } else {
        console.log("Error: El numero " + number + " no es par ni impar.");
        break;
      }
      iters++;
    }
    if (iters > maxIters) {
      maxIters = iters;
      maxItersNum = i;
    }
    if (iters < minIters) {
      minIters = iters;
      minItersNum = i;
    }
    console.log(i + " - " + iters);
  }
  console.log("El numero que requiere el mayor numero de iteraciones es el " + maxItersNum + " con un total de " + maxIters + " iteraciones.");
  console.log("El numero que requiere el menor numero de iteraciones es el " + minItersNum + " con un total de " + minIters + " iteraciones.");
}
