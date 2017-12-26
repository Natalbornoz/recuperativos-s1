//PROBLEMA DIFICL 1
// Dado un arreglo de números rotar sus elementos hacia la derecha n veces.
// Ejemplo:   arr = [1, 2, 3, 4, 5, 6, 7]
// 		     n = 3
// 		     retorna [5, 6, 7, 1, 2, 3, 4]

//Para hacer una función, hay que poner un nombre y entre los parentesis van los parametros que tiene que recibir
//n : numero a rotar
function rotar (array, n) {
  //lo primero indica desde donde empezara a contar, luego hasta donde contará, y luego la iteración
  for (var i = 0; i<n; i++) {
    //con un unshift agrega elemnto al principio  y pop
    array.unshift (array.pop()) ;
  }

  return array;
}

rotar ([1,2,3,4,5,6,7,8], 3);


//PROBLEMA DIFICL 2
// Dado un arreglo de números positivos, retornar true si este se encuentra ordenado de menor a mayor, en caso contrario false.
// No puede usar el método sort() de javascript.
function orden (array) {
  //recorrer el array desde el indice 0 hasta el largo del arreglo y va avanzando de 1 en 1
  for (var i = 0; i < array.length; i++) {
  //comparar elementos del arreglo
    if (array[i]>array[i+1]){
      return false;
    }
    else {
      return true;
    }
  }
}

orden ([1,2]);


// PEOBLEMA MEDIO 6
// Dado un arreglo de números enteros positivos, se necesita detectar si están en orden ascendente (menor a mayor). Si es así, nuestra función debe retornar true, en caso contrario false. (Puede usar método sort())

//PROBLEMA FACIL 11
// Diseñar un programa que lea las calificaciones de un alumno (10 notas en total). Debes calcular e imprimir su promedio, y decir a través de un alert si el ramo fue aprobado o no. Las notas van de 1 a 7 y se aprueba con un promedio igual o mayor a 4.

function promedio (arrayNotas) {
  //variabe suma inicializada en 0
  var suma = 0;
  //recorrer el arreglo para sumar las notas
  for (var i = 0; i < arrayNotas.length; i++ ) {
  suma = suma + arrayNotas[i];
  //suma += arrayNotas[i];
  }
  var prom = suma/10;
  if (prom >= 4) {
    alert("Alumno aprobado con : " + prom) ;
  }
  else {
  alert("Alumno reprobado");
  }
}

promedio ([7,7,6,5,4,6,6,7,5,3]);


// PROBLEMA FACIL 12
// Realizar un programa que permita analizar si una palabra que el usuario introduce por teclado es palíndroma o no.
// Si es palíndroma debe retornar true, en caso contrario false.
// Palíndroma: palabra que se lee igual de adelante hacia atrás como de atrás hacia adelante. Ejemplo: Amalama

// function palindroma (word) {
//   //recorrer la palabra de manera inversa
// for (var i = word.length; i < 0; i--) {
//   var wordInverse = word[i];
//   console.log (wordInverse);
// }
// }
//
// palindroma ("anitalavalacocina");



// function palindroma (word) {
//   var word2 = word.reverse();
//   if (word2===word) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }
//
// palindroma ("anitalavalatina");

//se crea funcion ara verificar si es la misma palabra
function palindrom(word) {
//retorna verdadero si word es igual a word en reversa
//saca los respacio
    return word == word.split('').reverse().join('');
}

palindrom("anitalavalatina");


// PROBLEMA FACIL 15
// Dado un arreglo de 4 números positivos, devolver un nuevo arreglo con cada elemento multiplicado por 12.
// Ejemplo: input arr = [1, 2, 3, 4]
// 		  output nuevoArr = [12, 24, 36, 48]
//
