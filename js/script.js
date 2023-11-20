// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
const shoppingList = [
    "caramelle",
    "cioccolato",
    "focaccia",
    "pasta",
    "uova",
    "latte",
    "farina"
];


//richiamo ul
const wrapperElement = document.querySelector("ul");

let i = 0;

while (i < shoppingList.length) {
    
    // creo un li e lo popolo
    const listElement = document.createElement("li");  
    listElement.append(shoppingList[i]);
    //lo aggiungo al parent
    wrapperElement.appendChild(listElement);

    i++
}