# Práctica 2. Números 'Pedrisco'
### Factor de ponderación: 5
Se ha comprobado experimentalmente para números naturales muy grandes que si a un número natural, `n`, se le somete al siguiente proceso, al que denominaremos *pedrisco*:
 1. Si el número es par, dividirlo por 2
 2. Si es impar, multiplicarlo por 3 y sumar 1
 3. Si `n` es igual a 1, parar el proceso. Si `n` es distinto de 1 volver al paso 1

todos los números naturales acaban tomando el valor 1 después de un cierto número de iteraciones del proceso. Por ejemplo, si se toma `n = 5`:
`n`~0~ = 5  
`n`~1~ = 3 * 5 + 1 = 16
`n`~2~ = 16 / 2 = 8
`n`~3~ = 8 / 2 = 4
`n`~4~ = 4 / 2 = 2
`n`~5~ = 2 / 2 = 1
Se observa  que para `n`=5, el proceso *pedrisco*se realiza 5 veces antes de su finalización (el último número acaba siendo 1).
Se desconoce si esta es una propiedad intrínseca a los números naturales o bien si se trata de una particularidad para la que aún no se ha encontrado ningún contraejemplo.
La práctica consiste en diseñar un programa en JavaScript (`pedrisco.js`) que tome como entrada dos números N y M (N $\lt$ M) e imprima en pantalla el número de iteraciones que se realiza el proceso para todos los números  N $\leq$ `n`  $\leq$ M.
El programa debe tomar los valores de entrada por línea de comandos:

    node pedrisco.js N M

El programa calculará asimismo los números `p` y `q` (N $\leq$ `p`, `q`  $\leq$ M) que requieren el máximo y mínimo número de iteraciones del proceso 'pedrisco' en ese rango.
<!--stackedit_data:
eyJoaXN0b3J5IjpbOTkzODQ3ODMxLDQyNjM2MDA1MV19
-->