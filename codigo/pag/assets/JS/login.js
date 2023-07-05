window.document.onload = () => { preloadData(); }

function preloadData() {
    if (localStorage.getItem('motoristas') == null) {
        const basedados = {
            motoristas: [
                {
                    id: 1,
                    nome: "João da Silva",
                    modelo_van: "Mercedes Sprinter",
                    condicao_van: "Excelente",
                    capacidade_van: 12,
                    preco_servico: 200.00,
                    destino: "PUC Minas Coração Eucarístico"
                }
            ]
        };
    } else {
        const basedados = JSON.parse(localStorage.getItem('motoristas')); // Obter dados do Local Storage
    }
}

const botaoCadastroMotorista = document.getElementById('botaoCadastroMotorista');
botaoCadastroMotorista.addEventListener('click', function () {
    window.location.href = "cadastroMoto.html";
});

const botaoCadastroUsuario = document.getElementById('botaoCadastroUsuario');
botaoCadastroUsuario.addEventListener('click', function () {
    window.location.href = "cadastroUser.html";
});

function login() {
    const email = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    console.log('teste');
    console.log(email);
    console.log(senha);
    let achou = false;

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    for (let i = 0; i < usuarios.length; i++) {
        if ((email == usuarios[i].nome) && (senha == usuarios[i].senha)) {
            achou = true;
        }
    }
    if (achou) {
        alert('Login realizado com sucesso!');
        window.location.href = "index.html";
    } else {
        alert('Email ou senha incorretos!');
    }

}

const botaoLogin = document.getElementById('botaoLogin')
botaoLogin.addEventListener('click', e => { e.preventDefault(); login(); });