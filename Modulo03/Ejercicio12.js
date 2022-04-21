/*Basandote en el siguiente html, añade un evento 'input'
que ejecute un console.log con el valor del input.
*/

function evento(event){
    console.log(event.srcElement.value);
}

let elemento = document.getElementById("showme");
elemento.addEventListener('input', evento);