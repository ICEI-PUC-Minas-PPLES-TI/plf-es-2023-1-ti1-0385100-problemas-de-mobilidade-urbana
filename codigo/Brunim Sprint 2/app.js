const formulario = document.getElementById('formulario');
		formulario.addEventListener('submit', function(evento) {
			evento.preventDefault();

			const usuario = {
				nome: formulario.nome.value,
				cep: formulario.cep.value,
				cidade: formulario.cidade.value,
				bairro: formulario.bairro.value,
				rua: formulario.rua.value,
				telefone: formulario.telefone.value
			};

			let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

			usuarios.push(usuario);

			localStorage.setItem('usuarios', JSON.stringify(usuarios));

			formulario.reset();

			alert('Usuário cadastrado com sucesso!');
            const btnApagarLocalStorage = document.getElementById('apagarLocalStorage');

btnApagarLocalStorage.addEventListener('click', function() {
    localStorage.clear();
    alert('Dados removidos com sucesso!');
});

		});