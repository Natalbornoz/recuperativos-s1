/*
----------------------------------------------------------------------------------------------
PROBLEMA DIFICL 1
----------------------------------------------------------------------------------------------
Dado un arreglo de números rotar sus elementos hacia la derecha n veces.
Ejemplo:   arr = [1, 2, 3, 4, 5, 6, 7]
		     n = 3
		     retorna [5, 6, 7, 1, 2, 3, 4]

*/

//Para hacer una función, hay que definir el nombre de la función y entre los parentesis van los parametros que tiene que recibir
//n : numero a rotar
function rotar(array, n) {//lo primero indica desde donde empezara a contar, luego hasta donde contará, y luego la iteración; que es la cantidad de veces que se repetirá el ciclo
  for(var i = 0; i < n; i++) {
    array.unshift(array.pop()); //el pop toma el último elemento y con un unshift agrega elemento al principio
      }
      return array;
}
rotar([1, 2, 3, 4, 5, 6, 7, 8], 3);





/*
----------------------------------------------------------------------------------------------
PROBLEMA DIFICL 2
----------------------------------------------------------------------------------------------
Dado un arreglo de números positivos, retornar true si este se encuentra ordenado de menor a mayor, en caso contrario false.
No puede usar el método sort() de javascript.

*/

function orden(array) {//recorrer el array desde el indice 0 hasta el largo del arreglo y va avanzando de 1 en 1
    for(var i = 0; i < array.length; i++) {
      if(array[i] > array[i + 1]) { //comparar elementos del arreglo para ver cual es el mayor y el menor
        return false;
    }
    else {
        return true;
    }
  }
}
orden([1, 2]);





/*----------------------------------------------------------------------------------------------
PROBLEMA DIFICIL 3
----------------------------------------------------------------------------------------------
Dado un arreglo de números positivos, encontrar los elementos adyacentes cuya suma sea la mayor, retornar el resultado de la suma.

Ejemplo:	arr = [4, 5, 1, 2, 3, 4]  → 4 + 5
			retorna 9

	arr = [1, 2, 3]  → 2 + 3
			retorna 5

*/

function sumAdyacent(array) {
  var arr = [];
  var res = "";
    for(i = 0; i < array.length - 1; i++) {
        res = inputArray[i] * inputArray[i + 1];
        operacion.push(res); //añade nuevos elementos y devuelve nueva longitud//
  }
  return Math.max();
}





/*
----------------------------------------------------------------------------------------------
 PROBLEMA DIFICIL 4
----------------------------------------------------------------------------------------------
Dado un arreglo de números positivos, encontrar el elemento más pequeño y retornar su índice.
Ejemplo:	arr = [1, 2, 3]
			retorna 0

			arr = [3, 2, 1]
			retorna 2

*/
function menor (arr) {
  var iMenor= arr[0]; //array con el primer número del array
  for ( i=1 ; i < arr.length; i++ ){ //para recorrer el array

    if ( arr[i] < iMenor ){ //para comprobar cada número del array que sea menor al número que está antes
      iMenor = arr[i];
    }
  }
    return arr.indexOf(iMenor); //retorna el index del menor
  }
console.log(menor([8,2,3,1,5,6]));





/*
----------------------------------------------------------------------------------------------
PROBLEMA DIFICIL 5
----------------------------------------------------------------------------------------------
Dado un arreglo de números positivos, encontrar el elemento más pequeño e intercambiarlo por el primer elemento del arreglo.

Ejemplo:	arr = [3, 2, 1]
			retorna [1, 2, 3]

			arr = [4, 3, 1, 2]
			retorna [1, 3, 4, 2]
----------------------------------------------------------------------------------------------
*/

var x = Math.min(107 - 3, 48 * 90);
document.write(x);

var numbers = [35,76,91,85];
var menor = Math.min(numbers)
console.log(menor);


function position(arr){
  var index = 0; //representa la posición del número menor
  var elementArray = arr[0]; //representa al primer elmento del array, por eso se posiciona en 0
    for (var i = 1; i < arr.length; i++) { //se crea for para recorrer el array y hacer la comparación. La comparación se hará con el primer elemento, el que está en elementArray por lo que el for se inicializa con +1
    if (arr[i] < elementArray) {
    // si el numero en la posición i es menor a elementArray, tomará el lugar de elementArray por ser el número más pequeño
    elementArray = arr[i];
    index = i; //y voy a guardar su posición en la variable index
  }
}return index; //retorno la posición
}

console.log(position(numbers));

function lessNumber(arr){

}






//----------------------------------------------------------------------------------------------
// PROBLEMA MEDIO 6
//----------------------------------------------------------------------------------------------
// Dado un arreglo de números enteros positivos, se necesita detectar si están en orden ascendente (menor a mayor). Si es así, nuestra función debe retornar true, en caso contrario false. (Puede usar método sort())
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
// PROBLEMA MEDIO 7
//----------------------------------------------------------------------------------------------
// Dado un arreglo y un número, verificar si el número se encuentra en el arreglo. En caso de ya existir deberá retornar el arreglo sin cambios, en caso contrario retornar el arreglo nuevo con el número ingresado.
// Ejemplos:   arr = [1, 2, 3, 4]					arr = [1, 2, 3, 4]
//       number = 4						number = 8
//       retorna [1, 2, 3, 4]				retorna [1, 2, 3, 4, 8]
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
// PROBLEMA MEDIO 8
//----------------------------------------------------------------------------------------------
// Dado un arreglo y un número, retornar el índice (posición) del número.
// Ejemplo: arr = [1, 5, 8, 19]
// 		  number = 8
// 		  retorna 2
//----------------------------------------------------------------------------------------------




//----------------------------------------------------------------------------------------------
// PROBLEMA MEDIO 9
//----------------------------------------------------------------------------------------------
// Dados dos arreglos, devolver un nuevo arreglo que contenga la suma de los índices de cada array, arr1[índice 0] + arr2[índice 0] = nuevoArr[indice 0]
// Ejemplo:   arr1 = [1, 2, 3, 4]
// 		     arr2 = [5, 6, 7, 8]
// 		     retorna nuevoArr = [6, 8, 10, 12]
//----------------------------------------------------------------------------------------------

array1 = [1, 2, 3, 4];
array2 = [5, 6, 7, 8];

function sumArray ( arr1,arr2 ){
    var arr3=[]; //éste array, almacenará la suma de los indices de array1 y array2

      for( i=0; i<arr1.length; i++ ){ //El for es para recorrer lo array. Ambos tienen el mismo largo así que arr1 es solo "referencial"
        arr3[i]=arr1[i]+arr2[i]; //El array3 será igual a la suma de las posiciones de ambos arays
 }return arr3; //retorno mi nuevo array.

}
console.log(sumArray(array1,array2));





//----------------------------------------------------------------------------------------------
// PROBLEMA MEDIO 10
//----------------------------------------------------------------------------------------------
// Un grupos de amigos van a un evento y sus nombres están dentro de un arreglo.
// Escribir una función donde dado el nombre de la persona puedas retornar el asiento que le toca. La numeración comienza en 1, si la persona no tiene asiento retornar 0.
// Ejemplo:  lista = [“Allison”, “Belén”, “Nadia”, “Marcia”, “Ale”, “Fabián”]
// 		    nombre = “Nadia”
// 		    retorna 3
//----------------------------------------------------------------------------------------------
var listNames = ["Andrea", "Mónica", "Felipe", "Nicolás", "Consuelo"]; //Array con listado de nombres
function list(listNames) {
  - -- -- -- -- - - -- -- -- - - -- -- - - -- - - -
  var name = "Consuelo" // Nombre a buscar
    - - - -- - - - -- - -- - - - -- - - -- - -- - - - -- - - -- - - -- - -- - - - -- - - -- - - -- - - -- - - - -- - - -- - - -- - - - - - - -- - - -- - - - - - - -- - - - - - - -
    var index = listNames.indexOf(name); //A través del método indexOf buscamos el índice del elemento que se encuentra en la variable "name"
  -
  -- - -- - - -- -- - - -- -- -- - - -- -- -- -- - -- -- -- - - -- -- - - -- - - -
  return index + 1; // el "+ 1" es para que la numeración comience en 1
}
console.log(list(listNames));
//----------------------------------------------------------------------------------------------
//PROBLEMA FACIL 11
//----------------------------------------------------------------------------------------------
// Diseñar un programa que lea las calificaciones de un alumno (10 notas en total). Debes calcular e imprimir su promedio, y decir a través de un alert si el ramo fue aprobado o no. Las notas van de 1 a 7 y se aprueba con un promedio igual o mayor a 4.
//----------------------------------------------------------------------------------------------
function promedio(arrayNotas) {
  - -- -- -- -- -- - //variabe suma inicializada en 0
  - -- -- -- -- -- - - -- -- -- -- - - -- -- -- - - -- -- - - -- - - -
  var suma = 0; - - -- -- -- -- -- //recorrer el arreglo para sumar las notas
  - -- -- -- -- -- - - -- -- -- -- - - -- -- -- - - -- -- - - -- - - -
  for(var i = 0; i < arrayNotas.length; i++) {
    - - - -- - - -- - - -- - - -- - - -- - - -suma = suma + arrayNotas[i]; - - - - -- - - -- - - -- - - -- - - -- - - //suma += arrayNotas[i];
    - - - -- - - -- - - -- - - -- - - -- - - - - -- - - -- - - -- - - -- - - - - -- - - -- - - -- - - - - -- - - -- - - - - -- - - -
  } - - -- -- -- -- -- - -- -- -- -- - - -- -- -- - - -- -- - - -- - - -
  var prom = suma / 10; - - -- -- -- -- -- - -- -- -- -- - - -- -- -- - - -- -- - - -- - - -
  if(prom >= 4) {
    - - - -- - - -- - - -- - - -- - - -- - - -alert("Alumno aprobado con : " + prom); - - - - -- - - -- - - -- - - -- - - -- - - - -- - - -- - - -- - - -- - - - - -- - - -- - - -- - - - - -- - - -- - - - - -- - - -
  } else {
    - - - -- - - -- - - -- - - -- - - -- - - -alert("Alumno reprobado"); - - - - -- - - -- - - -- - - -- - - -- - - - -- - - -- - - -- - - -- - - - - -- - - -- - - -- - - - - -- - - -- - - - - -- - - -
  }
}
promedio([7, 7, 6, 5, 4, 6, 6, 7, 5, 3]);
/*
----------------------------------------------------------------------------------------------
PROBLEMA FACIL 12
----------------------------------------------------------------------------------------------
Realizar un programa que permita analizar si una palabra que el usuario introduce por teclado es palíndroma o no.
Si es palíndroma debe retornar true, en caso contrario false.
Palíndroma: palabra que se lee igual de adelante hacia atrás como de atrás hacia adelante. Ejemplo: Amalama
----------------------------------------------------------------------------------------------
*/
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
// //se crea funcion para verificar si es la misma palabra
// function palindrom(word) {
//  - -//retorna verdadero si word es igual a word en reversa
//  - -//saca los respacio
//  - -return word == word.split('').reverse().join('');
// }
//
// palindrom("anitalavalatina");
function palindroma(str) {

  var back = str.split(""); // como la palabra ingresada es un string , la convertimos en un array usando el método split
  var legal = back.reverse(); // la convertimos en un array con intención de aplicar al array el metodo reverse ,hace que el array se de vuelta al revez.

  var strLegal = legal.join(""); //pero lo que nosotros queremos es el string si que este array que lo dimos vuelta lo volvermos a pasar a string con
 //el método join , si que ya tenemos nuestro string al reverso.

  if(str == strLegal) { //decimos que si el string es igual igual a su string pero al revez , entonces retornamos TRUE

    return true;
  } else { //pero si esto no sucede entonces que retorne falso.

    return false;
  }
}
console.log(palindroma("reconocer")); //probando con el palindromo reconocer.
//----------------------------------------------------------------------------------------------
// PROBLEMA FACIL 13
//----------------------------------------------------------------------------------------------
// Dado dos string (palabra1 y palabra2) escribir una función para determinar si palabra1 es anagrama de palabra2.
// Si es anagrama debe retornar true, en caso contrario false.
// Una palabra es anagrama de otra cuando contiene las mismas letras en un orden distinto.
// Ejemplo: la palabra anagrama es un anagrama de la palabra anmgraaa
//----------------------------------------------------------------------------------------------
// PSEUDOCODIGO :  1.- Al tener ambas palabras, comparo el largo
//                 2.- Si el largo coincide separo los caracteres de ambas palabras y los ordeno alfabeticamente
//                 3.- Hago otra comparacion y si los caracteres coinciden, estamos frente a un anagrama y devo devolver true
//                 4.- Si nada de lo que se menciona arriba sucede, retornar false
/*alert ("Ingresa dos palabras");
var word1 = prompt ("Palabra 1 :");
var word2 = prompt ("Palabra 2:");
alert ("Ahora verificaremos si son anagramas");

// se compara si el largo de la palabra 2 es igual al largo de la palabra  1
if (word1.length == word2.length) {
  // var verificacionAnagrama = word2.split(" ");

}
  return word2.split('').reverse().join('');
};

else {
  return false;
};*/
function palabras(word1, word2) {
  - -- -- -- -- -- - - -- -- -- -- - - -- -- -- - - -- -- - - -- - - -
  if(word1.length == word2.length) {
    - - - -- - - -- - - -- - - -- - - -- - - - - - - -- - - -- - - -- - - -- - - - - - - -- - - -- - - -- - - - - - - -- - - -- - - - - - - -- - - - - - - -
    return true; - - - - -- - - -- - - -- - - -- - - -- - - - -- - - -- - - -- - - -- - - - - -- - - -- - - -- - - - - -- - - -- - - - - -- - - -
  }
};
palabras("gato,lata");
//----------------------------------------------------------------------------------------------
// PROBLEMA FACIL 14
//----------------------------------------------------------------------------------------------
// Dado un arreglo de 10 números, retornar un nuevo arreglo solo con los números pares.
// Ejemplo: input arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//    output nuevoArr = [2, 4, 6, 8, 10]
//----------------------------------------------------------------------------------------------
var numeros = [];
var i;
//pido los 10 números al usuario y las guardo en el array numeros.
//con el for el proceso se repite 10 veces
for(i = 0; i < 10; i++) {
  - -- -- -- -- -- - //el metodo push () "empuja" los elementos hacia el array
  - -- -- -- -- -- - numeros.push(Number(prompt("Ingresa un numero:" + (i + 1))));
}
var pares = [];
numeros.forEach(function(numeros, index) {
  - -- -- -- -- -- - - -- -- -- -- - - -- -- -- - - -- -- - - -- - - -
  if(numeros % 2 == 0) { //verifico si es par, si es se va al array
    - - - -- - - -- - - -- - - -- - - -- - - -pares.push(numeros); - - - - -- - - -
  } else {
    - - - -- - - - - - - -
    return false; - - - - -- - - -
  }
});
document.write(pares); //al final imprime el array de numeros pares
/*
PROBLEMA FACIL 15
----------------------------------------------------------------------------------------------
Dado un arreglo de 4 números positivos, devolver un nuevo arreglo con cada elemento multiplicado por 12.
Ejemplo: input arr = [1, 2, 3, 4]
		  output nuevoArr = [12, 24, 36, 48]
----------------------------------------------------------------------------------------------
*/
var array = [1, 2, 3, 4];
var number = 12;

function multiplicar(arr) {
  - -newArray = []; // creo array vacío para retornarlo con los números muñtiplicados por 12
  - -
  for(i = 0; i < arr.length; i++) { //creo ciclo para que recorra el arreglo
    - - - -newArray.push(arr[i] * number); //mientras se recorre el arreglo, se multiplican los elementos por 12 y con el metodo push se guardan en el nuevo array
    - -
  } - -
  return newArray; //retorno nuevo array con los elementos multiplicados por 12
}
console.log(multiplicar(array));
