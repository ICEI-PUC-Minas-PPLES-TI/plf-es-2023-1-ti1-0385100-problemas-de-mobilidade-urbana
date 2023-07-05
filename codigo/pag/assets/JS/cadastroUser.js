const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function (evento) {
	evento.preventDefault();

	const usuario = {
		nome: formulario.nome.value,
		cep: formulario.cep.value,
		cidade: formulario.cidade.value,
		bairro: formulario.bairro.value,
		rua: formulario.rua.value,
		telefone: formulario.telefone.value,
		senha: formulario.senha.value,
	};

	let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

	usuarios.push(usuario);

	localStorage.setItem('usuarios', JSON.stringify(usuarios));

	formulario.reset();

	alert('Usuário cadastrado com sucesso!');

	window.location.href = "login.html";
});