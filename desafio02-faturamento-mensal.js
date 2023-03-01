const faturamentos = require("./dados.json");
let diasFaturados =0, valorTotal = 0, menorValor=0, maiorValor = 0

for(faturamento of faturamentos){
    if(faturamento.valor>0){
        diasFaturados++
        valorTotal += faturamento.valor
        menorValor = recuperarMenorValor(faturamento.valor)
        maiorValor = recuperarMaiorValor(faturamento.valor)
    }
}

const media = valorTotal / diasFaturados;
const faturamentosAcimaDaMedia = faturamentos.filter(faturamento => faturamento.valor > media)

console.log(`
Menor valor de faturamento: ${menorValor}
Maior valor de faturamento: ${maiorValor}
Número de dias com faturamento acima da média: ${faturamentosAcimaDaMedia.length} dias
`)

function recuperarMenorValor(valor){
    return menorValor==0 ? valor : valor < menorValor ? valor : menorValor
}

function recuperarMaiorValor(valor){
    return valor > maiorValor ? valor : maiorValor
}