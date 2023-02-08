// FORMAS DE SELECIONAR ELEMENTOS DA PÁGINA
const campoDeBusca = document.getElementById("campo-de-busca");
const btBuscar = document.querySelector(".btBuscar");
const main = document.querySelector("main");

let pizzas = []

// FUNÇÕES QUE MANIPULAM A DOM - - - - - - - -
function showPizza(pizza){
    let article = document.createElement("article");

    article.innerHTML = `
        <img src="${pizza.img}" alt="${pizza.nome}">
        <h2>${pizza.nome}</h2>
        <span>${pizza.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
        <a href="/pizzas/${pizza.id}">Ver mais</a>
        <button>Add+</button>
    `;

    main.appendChild(article);
}

function showPizzas(pizzas){

    // Limpando o elemento main
    main.innerHTML = '';

    // Forma 1: Elegante, linda e gatinha
    pizzas.forEach(showPizza);

}

// FUNÇÕES AUXILIARES -------------------------
function filtrarPizzas(pizzas, trechoBuscado){
    let pizzasFiltradas = pizzas.filter(
        pizza => pizza.nome.toUpperCase().includes(trechoBuscado.toUpperCase())
    );
    return pizzasFiltradas;
}

async function carregaPizzas(){
    let response = await fetch('/api/pizzas');
    pizzas = await response.json();
    showPizzas(pizzas);
}

// FUNÇÕES DE ASSOCIAÇÃO DE EVENTOS------------
function onCampoDeBuscaKeyup(){
    
    // Capturar o trecho buscado pelo usuário
    const trechoBuscado = campoDeBusca.value;

    // Criar um array com as pizzas filtradas
    const pizzasFiltradas = filtrarPizzas(pizzas, trechoBuscado);

    // Mostrar as pizzas filtradas
    showPizzas(pizzasFiltradas);

}

// COMANDOS DE INICIALIZAÇÃO DA PÁGINA --------
campoDeBusca.addEventListener('keyup', onCampoDeBuscaKeyup);
carregaPizzas();

