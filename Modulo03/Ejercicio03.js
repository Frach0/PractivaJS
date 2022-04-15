//Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

let NewDiv = document.createElement("div");

for (let i = 0; i < 6; i++) {
    let NewP = document.createElement("p");
    NewP.innerHTML= `HOLA MUNDO ${i + 1}`;
    NewDiv.appendChild(NewP);
}

document.body.appendChild(NewDiv);