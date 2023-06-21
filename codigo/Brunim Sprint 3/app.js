src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
 src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"
   src ="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"

    // Salvar dados no Local Storage quando o formulário for enviado
    document.getElementById('motoristaForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      var motorista = {
        nome: document.getElementById('nome').value,
        modelo_van: document.getElementById('modelo').value,
        condicao_van: document.getElementById('condicao').value,
        capacidade_van: parseInt(document.getElementById('capacidade').value),
        preco_servico: parseFloat(document.getElementById('preco').value)
      };
      
      var motoristas = JSON.parse(localStorage.getItem('motoristas')) || [];
      motoristas.push(motorista);
      
      localStorage.setItem('motoristas', JSON.stringify(motoristas));
      
      document.getElementById('motoristaForm').reset();
      updateMotoristasList();
      
      alert('Motorista cadastrado com sucesso!');
    });
    
    // Limpar dados do Local Storage quando o botão "Limpar Local Storage" for clicado
    document.getElementById('limparLocalStorage').addEventListener('click', function() {
      localStorage.removeItem('motoristas');
      document.getElementById('motoristasList').innerHTML = '<h2>Motoristas Cadastrados:</h2>';
      alert('Dados do Local Storage removidos!');
    });
    
    document.getElementById('modificarLocalStorage').addEventListener('click', function() {
      var motorista = {
        nome: 'Maria Souza',
        modelo_van: 'Mercedes Sprinter',
        condicao_van: 'Excelente',
        capacidade_van: 12,
        preco_servico: 200.00
      };
      
      localStorage.setItem('motoristas', JSON.stringify([motorista]));
      updateMotoristasList();
      
      alert('Dados do Local Storage modificados!');
    });
    
    // Atualizar a lista de motoristas na página
    function updateMotoristasList() {
      var motoristas = JSON.parse(localStorage.getItem('motoristas')) || [];
      
      var motoristasList = document.getElementById('motoristasList');
      motoristasList.innerHTML = '<h2>Motoristas Cadastrados:</h2>';
      
      motoristas.forEach(function(motorista, index) {
        var motoristaCard = document.createElement('div');
        motoristaCard.classList.add('motorista-card');
        motoristaCard.innerHTML = `
          <h3>Motorista ${index + 1}</h3>
          <p><strong>Nome:</strong> ${motorista.nome}</p>
          <p><strong>Modelo da Van:</strong> ${motorista.modelo_van}</p>
          <p><strong>Condição da Van:</strong> ${motorista.condicao_van}</p>
          <p><strong>Capacidade da Van:</strong> ${motorista.capacidade_van}</p>
          <p><strong>Preço do Serviço:</strong> R$ ${motorista.preco_servico.toFixed(2)}</p>
        `;
        
        motoristasList.appendChild(motoristaCard);
      });
    }
    
    // Chamar a função de atualização ao carregar a página
    updateMotoristasList();