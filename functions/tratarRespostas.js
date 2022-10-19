const UsuariosServices = require("../services/UsuariosServices");
const box = require('./box');
const opcoes = require("../menu/opcoes");

const tratarRespostas = {
    usuarios: (respostas) => {
    
        let dados;

        switch (respostas.acoesDeUsuarios) {
            case opcoes.usuarios.listar:
                console.clear();
                UsuariosServices.listar()
            break;

            case opcoes.usuarios.cadastrar:
                dados = {
                    nome: respostas.nomeUsuario,
                    email: respostas.emailUsuario,
                    senha: respostas.senhaUsuario,
                    endereco: respostas.endereco
                }
                UsuariosServices.cadastrar(dados);
                console.clear();
                box(`${dados.nome} cadastrado com sucesso!`);
            break;
            
            case opcoes.usuarios.detalhar:
                console.clear();
                UsuariosServices.detalhar(respostas.idUsuario);
            break;
            
            case opcoes.usuarios.remover:
                UsuariosServices.remover(respostas.idUsuario);
                console.clear();
                box('Usuário removido com sucesso!');
            break;

            case opcoes.usuarios.alterar:
                dados = {
                    nome: respostas.nomeUsuario,
                    email: respostas.emailUsuario,
                    senha: respostas.senhaUsuario,
                };
                UsuariosServices.alterar(dados, respostas.idUsuario);
                console.clear();
                box(`Usuário ${respostas.nomeUsuario} alterado com sucesso!`);
            break;

            case opcoes.usuarios.addEndereco:
                UsuariosServices.addEndereco(respostas.endereco, respostas.idUsuario);
                console.clear();
                box(`Endereço adicionado!`);
            break;

            case opcoes.usuarios.alterarEndereco:
                UsuariosServices.alteraEndereco(respostas.posEndereco, respostas.endereco, respostas.idUsuario);
                console.clear();
                box(`Endereço alterado!`);
            break;
            
            case opcoes.usuarios.removerEndereco:
                UsuariosServices.removerEndereco(respostas.posEndereco, respostas.idUsuario);
                console.clear();
                box("Endereço removido!");
            break;
            
            case opcoes.usuarios.addFormaDePagamento:
                UsuariosServices.addFormaDePagamento(respostas.formaDePagamento, respostas.idUsuario);
                console.clear();
                box("Forma de pagamento cadastrada com sucesso!");
            break;

            case opcoes.usuarios.removerFormaDePagamento:
                UsuariosServices.removerFormaDePagamento(respostas.posFormaDePagamento, respostas.idUsuario);
                console.clear();
                box("Forma de pagamento removida com sucesso!");
            break;

            case opcoes.usuarios.alterarFormaDePagamento:
                UsuariosServices.alterarFormaDePagamento(respostas.formaDePagamento, respostas.posFormaDePagamento, respostas.idUsuario);
                console.clear();
                box("Forma de pagamento alterada com sucesso!");
            break;

            default:
                break;
        }
    },
    pizzas: (respostas) => {
        box("Sessão de gerenciamento de pizzas ainda não implementada", true);
    },
    pedidos: (respostas) => {
        box("Sessão de gerenciamento de pedidos ainda não implementada", true);
    }
}

module.exports = tratarRespostas;