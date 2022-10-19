const loadUsuarios = () => require('../databases/usuarios.json');

const opcoes = require('./opcoes')

const perguntas = [
    {
        name:"opcaoPrincipal",
        type:"list",
        message:"O que deseja gerenciar?",
        choices: Object.values(opcoes.principais)
    },
    {
        name: "acoesDeUsuarios",
        type: "list",
        message : "O que deseja realizar com os usuários?",
        choices: Object.values(opcoes.usuarios),
        when: respostas => respostas.opcaoPrincipal === opcoes.principais.usuarios
    },
    {
        name: "idUsuario",
        type: "list",
        message: "Selecione usuário:",
        choices: loadUsuarios().map(u => `${u.id} - ${u.nome}`),
        filter: input => input.substring(0, input.indexOf(' - ')),
        when: respostas =>{
            let ehDetalhar = respostas.acoesDeUsuarios == opcoes.usuarios.detalhar;
            let ehRemover = respostas.acoesDeUsuarios == opcoes.usuarios.remover;
            let ehAlterar = respostas.acoesDeUsuarios == opcoes.usuarios.alterar;
            let ehAddEndereco = respostas.acoesDeUsuarios == opcoes.usuarios.addEndereco;
            let ehAlterarEndereco = respostas.acoesDeUsuarios == opcoes.usuarios.alterarEndereco;
            let ehRemoverEndereco = respostas.acoesDeUsuarios == opcoes.usuarios.removerEndereco;
            let ehAddFormaDePagamento = respostas.acoesDeUsuarios == opcoes.usuarios.addFormaDePagamento;
            let ehRemoverFormaDePagamento = respostas.acoesDeUsuarios == opcoes.usuarios.removerFormaDePagamento;
            let ehAlterarFormaDePagamento = respostas.acoesDeUsuarios == opcoes.usuarios.alterarFormaDePagamento;

            return ehDetalhar || ehRemover || ehAlterar || ehAddEndereco || ehAlterarEndereco || ehRemoverEndereco || ehAddFormaDePagamento || ehRemoverFormaDePagamento || ehAlterarFormaDePagamento

        }
    },
    {
        name: "nomeUsuario",
        message: "Nome:",
        type: "input",
        when: respostas => {
            return respostas.acoesDeUsuarios == opcoes.usuarios.cadastrar || respostas.acoesDeUsuarios == opcoes.usuarios.alterar
        }
    },
    {
        name: "emailUsuario",
        message: "E-mail:",
        type: "input",
        when: respostas => {
            return respostas.acoesDeUsuarios == opcoes.usuarios.cadastrar || respostas.acoesDeUsuarios == opcoes.usuarios.alterar
        }
    },
    {
        name: "senhaUsuario",
        message: "Senha:",
        type: "password",
        when: respostas => {
            return respostas.acoesDeUsuarios == opcoes.usuarios.cadastrar || respostas.acoesDeUsuarios == opcoes.usuarios.alterar
        }
    },
    {
        name: "posEndereco",
        message: "Selecione o endereço:",
        type: "list",
        choices: (respostas) => {
            let idUsuarioEscolhido = respostas.idUsuario;
            let enderecos = loadUsuarios().find( u => u.id == idUsuarioEscolhido).enderecos;
            return enderecos.length == 0 ?  [`0 - Nenhum endereço cadastrado`] : enderecos.map((e,i)=>`${i + 1} - ${e}`);
        },
        filter: input => 1*input.substring(0, input.indexOf(' - ')) - 1,
        when: respostas => respostas.acoesDeUsuarios == opcoes.usuarios.alterarEndereco || respostas.acoesDeUsuarios == opcoes.usuarios.removerEndereco
    },
    {
        name: "endereco",
        message: "Digite o endereço:",
        type: "input",
        when: respostas => {
            let ehCadastro = respostas.acoesDeUsuarios == opcoes.usuarios.cadastrar;
            let ehAddEndereco = respostas.acoesDeUsuarios == opcoes.usuarios.addEndereco;
            let ehAlterarEndereco = respostas.acoesDeUsuarios == opcoes.usuarios.alterarEndereco;
            return ehCadastro || ehAddEndereco || ehAlterarEndereco
        }
    },
    {
        name: "posFormaDePagamento",
        message: "Selecione a forma de pagamento:",
        type: "list",
        choices: (respostas) => {
            let idUsuarioEscolhido = respostas.idUsuario;
            let formasDePagamento = loadUsuarios().find( u => u.id == idUsuarioEscolhido).formasDePagamento;
            return formasDePagamento.length == 0 ? [`0 - Nenhuma forma de pagamento cadastrada`] : formasDePagamento.map((e,i)=>`${i + 1} - ${e}`);
        },
        filter: input => 1*input.substring(0, input.indexOf(' - ')) - 1,
        when: respostas => respostas.acoesDeUsuarios == opcoes.usuarios.alterarFormaDePagamento || respostas.acoesDeUsuarios == opcoes.usuarios.removerFormaDePagamento
    },
    {
        name: "formaDePagamento",
        message: "Digite o número do cartão de crédito: ",
        type: "input",
        when: respostas => respostas.acoesDeUsuarios == opcoes.usuarios.alterarFormaDePagamento || respostas.acoesDeUsuarios == opcoes.usuarios.addFormaDePagamento
    }

]

module.exports = perguntas;