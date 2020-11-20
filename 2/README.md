# Test 2

El fragmento de código de nuestro fichero `test.js` nos devuelve un output no 
deseado. Queremos imprimir un valor incremental a cada segundo pero lo que 
nos devuelve el código es el mismo valor en cada iteración. 

1. Sin necesidad de ejecutar el código, ¿sabrías decirnos qué valor imprimiría
 por consola el script? ¿Cuál es el motivo?

Respuesta:
Lo que se obtiene al ejecutar este codigo es la impresion de cinco veces el cinco. Porque la funcion setTimeout lo que hace es esperar un segundo y ejecutar el console.log(i),
por ende en la primera ejecucion lo que hace es inicializar el for con i igual a 0, mientras i sea menor a cinco y luego le suma a i uno. A llegar a la funcion setTimeout espera un segundo, 
entra por segunda vez i igual a 1, i sigue siendo menos a cinco y vuelve a llamar al setTimeout, la tercera vez lo mismo con i igual a 2. Por lo que cuando termina el for i es igual a 5,
y en ese momento llama a los console.log(i) con el valor actual de i que es cinco.

2. Sabiendo que el output que buscamos es el que encuentras bajo estas líneas… 
¿Cómo solucionarías el fragmento de código para que el output sea el deseado?

Respuesta:
Quitando el setTimeout, dejando solamente el console.log(i).

```
    > 0
    > 1
    > 2
    > 3
    > 4
```