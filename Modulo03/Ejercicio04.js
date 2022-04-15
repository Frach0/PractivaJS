//Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

let newP = document.createElement("p");

newP.innerHTML = "Soy Dinámico!";

document.body.appendChild(newP);