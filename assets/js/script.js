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

/**
 * Mapa de código de erro (enviado pelo PHP na URL) -> campo e mensagem
 * a serem exibidos. Os códigos são os mesmos usados em
 * processa-cadastro.php e processa-login.php.
 */
const MENSAGENS_ERRO_SERVIDOR = {
    'nome': { campo: 'nome', texto: 'Informe seu nome completo.' },
    'email': { campo: 'email', texto: 'Informe um e-mail válido.' },
    'email-duplicado': { campo: 'email', texto: 'Este e-mail já está cadastrado.' },
    'senha-fraca': { campo: 'senha', texto: 'A senha não atende aos requisitos mínimos.' },
    'senha-diferente': { campo: 'confirmar-senha', texto: 'As senhas não coincidem.' },
    'termos': { campo: 'termos', texto: 'Você precisa aceitar os termos para continuar.' },
    'campos-vazios': { campo: 'email', texto: 'Preencha e-mail e senha.' },
    'credenciais': { campo: 'senha', texto: 'E-mail ou senha incorretos.' },
};

/**
 * Depois que o PHP redireciona de volta pra página com "?erro=algo",
 * lê esse parâmetro e mostra a mensagem no mesmo padrão visual usado
 * pela validação em JS (reaproveita exibirErro()).
 */
function exibirErroDoServidor() {
    const parametros = new URLSearchParams(window.location.search);
    const codigoErro = parametros.get('erro');
    const detalhe = MENSAGENS_ERRO_SERVIDOR[codigoErro];

    if (!detalhe) {
        return;
    }

    // O checkbox de termos não fica dentro de um .input-group,
    // então não passa por exibirErro() (que espera um .input-group).
    if (detalhe.campo === 'termos') {
        const erroTermos = document.getElementById('erro-termos');
        if (erroTermos) {
            erroTermos.textContent = detalhe.texto;
        }
        return;
    }

    const input = document.getElementById(detalhe.campo);
    const elementoErro = document.getElementById('erro-' + detalhe.campo);

    if (input && elementoErro) {
        exibirErro(input, elementoErro, detalhe.texto);
    }
}

/**
 * Repreenche nome/e-mail com o que o usuário já tinha digitado
 * (o PHP devolve esses dois campos na URL para não perdê-los).
 * A senha nunca volta, por segurança.
 */
function preencherCamposDoServidor() {
    const parametros = new URLSearchParams(window.location.search);
    const nome = parametros.get('nome');
    const email = parametros.get('email');

    const campoNome = document.getElementById('nome');
    const campoEmail = document.getElementById('email');

    if (campoNome && nome) {
        campoNome.value = nome;
    }
    if (campoEmail && email) {
        campoEmail.value = email;
    }
}

/**
 * Mostra a mensagem de sucesso no login após um cadastro concluído
 * (processa-cadastro.php redireciona para login.html?cadastro=sucesso).
 */
function exibirSucessoDoServidor() {
    const parametros = new URLSearchParams(window.location.search);
    const mensagem = document.getElementById('mensagem-sucesso');

    if (parametros.get('cadastro') === 'sucesso' && mensagem) {
        mensagem.textContent = 'Cadastro realizado com sucesso! Faça login para continuar.';
        mensagem.classList.add('visivel');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    preencherCamposDoServidor();
    exibirErroDoServidor();
    exibirSucessoDoServidor();
});


// Mapeia o valor salvo no banco (em português, sem acento) para a classe
// CSS já usada nas tags de nível (definida em inglês no components.css).
const CLASSE_CSS_POR_NIVEL = {
    iniciante: 'beginner',
    intermediario: 'intermediate',
    avancado: 'advanced',
};

const NOME_EXIBICAO_NIVEL = {
    iniciante: 'Iniciante',
    intermediario: 'Intermediário',
    avancado: 'Avançado',
};

/**
 * Monta o HTML de um card de exercício a partir dos dados vindos da API.
 * Mantém a mesma estrutura/classes que o layout já usava, só que gerada
 * dinamicamente em vez de fixa no HTML.
 * @param {object} exercicio
 * @returns {string}
 */
function montarCardExercicio(exercicio) {
    const classeNivel = CLASSE_CSS_POR_NIVEL[exercicio.nivel] || '';
    const nomeNivel = NOME_EXIBICAO_NIVEL[exercicio.nivel] || exercicio.nivel;

    return `
        <section class="exercise-card">
            <img src="../assets/img/${exercicio.imagem}" alt="${exercicio.nome}" class="exercise-image">
            <section class="exercise-info">
                <h3>${exercicio.nome}</h3>
                <section class="exercise-tags">
                    <section class="tag muscle">${exercicio.grupo_muscular}</section>
                    <section class="tag ${classeNivel}">${nomeNivel}</section>
                </section>
                <p>${exercicio.descricao}</p>
                <button
                    type="button"
                    class="btn-add-treino"
                    data-id="${exercicio.id}"
                    data-peso-corporal="${exercicio.peso_corporal ? '1' : '0'}">
                    + Adicionar à lista de treino
                </button>
            </section>
            <section class="exercise-arrow">›</section>
        </section>
    `;
}

/**
 * Busca os exercícios na API (com filtro opcional de nível) e renderiza
 * os cards dentro de #lista-exercicios.
 * @param {string} nivel - 'todos', 'iniciante', 'intermediario' ou 'avancado'
 */
async function carregarExercicios(nivel) {
    const lista = document.getElementById('lista-exercicios');

    if (!lista) {
        return;
    }

    lista.innerHTML = '<p class="exercise-loading">Carregando exercícios...</p>';

    try {
        const url = nivel && nivel !== 'todos'
            ? `../assets/php/exercicios-api.php?nivel=${encodeURIComponent(nivel)}`
            : '../assets/php/exercicios-api.php';

        const resposta = await fetch(url);
        const exercicios = await resposta.json();

        if (!Array.isArray(exercicios) || exercicios.length === 0) {
            lista.innerHTML = '<p class="exercise-loading">Nenhum exercício encontrado para esse filtro.</p>';
            return;
        }

        lista.innerHTML = exercicios.map(montarCardExercicio).join('');
    } catch (erro) {
        lista.innerHTML = '<p class="exercise-loading">Não foi possível carregar os exercícios. Tente novamente.</p>';
    }
}

/**
 * Liga os botões de filtro (Todos/Iniciante/Intermediário/Avançado)
 * e carrega a lista inicial (sem filtro) ao entrar na página.
 */
function iniciarFiltrosExercicios() {
    const filtros = document.querySelectorAll('.exercise-filters .filter');

    if (filtros.length === 0) {
        return;
    }

    filtros.forEach(function (botao) {
        botao.addEventListener('click', function () {
            filtros.forEach(function (b) { b.classList.remove('active'); });
            botao.classList.add('active');
            carregarExercicios(botao.dataset.nivel);
        });
    });

    carregarExercicios('todos');
}

/**
 * Liga o modal de "adicionar à lista de treino": abre ao clicar em
 * qualquer .btn-add-treino (delegação de evento, já que os cards são
 * gerados dinamicamente), esconde o campo de carga para exercícios de
 * peso corporal, e envia o formulário para a API via fetch.
 */
function iniciarListaDeTreino() {
    const lista = document.getElementById('lista-exercicios');
    const modal = document.getElementById('modal-treino');

    if (!lista || !modal) {
        return;
    }

    const form = document.getElementById('form-treino');
    const campoExercicioId = document.getElementById('modal-exercicio-id');
    const campoSeries = document.getElementById('modal-series');
    const campoRepeticoes = document.getElementById('modal-repeticoes');
    const campoCarga = document.getElementById('modal-carga');
    const wrapperCarga = document.getElementById('modal-carga-wrapper');
    const erroModal = document.getElementById('modal-erro');
    const titulo = document.getElementById('modal-titulo');
    const botaoFechar = document.getElementById('modal-fechar');

    function abrirModal(botao) {
        const card = botao.closest('.exercise-card');
        const nomeExercicio = card ? card.querySelector('h3').textContent : 'exercício';
        const pesoCorporal = botao.dataset.pesoCorporal === '1';

        form.reset();
        erroModal.textContent = '';
        campoExercicioId.value = botao.dataset.id;
        titulo.textContent = 'Adicionar: ' + nomeExercicio;

        // Exercício de peso corporal não pede carga (ex: flexão, prancha)
        wrapperCarga.style.display = pesoCorporal ? 'none' : 'block';
        campoCarga.required = !pesoCorporal;

        modal.classList.add('aberto');
    }

    function fecharModal() {
        modal.classList.remove('aberto');
    }

    lista.addEventListener('click', function (evento) {
        const botao = evento.target.closest('.btn-add-treino');
        if (botao) {
            abrirModal(botao);
        }
    });

    botaoFechar.addEventListener('click', fecharModal);

    // Fecha ao clicar fora da caixa (no fundo escurecido)
    modal.addEventListener('click', function (evento) {
        if (evento.target === modal) {
            fecharModal();
        }
    });

    form.addEventListener('submit', async function (evento) {
        evento.preventDefault();

        const corpo = {
            exercicio_id: campoExercicioId.value,
            series: campoSeries.value,
            repeticoes: campoRepeticoes.value,
            carga: wrapperCarga.style.display === 'none' ? null : campoCarga.value,
        };

        try {
            const resposta = await fetch('../assets/php/lista-treino-api.php', {
                method: 'POST',
                credentials: 'same-origin',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(corpo),
            });

            const dados = await resposta.json();

            if (!resposta.ok) {
                erroModal.textContent = dados.erro || 'Não foi possível adicionar o exercício.';
                return;
            }

            fecharModal();
            alert('Exercício adicionado à sua lista de treino!');
        } catch (erro) {
            erroModal.textContent = 'Erro de conexão. Tente novamente.';
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    iniciarFiltrosExercicios();
    iniciarListaDeTreino();
});