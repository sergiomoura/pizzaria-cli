const verificaSeLogado = (req, res, next) => {
    
    if(req.session.admLogado){
        next();
    } else {
        res.redirect('/adm/login');
    }
}

module.exports = verificaSeLogado;