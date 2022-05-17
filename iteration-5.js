function rollDice(numCaras){
    let resultado = Math.ceil(Math.random() * numCaras);
    return resultado;
}


console.log("rollDice 6", rollDice(6)) ;
