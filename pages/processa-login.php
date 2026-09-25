<?php

session_start();

require_once __DIR__ . '/../assets/models/Database.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: login.html');
    exit;
}

$email = trim($_POST['email'] ?? '');
$senha = $_POST['senha'] ?? '';

function voltarComErro($codigoErro, $email) {
    $parametros = http_build_query([
        'erro' => $codigoErro,
        'email' => $email,
    ]);
    header('Location: login.html?' . $parametros);
    exit;
}

if ($email === '' || $senha === '') {
    voltarComErro('campos-vazios', $email);
}

$database = new Database('localhost', 'techfit_les', 'root', '');
$conexao = $database->getConnection();

$consulta = $conexao->prepare('SELECT id, nome, senha_hash FROM usuarios WHERE email = :email');
$consulta->execute(['email' => $email]);
$usuario = $consulta->fetch(PDO::FETCH_ASSOC);

// Mensagem de erro igual para "e-mail não existe" e "senha errada":
// isso evita que alguém descubra, tentando logar, quais e-mails
// estão cadastrados no sistema.
if (!$usuario || !password_verify($senha, $usuario['senha_hash'])) {
    voltarComErro('credenciais', $email);
}

$_SESSION['usuario_id'] = $usuario['id'];
$_SESSION['usuario_nome'] = $usuario['nome'];

header('Location: perfil.html');
exit;