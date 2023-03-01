const texto = 'socorram me subi no onibus em marrocos '
const textoReverso = reverter(texto.toLowerCase())
console.log(textoReverso)

function reverter(texto){
    const tamanho = texto.length
    let revertido = ''
    for(let i=tamanho-1; i>=0; i--){
        revertido += texto[i];
    }

    return revertido
}