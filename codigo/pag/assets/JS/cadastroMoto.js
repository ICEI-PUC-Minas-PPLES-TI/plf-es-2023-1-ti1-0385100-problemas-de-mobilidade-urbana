// Salvar dados no Local Storage quando o formulário for enviado
document.getElementById('motoristaForm').addEventListener('submit', function (event) {
  event.preventDefault();

  var motorista = {
    nome: document.getElementById('nome').value,
    modelo_van: document.getElementById('modelo').value,
    condicao_van: document.getElementById('condicao').value,
    capacidade_van: parseInt(document.getElementById('capacidade').value),
    preco_servico: parseFloat(document.getElementById('preco').value),
    destino: document.getElementById('destino').value
  };

  var motoristas = JSON.parse(localStorage.getItem('motoristas')) || [];
  motoristas.push(motorista);

  localStorage.setItem('motoristas', JSON.stringify(motoristas));

  document.getElementById('motoristaForm').reset();
  updateMotoristasList();

  alert('Motorista cadastrado com sucesso!');
});

// Limpar dados do Local Storage quando o botão "Limpar Local Storage" for clicado
document.getElementById('limparLocalStorage').addEventListener('click', function () {
  localStorage.removeItem('motoristas');
  document.getElementById('motoristasList').innerHTML = '<h2>Motoristas Cadastrados:</h2>';
  alert('Dados do Local Storage removidos!');
});

document.getElementById('modificarLocalStorage').addEventListener('click', function () {
  var motorista = {
    nome: 'Maria Souza',
    modelo_van: 'Mercedes Sprinter',
    condicao_van: 'Excelente',
    capacidade_van: 12,
    preco_servico: 200.00,
    destino: 'PUC Minas Coração Eucarístico'
  };

  localStorage.setItem('motoristas', JSON.stringify([motorista]));
  updateMotoristasList();

  alert('Dados do Local Storage modificados!');
});

const btnIndex = document.getElementById('index')
btnIndex.addEventListener('click', function () {
  window.location.href = "index.html";
});