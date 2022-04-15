//Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let newUl = document.createElement("ul");

for (let i = 0; i < apps.length; i++) {
    let newLi = document.createElement("li");
    newLi.innerHTML = apps[i];
    newUl.appendChild(newLi);
}

document.body.appendChild(newUl);