module.exports = (objetoParams) => {
    for (let propriedade in objetoParams) {
        //usando uma expressão orgular e um método teste, para testar se a propriedade tem no nome qualquer uma das strings Id ou id.
        if(/Id|id/.test(propriedade)) {
            objetoParams[propriedade] = Number(objetoParams[propriedade]);
        }
    }
    return objetoParams; 
}; 
