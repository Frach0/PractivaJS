/*Basandote en el siguiente html, añade un evento 'focus' 
que ejecute un console.log con el valor del input.*/

function evento (event){
    console.log(event.srcElement.value);
}

let elemet = document.getElementById("showme");

elemet.addEventListener("focus", evento, false);