const numero = 8;

if(estaNaSequencia(numero)){
    console.log("O número informado está na sequência de Fibonacci")
}else{
    console.log("O número informado não está na sequência de Fibonacci")
}

function estaNaSequencia(numero){
    let numeroAtual = 0, numeroAnterior =0, proximoNumero = 1;
    while(numeroAtual<=numero){

        if(numeroAtual==numero){
            return true;
        }

        proximoNumero = proximoNumero + numeroAtual;
        numeroAnterior = numeroAtual;
        numeroAtual = proximoNumero - numeroAnterior;
    }
    return false;
}