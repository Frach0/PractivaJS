//Basandote en el siguiente html, elimina todos los nodos que tengan la clase .fn-remove-me

let Eliminar = document.querySelectorAll('.fn-remove-me');

for (const eliEsto of Eliminar) {
    eliEsto.remove();
}