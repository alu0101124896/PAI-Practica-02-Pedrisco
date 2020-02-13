if (process.argv.length !== 4 || isNaN(process.argv[2]) || isNaN(process.argv[3]) || Number(process.argv[2]) >= Number(process.argv[3])) {
  console.log('Error: Ejecute este programa aportando como argumentos en la linea de comandos dos numeros enteros, siendo el primero menor que el segundo.');
} else {
  for (let i = Number(process.argv[2]); i <= Number(process.argv[3]); i++) {
    let iterations = 0;
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
      iterations++;
    }
    console.log(i + " - " + iterations);
  }
}
