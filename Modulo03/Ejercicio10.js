/* Añade un botón a tu html con el id btnToClick y en tu 
javascript añade el evento click que ejecute un console log 
con la información del evento del click */

function evento (event){
    console.log(event);
    alert("Hola :> ");
}

let boton = document.getElementById("btnToClick");

boton.addEventListener("click", evento, false);