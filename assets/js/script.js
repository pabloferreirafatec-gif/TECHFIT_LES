function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email.trim());
}

function validarSenha(senha) {
    const TAMANHO_MINIMO = 8;
    return senha.trim().length >= TAMANHO_MINIMO;
}

function exibirErro(input, elementoErro, mensagem) {
    const grupo = input.closest('.input-group');

    if (mensagem) {
        elementoErro.textContent = mensagem;
        grupo.classList.add('input-error');
    } else {
        elementoErro.textContent = '';
        grupo.classList.remove('input-error');
    }
}

function iniciarValidacaoLogin() {
    const form = document.getElementById('form-login');

    if (!form) {
        return;
    }

    const campoEmail = document.getElementById('email');
    const campoSenha = document.getElementById('senha');
    const erroEmail = document.getElementById('erro-email');
    const erroSenha = document.getElementById('erro-senha');

    function checarEmail() {
        if (campoEmail.value.trim() === '') {
            exibirErro(campoEmail, erroEmail, 'Informe seu e-mail.');
            return false;
        }

        if (!validarEmail(campoEmail.value)) {
            exibirErro(campoEmail, erroEmail, 'Informe um e-mail válido.');
            return false;
        }

        exibirErro(campoEmail, erroEmail, '');
        return true;
    }

    function checarSenha() {
        if (campoSenha.value.trim() === '') {
            exibirErro(campoSenha, erroSenha, 'Informe sua senha.');
            return false;
        }

        if (!validarSenha(campoSenha.value)) {
            exibirErro(campoSenha, erroSenha, 'A senha deve ter pelo menos 8 caracteres.');
            return false;
        }

        exibirErro(campoSenha, erroSenha, '');
        return true;
    }

    // Validação em tempo real ao sair do campo (evento "blur")
    campoEmail.addEventListener('blur', checarEmail);
    campoSenha.addEventListener('blur', checarSenha);

    // Limpa o erro assim que o usuário começa a corrigir o campo
    campoEmail.addEventListener('input', function () {
        if (erroEmail.textContent) checarEmail();
    });
    campoSenha.addEventListener('input', function () {
        if (erroSenha.textContent) checarSenha();
    });

    // Validação final ao enviar o formulário
    form.addEventListener('submit', function (evento) {
        const emailValido = checarEmail();
        const senhaValida = checarSenha();

        if (!emailValido || !senhaValida) {
            evento.preventDefault();
        }

        // Se ambos forem válidos, o formulário segue o fluxo normal
        // (por enquanto sem back-end de autenticação conectado).
    });
}

document.addEventListener('DOMContentLoaded', iniciarValidacaoLogin);



/**
 * Valida a força da senha para o CADASTRO (regras completas):
 * mínimo 8 caracteres, 1 minúscula, 1 maiúscula e 1 caractere especial.
 * @param {string} senha
 * @returns {{valido: boolean, mensagem: string}}*/
 
function validarSenhaForte(senha) {
    const TAMANHO_MINIMO = 8;
    const temMinuscula = /[a-z]/.test(senha);
    const temMaiuscula = /[A-Z]/.test(senha);
    const temEspecial = /[!@#$%^&*(),.?":{}|<>_\-+=]/.test(senha);

    if (senha.length < TAMANHO_MINIMO) {
        return { valido: false, mensagem: `A senha deve ter pelo menos ${TAMANHO_MINIMO} caracteres.` };
    }
    if (!temMinuscula) {
        return { valido: false, mensagem: 'A senha deve conter ao menos uma letra minúscula.' };
    }
    if (!temMaiuscula) {
        return { valido: false, mensagem: 'A senha deve conter ao menos uma letra maiúscula.' };
    }
    if (!temEspecial) {
        return { valido: false, mensagem: 'A senha deve conter ao menos um caractere especial (ex: !@#$%).' };
    }

    return { valido: true, mensagem: '' };
}

/**
 * Verifica se a senha e a confirmação de senha são iguais.
 * @param {string} senha
 * @param {string} confirmarSenha
 * @returns {boolean}
 */
function senhasConferem(senha, confirmarSenha) {
    return senha === confirmarSenha;
}

/**
 * Configura a validação do formulário de cadastro, seguindo o mesmo
 * padrão usado no login: valida ao sair do campo, limpa o erro enquanto
 * o usuário corrige, e valida tudo de novo ao enviar o formulário.
 */
function iniciarValidacaoCadastro() {
    const form = document.getElementById('form-cadastro');

    if (!form) {
        return;
    }

    const campoNome = document.getElementById('nome');
    const campoEmail = document.getElementById('email');
    const campoSenha = document.getElementById('senha');
    const campoConfirmarSenha = document.getElementById('confirmar-senha');
    const campoTermos = document.getElementById('termos');

    const erroNome = document.getElementById('erro-nome');
    const erroEmail = document.getElementById('erro-email');
    const erroSenha = document.getElementById('erro-senha');
    const erroConfirmarSenha = document.getElementById('erro-confirmar-senha');
    const erroTermos = document.getElementById('erro-termos');

    function checarNome() {
        if (campoNome.value.trim() === '') {
            exibirErro(campoNome, erroNome, 'Informe seu nome completo.');
            return false;
        }

        exibirErro(campoNome, erroNome, '');
        return true;
    }

    function checarEmail() {
        if (campoEmail.value.trim() === '') {
            exibirErro(campoEmail, erroEmail, 'Informe seu e-mail.');
            return false;
        }

        if (!validarEmail(campoEmail.value)) {
            exibirErro(campoEmail, erroEmail, 'Informe um e-mail válido.');
            return false;
        }

        exibirErro(campoEmail, erroEmail, '');
        return true;
    }

    function checarSenha() {
        const resultado = validarSenhaForte(campoSenha.value);
        exibirErro(campoSenha, erroSenha, resultado.mensagem);
        return resultado.valido;
    }

    function checarConfirmarSenha() {
        if (campoConfirmarSenha.value.trim() === '') {
            exibirErro(campoConfirmarSenha, erroConfirmarSenha, 'Confirme sua senha.');
            return false;
        }

        if (!senhasConferem(campoSenha.value, campoConfirmarSenha.value)) {
            exibirErro(campoConfirmarSenha, erroConfirmarSenha, 'As senhas não coincidem.');
            return false;
        }

        exibirErro(campoConfirmarSenha, erroConfirmarSenha, '');
        return true;
    }

    // O checkbox de termos não fica dentro de um .input-group,
    // então a mensagem é tratada à parte (sem exibirErro()).
    function checarTermos() {
        if (!campoTermos.checked) {
            erroTermos.textContent = 'Você precisa aceitar os termos para continuar.';
            return false;
        }

        erroTermos.textContent = '';
        return true;
    }

    campoNome.addEventListener('blur', checarNome);
    campoEmail.addEventListener('blur', checarEmail);
    campoSenha.addEventListener('blur', checarSenha);
    campoConfirmarSenha.addEventListener('blur', checarConfirmarSenha);
    campoTermos.addEventListener('change', checarTermos);

    campoNome.addEventListener('input', function () {
        if (erroNome.textContent) checarNome();
    });
    campoEmail.addEventListener('input', function () {
        if (erroEmail.textContent) checarEmail();
    });
    campoSenha.addEventListener('input', function () {
        if (erroSenha.textContent) checarSenha();
        // Se a confirmação já tinha sido validada, revalida junto,
        // já que ela depende diretamente do valor da senha.
        if (erroConfirmarSenha.textContent) checarConfirmarSenha();
    });
    campoConfirmarSenha.addEventListener('input', function () {
        if (erroConfirmarSenha.textContent) checarConfirmarSenha();
    });

    form.addEventListener('submit', function (evento) {
        const nomeValido = checarNome();
        const emailValido = checarEmail();
        const senhaValida = checarSenha();
        const confirmacaoValida = checarConfirmarSenha();
        const termosAceitos = checarTermos();

        if (!nomeValido || !emailValido || !senhaValida || !confirmacaoValida || !termosAceitos) {
            evento.preventDefault();
        }
    });
}

document.addEventListener('DOMContentLoaded', iniciarValidacaoCadastro);

function iniciarToggleSenha() {
    const botoes = document.querySelectorAll('.toggle-senha');

    botoes.forEach(function (botao) {
        botao.addEventListener('click', function () {
            const input = document.getElementById(botao.dataset.target);

            if (!input) {
                return;
            }

            const senhaOculta = input.type === 'password';

            input.type = senhaOculta ? 'text' : 'password';
            botao.textContent = senhaOculta ? '🙈' : '👁';
            botao.setAttribute('aria-label', senhaOculta ? 'Ocultar senha' : 'Mostrar senha');
        });
    });
}

document.addEventListener('DOMContentLoaded', iniciarToggleSenha);