// Função para obter o valor de um parâmetro da URL
function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

// Captura o valor da variável 'user'
const userValue = getQueryParam("user");

// Verifica se o parâmetro existe e exibe o alerta
if (userValue !== null) {
  alert("Valor da variável 'user': " + userValue);
} else {
  alert("Parâmetro 'user' não encontrado na URL.");
}
