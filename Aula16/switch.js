
function calculadora(operacao) {
    let operacoesValidas = ['somar', 'subtrair', 'multiplicar'];

    if (!operacoesValidas.includes(operacao)) {
        return "Operação inválida"
    }
    
    if (operacao === 'somar') { 
        return 1+1; 
    } 
    
    if (operacao === 'subtrair') {
        return 2-1;
    }

    if ( operacao === 'multiplicar') {
        return 2*4;
    }
    
    if ( operacao === 'divir') {
        return 2/4;
    }

}

let resultado = calculadora('multiplicar');
console.log(resultado);



/*
switch (operacao) {
    case 'soma':
    case 'somar':
         console.log(1 + 1);
         break;
    case 0:
        break;
    case 'subtrair':
        console.log(2 - 1);
        break;
    default:
        console.log("Operação inválida!");
        break;
}
*/









