const bloqueiaForaDeHora = (req, res, next) => {
    
    let hora = (new Date()).getHours();

    if(hora <= 10) {
        res.send("Volte mais tarde");
        // res.render('fora-de-hora.ejs'); // Aconselhável!
    } else {
        next();
    }
}

module.exports = bloqueiaForaDeHora;


// Criar middleware bloqueiaForaDeHora
// Verificar se hora é maior que 0 e menor ou igual a 18
// Nesse caso, mandar mensagem de "Volte mais tarde"
// Caso contrário, deixar req ir adiante...