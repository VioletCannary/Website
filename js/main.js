let ul = document.querySelector('nav .ul');
const formContato = document.getElementById('form-contato');
const mensagemSucesso = document.getElementById('mensagem-sucesso');
const sobretela = document.getElementById('sobretela');
const fecharSobretela = document.getElementById('fechar-sobretela');
const erroNome = document.getElementById('erro-nome');
const erroEmail = document.getElementById('erro-email');
const erroAssunto = document.getElementById('erro-assunto');
const erroMensagem = document.getElementById('erro-mensagem');

function openMenu() {
    ul.classList.add('open');
}

function closeMenu() {
    ul.classList.remove('open');
}

formContato.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Validação básica (adicione mais validações conforme necessário)
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validação do email (primeiro)
    if (!email.includes('@')) {
        erroEmail.textContent = 'Por favor, inclua um "@" no endereço de e-mail.';
        erroEmail.style.display = 'block';
        return;
    } else {
        erroEmail.style.display = 'none';
    }

    // Validação dos campos vazios (depois da validação do email)
    if (nome.trim() === '') {
        erroNome.textContent = 'Por favor, preencha o campo Nome.';
        erroNome.style.display = 'block';
        return;
    } else {
        erroNome.style.display = 'none';
    }

    if (assunto.trim() === '') {
        erroAssunto.textContent = 'Por favor, preencha o campo Assunto.';
        erroAssunto.style.display = 'block';
        return;
    } else {
        erroAssunto.style.display = 'none';
    }

    if (mensagem.trim() === '') {
        erroMensagem.textContent = 'Por favor, preencha o campo Mensagem.';
        erroMensagem.style.display = 'block';
        return;
    } else {
        erroMensagem.style.display = 'none';
    }

    // Aqui você pode implementar a lógica para enviar os dados do formulário para o servidor
    // Exemplo simples:
    mensagemSucesso.textContent = 'Mensagem enviada com sucesso!';
    sobretela.style.display = 'flex'; 

    // Limpa o formulário após o envio
    formContato.reset();
});

fecharSobretela.addEventListener('click', function() {
    sobretela.style.display = 'none';
});