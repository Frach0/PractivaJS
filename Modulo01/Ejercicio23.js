//Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad 
//precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad,
// precedido del texto "Usuarios mayores de edad:".

const users = [{name: "Abel", years: 43}, {name: "Maria", years: 18}, {name: "Pedro", years: 14}, {name: "Samantha", years: 32}, {name: "Raquel", years: 16}];

var menores = "";
var mayores = "";

for (let i = 0; i < users.length; i++) {
    if (users[i].years < 18) {
        menores += users[i].name + ", ";
    }else{
        mayores += users[i].name + ", ";
    }
}

console.log('Usuarios menores de edad: ' + menores);
console.log('Usuarios mayores de edad: ' + mayores);