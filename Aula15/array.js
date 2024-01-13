
let produtos = ["Iphone", "Nike", "Xilito", "Outro Item"]

// for(let indice = 0; indice < produtos.length; indice++) {
//     console.log(produtos[indice])
// }

// e como apresentar o array de forma invertida?

// let produtos = ["Iphone", "Nike", "Xilito", "Outro Item"]

for(let indice = (produtos.length-1); indice >= 0; indice--) {
    console.log(produtos[indice])
}

// ou também:

console.log(produtos.reverse())