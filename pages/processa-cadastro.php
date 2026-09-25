<?php

require_once __DIR__ . '/../assets/models/Database.php';

// Só aceita requisições vindas do formulário (POST)
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: cadastro.html');
    exit;
}

$nome = trim($_POST['nome'] ?? '');
$email = trim($_POST['email'] ?? '');
$senha = $_POST['senha'] ?? '';
$confirmarSenha = $_POST['confirmar-senha'] ?? '';
$termos = isset($_POST['termos']);

/**
 * Volta para o cadastro.html com um código de erro e os dados já
 * digitados (nome e e-mail), para o usuário não ter que redigitar tudo.
 * A senha nunca é reenviada por segurança.
 */
function voltarComErro($codigoErro, $nome, $email) {
    $parametros = http_build_query([
        'erro' => $codigoErro,
        'nome' => $nome,
        'email' => $email,
    ]);
    header('Location: cadastro.html?' . $parametros);
    exit;
}

// --- Validações no servidor (espelham as do script.js) ---

if ($nome === '') {
    voltarComErro('nome', $nome, $email);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    voltarComErro('email', $nome, $email);
}

$senhaForte =
    strlen($senha) >= 8 &&
    preg_match('/[a-z]/', $senha) &&
    preg_match('/[A-Z]/', $senha) &&
    preg_match('/[!@#$%^&*(),.?":{}|<>_\-+=]/', $senha);

if (!$senhaForte) {
    voltarComErro('senha-fraca', $nome, $email);
}

if ($senha !== $confirmarSenha) {
    voltarComErro('senha-diferente', $nome, $email);
}

if (!$termos) {
    voltarComErro('termos', $nome, $email);
}

// --- Grava no banco ---

$database = new Database('localhost', 'techfit_les', 'root', '');
$conexao = $database->getConnection();

// E-mail já cadastrado?
$verifica = $conexao->prepare('SELECT id FROM usuarios WHERE email = :email');
$verifica->execute(['email' => $email]);

if ($verifica->fetch()) {
    voltarComErro('email-duplicado', $nome, $email);
}

$senhaHash = password_hash($senha, PASSWORD_DEFAULT);

$insercao = $conexao->prepare(
    'INSERT INTO usuarios (nome, email, senha_hash) VALUES (:nome, :email, :senha_hash)'
);
$insercao->execute([
    'nome' => $nome,
    'email' => $email,
    'senha_hash' => $senhaHash,
]);

header('Location: login.html?cadastro=sucesso');
exit;