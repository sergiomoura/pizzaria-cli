// FORMAS DE SELECIONAR ELEMENTOS DA PÁGINA
let campoDeBusca = document.getElementById("campo-de-busca");

/**
 * querySelector:
 * document.querySelector("#seletor .css");
 */
let btBuscar = document.querySelector(".btBuscar");

// Capturem o elemento main (pai de todos os articles)
let main = document.querySelector("main");

// CRIAR UM ELEMENTO E ADICIONAR AO FINAL DA MAIN
let pizzaDePepperoni = {
    "id": 2,
    "nome": "Pepperoni",
    "ingredientes": [
        "mussarela",
        "pepperoni",
        "cebola"
    ],
    "preco": 48.55,
    "img": "/img/pepperoni.jpg",
    "destaque": false,
    "score": 24
}

function showPizza(pizza){
    let article = document.createElement("article");

    article.innerHTML = `
        <img src="${pizza.img}" alt="${pizza.nome}">
        <h2>${pizza.nome}</h2>
        <span>R$ ${pizza.preco}</span>
        <a href="${pizza.id}">Ver mais</a>
        <button>Add+</button>
    `;

    main.appendChild(article);
}

showPizza(pizzaDePepperoni);

