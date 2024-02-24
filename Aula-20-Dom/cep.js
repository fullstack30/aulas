import { requestGET } from "./scripts/api.js";
import RenderSelectOptions from "./scripts/select-option.js";

let cep = document.getElementById("input-cep");
let rua = document.getElementById("input-rua");
let bairro = document.getElementById("input-bairro");
let selectEstado = document.getElementById("select-estado");
let selectCidade = document.getElementById("select-cidade");

let url = "https://viacep.com.br/ws";
let ulrEstado = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
let urlCidade = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

cep.addEventListener("keyup", (event) => {
  let cepValue = event.target.value;

  if (cepValue.length !== 8) {
    rua.value = "";
    bairro.value = "";
    return;
  }
  requestGET(`${url}/${cepValue}/json`, function (json) {
    rua.value = json.logradouro;
    bairro.value = json.bairro;
  });
});

requestGET(ulrEstado, function (estados) {
  selectEstado.innerHTML = RenderSelectOptions(estados, "id", "nome", true);
});

selectEstado.addEventListener("change", (event) => {
  urlCidade = `${urlCidade}/${event.target.value}/municipios`;
  requestGET(urlCidade, function (cidades) {
    selectCidade.innerHTML = RenderSelectOptions(cidades, "id", "nome", true);
  });
});
