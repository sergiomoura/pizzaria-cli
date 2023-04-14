// 1 - Importar o express
const express = require('express');
const path = require('path');
const session = require('express-session');

const bloqueiaForaDeHora = require('./middlewares/bloqueiaForaDeHora');
const registraRequisicao = require('./middlewares/registraRequisicao');
const router = require('./router');
const routerApi = require('./routerApi');

// 2 - Criar o servidor
const servidor = express();
servidor.set('view engine','ejs');

// Setup do middleware que lida com sessions
servidor.use(session({
    secret: 'SEGREDO',
    resave: false,
    saveUninitialized: false
}))

// Define a pasta public como sendo a pasta arquivos estáticos
servidor.use(express.static(path.join(__dirname, 'public')));
servidor.use(express.urlencoded({ extended: false }));
servidor.use(express.json());

// Configurando middlewares
servidor.use(registraRequisicao);
// servidor.use(bloqueiaForaDeHora);

servidor.use(

    (req, res, next) => {
        if(req.session.admLogado){
            console.log("Administrador logado....");
        } else {
            console.log("Visita qualquer... ");
        }
        next();
    }

)
// 3 - Definir roteador a ser utilizado
servidor.use(router);
servidor.use('/api', routerApi);

// 4 - Por o servidor no modo "aguardando requisição"
servidor.listen(3000);