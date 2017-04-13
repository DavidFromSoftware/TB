#!/usr/bin/env node

var cantidadArray= 0
var arrayNumeros = []
var arrayStrings = []
var stdio = require('stdio');

// Toma cualquier numero como parametro y si es divisible por 3, 5 o ambos devuelve el string correspondiente
function divisible(number){
	var result = ""
	if(number % 3 == 0){
		result +="Fizz"
	}
	if(number % 5 == 0){
		result += "Buzz"
	}
	return result
}


// Función recursiva que pide al usuario inserter los numeros para crear el array de numeros
function addNumber(number_initial){
	if(number_initial<cantidadArray){
		stdio.question('Inserte numero', function (err, numero) {
			arrayNumeros.push(numero)
			arrayStrings.push(divisible(numero));
			addNumber(number_initial+1)
		});
	}else{
		// Al terminar la recursiva devuelve los array de enteros y strings
		console.log(arrayNumeros)
		console.log(arrayStrings)
	}
}


stdio.question('Cantidad de enteros en array', function (err, cantidad) {
	cantidadArray = cantidad
	addNumber(0)
});
