const registraRequisicao = (req, res, next)=>{
    console.log(`${req.ip} - ${(new Date()).toISOString()} - ${req.url}`);
    next();
}

module.exports = registraRequisicao;