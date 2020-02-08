# Práctica 2. Números 'Pedrisco'
### Factor de ponderación: 5
Se ha comprobado experimentalmente para números naturales muy grandes que si a un número natural, `n`, se le somete al siguiente proceso:
 1. Si el número es par, dividirlo por 2
 2. Si es impar, multiplicarlo por 3 y sumar 1
 3. Si N es igual a 1, parar el proceso. Si N es distinto de 1 volver al paso 1
todos los números naturales acaban tomando el valor 1 después de un cierto número de iteraciones del proceso. Por ejemplo, si tomamos N = 5:
`n`N~0~ = 5  
N~1~ = 3 * 5 + 1 = 16
N~2~ = 16 / 2 = 8
N~3~ = 8 / 2 = 4
N~4~ = 4 / 2 = 2
N~5~ = 2 / 2 = 1
Se observa  que para N=5, el proceso se realiza 5 veces antes de su finalización (el último número acaba siendo 1).
Se desconoce si esta es una propiedad intrínseca a los números naturales o bien si se trata de una particularidad para la que aún no se ha encontrado ningún contraejemplo.
La práctica consiste en diseñar un programa en JavaScript que tome como entrada dos números N

un número M y realice este proceso para todos los números naturales N en el rango 1 <= N <= M.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEwNzMwMDU4OSw0MjYzNjAwNTFdfQ==
-->