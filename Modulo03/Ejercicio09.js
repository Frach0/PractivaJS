//Basandote en el siguiente html y javascript,inserta p con el 
//texto 'Voy dentro!', dentro de todos los div con la clase 
//.fn-insert-here

let DOMDivs = document.querySelectorAll(".fn-insert-here");
console.log(DOMDivs);

for (let i = 0; i < DOMDivs.length; i++) {
    let newP = document.createElement("p");
    newP.innerHTML = "Voy dentro!";
    DOMDivs.appendsChild(newP);
}