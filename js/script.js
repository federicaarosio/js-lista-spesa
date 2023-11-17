// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
const shoppingList = [
    "caramelle",
    "cioccolato",
    "focaccia",
    "pasta"
];


let i = 0;

//richiamo ul
const wrapperElement = document.querySelector("main ul");

while (i < shoppingList.length) {
    
    console.log(shoppingList[i]);
    let generatedList = shoppingList[i];

    const listElement = document.createElement("li");    
    wrapperElement.appendChild(listElement);

    listElement.innerHTML = (generatedList);

    i++
}

