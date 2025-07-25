//criando uma helper function 
//simula uma validação de cpf 


module.exports = (cpf) => {
    if(cpf.length !== 11) return false; 
    return true; 
}; 
