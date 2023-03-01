const faturamentoPorEstado = [
{"estado":"SP","valor":67836.43},
{"estado":"RJ", "valor":36678.66},
{"estado":"MG","valor":29229.88},
{"estado":"ES","valor":27165.48},
{"estado":"Outros","valor":19849.53}
]

const faturamentoTotal = faturamentoPorEstado.reduce((faturamentoTotal, estado) => faturamentoTotal + estado.valor, 0)

faturamentoPorEstado.forEach((estado) => {
    estado.percentual = (estado.valor * 100 / faturamentoTotal).toFixed(2)
    estado.percentual = `${estado.percentual}%`
})

console.table(faturamentoPorEstado)