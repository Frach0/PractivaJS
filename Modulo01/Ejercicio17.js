//Elimina el último elemento del array y muestra el primero y el último por consola.

const RickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

RickAndMortyCharacters.pop(); //El .pop elimina el ultimo elemento de un array

var ult = RickAndMortyCharacters.length - 1;

console.log(RickAndMortyCharacters[0]);
console.log(RickAndMortyCharacters[ult]);