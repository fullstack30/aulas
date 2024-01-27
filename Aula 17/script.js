/*const ITAU = function (conta, valor) {
    console.log("O valor com a taxa ficou " + valor * 1.1)
}

const BRADESCO = function (conta, valor) {
    console.log("O valor com a taxa ficou " + valor * 1.05)
}

const BACEN = {
    transacao: function (instituicao, conta, valor) {

       console.log("Iniciando transação...")

       instituicao(conta, valor);

       console.log("Outras coisas que interessão ao BACEN....");

       console.log("Transação concluida!");
        
    }
}

BACEN.transacao(ITAU, '011', 20);
BACEN.transacao(BRADESCO, '011', 20);
*/

let inputNome = document.getElementById('nome');
let inputNumero = document.getElementById('numero');
let inputValidade = document.getElementById('validade');

let cardNome = document.getElementById('card-nome');
let cardNumero = document.getElementById('card-numero');
let cardValidade = document.getElementById('card-validade');

inputNome.addEventListener('keyup', function (event) {
    cardNome.innerHTML = event.target.value
})

inputNumero.addEventListener('keyup', function (event) {
    cardNumero.innerHTML =  event.target.value
})

inputValidade.addEventListener('keyup', function (event) {
    cardValidade.innerHTML =  event.target.value
})
