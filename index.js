const inquirer = require("inquirer");
const tratarRespostas = require("./functions/tratarRespostas");
const opcoes = require("./menu/opcoes");
const perguntas = require("./menu/perguntas");

function startInquirer(){
    inquirer.prompt(perguntas).then(
        (respostas) => {
            switch (respostas.opcaoPrincipal) {
                case opcoes.principais.usuarios:
                    tratarRespostas.usuarios(respostas);
                break;

                case opcoes.principais.pizzas:
                    tratarRespostas.pizzas(respostas);
                break;

                case opcoes.principais.pedidos:
                    tratarRespostas.pedidos(respostas);
                break;
            
                default:
                    break;
            }
            startInquirer();
        }
    )
}

console.clear();
startInquirer();