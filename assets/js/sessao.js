function estaDentroDePages() {
    return window.location.pathname.includes('/pages/');
}

function caminhoPagina(destino) {
    return estaDentroDePages() ? destino : 'pages/' + destino;
}

function caminhoAsset(destino) {
    return estaDentroDePages() ? '../assets/' + destino : 'assets/' + destino;
}

/**
 * Pergunta ao servidor se o usuário está logado.
 * Em caso de falha de rede, trata como "deslogado" em vez de travar a
 * página — é a opção mais segura (nunca mostra área restrita por engano).
 */
async function buscarSessao() {
    try {
        const resposta = await fetch(caminhoAsset('php/sessao-api.php'), {
            credentials: 'same-origin',
        });

        if (!resposta.ok) {
            return { logado: false };
        }

        return await resposta.json();
    } catch (erro) {
        return { logado: false };
    }
}

function renderizarHeaderDeslogado(container) {
    container.innerHTML = `
        <a href="${caminhoPagina('login.html')}" class="btn btn-outline">Entrar</a>
        <a href="${caminhoPagina('cadastro.html')}" class="btn btn-primary">Começar agora</a>
    `;
}

function renderizarHeaderLogado(container, nome) {
    container.innerHTML = `
        <span class="header-user-name">Olá, ${nome}</span>
        <a href="${caminhoPagina('perfil.html')}" class="user-button">
            <img src="${caminhoAsset('img/icon_user.png')}" alt="Usuário">
        </a>
        <a href="${caminhoPagina('logout.php')}" class="btn btn-outline">Sair</a>
    `;
}

/**
 * Atualiza a .header-actions da página (se existir) de acordo com a
 * sessão atual. Funciona em qualquer página que use o header padrão.
 */
async function sincronizarHeader() {
    const container = document.querySelector('.header-actions');

    if (!container) {
        return;
    }

    const sessao = await buscarSessao();

    if (sessao.logado) {
        renderizarHeaderLogado(container, sessao.nome);
    } else {
        renderizarHeaderDeslogado(container);
    }

    return sessao;
}

/**
 * Bloqueia páginas marcadas com data-precisa-login: quem não estiver
 * logado é mandado de volta pro login.
 */
async function protegerPaginaLogada(sessaoJaBuscada) {
    if (!document.body.hasAttribute('data-precisa-login')) {
        return;
    }

    const sessao = sessaoJaBuscada || await buscarSessao();

    if (!sessao.logado) {
        window.location.href = caminhoPagina('login.html') + '?erro=login-necessario';
        return;
    }

    // Preenche qualquer elemento marcado com data-nome-usuario
    // (ex: a saudação "Olá, {nome}!" do dashboard).
    document.querySelectorAll('[data-nome-usuario]').forEach(function (elemento) {
        elemento.textContent = sessao.nome;
    });
}

/**
 * Em login/cadastro, quem já está logado não precisa ver o formulário
 * de novo — manda direto pro perfil.
 */
async function redirecionarSeJaLogado(sessaoJaBuscada) {
    if (!document.body.hasAttribute('data-esconder-se-logado')) {
        return;
    }

    const sessao = sessaoJaBuscada || await buscarSessao();

    if (sessao.logado) {
        window.location.href = caminhoPagina('perfil.html');
    }
}

document.addEventListener('DOMContentLoaded', async function () {
    const sessao = await sincronizarHeader();
    await protegerPaginaLogada(sessao);
    await redirecionarSeJaLogado(sessao);
});