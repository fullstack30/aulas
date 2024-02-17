
let carro = {
    cor: 'Rosa choque',
    ano: 2045,
    ligado: true,
    velocidade: 0,
    cavalo: 1.5,
    acoes: {
        acelerar: function () {
            return 'Carro desligado!';
        },

        freiar: function (p1) {
            return 'Iiiiii';
        }
    }
}

console.log(carro.acelerar(configuracoesDaStrada));