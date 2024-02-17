
let cep = document.getElementById('input-cep');
let rua = document.getElementById('input-rua');
let bairro = document.getElementById('input-bairro');
let selectEstado = document.getElementById('select-estado');
let selectCidade = document.getElementById('select-cidade');

let url = 'https://viacep.com.br/ws';
let urlEstados = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
let urlCidades = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

cep.addEventListener('keyup', event => {
    let cepValue = event.target.value;

    if(cepValue.length !== 8){
        rua.value = '';
        bairro.value = '';
        return;
    }
    
    fetch(`${url}/${cepValue}/json`)
    .then(response => response.json())
    .then(json => {
        rua.value = json.logradouro;
        bairro.value = json.bairro;
    });

/*
    fetch(`${url}/${cepValue}/json`)
    .then(function (response) {
        return response.json();
    }).then(function (json) {
        console.log(json);
    })
*/
})

fetch(urlEstados)
.then(response => response.json())
.then(estados => {
    selectEstado.innerHTML = `<option></option>`;
    estados.forEach(item => {
        selectEstado.innerHTML += `<option value="${item.id}">${item.nome}</option>`;
    })
});

selectEstado.addEventListener('change', event => {
    fetch(`${urlCidades}/${event.target.value}/municipios`)
    .then(response => response.json())
    .then(cidades => {
        selectCidade.innerHTML = '<option><option>';
        let cidadeOptions = cidades.map(item => `<option>${item.nome}</option>`);
        selectCidade.innerHTML += cidadeOptions.join('');
    })
})



