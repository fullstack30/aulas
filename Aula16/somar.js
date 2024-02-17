function soma_impar(numero){
    console.log({numero})
    console.log(numero % 1)
    if(typeof numero !== "number" || numero % 1 !== 0 || numero<0){
        return 'Função aceita apenas números inteiros positivos.'
    }

    let soma=0;

    for (let i = 1; i <= numero; i+=2) {
        soma+=i;
    }
    return soma;
}

soma_impar(10); 
soma_impar(0); 
soma_impar(1); 
soma_impar(2); 
soma_impar(3); 
soma_impar(-10); 
soma_impar(1.5); 
soma_impar("10"); 
soma_impar("texto"); 
soma_impar(undefined); 
soma_impar(null); 
