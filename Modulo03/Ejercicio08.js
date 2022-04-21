/*Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!' entre los dos div. 
Recuerda que no solo puedes insertar elementos con .appendChild.
*/

const ultDiv = document.querySelectorAll('div')[1];

let newP = document.createElement("p");

newP.innerHTML = "Voy en el medio!";

document.body.insertBefore(newP, ultDiv);