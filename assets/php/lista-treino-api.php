<?php


session_start();
header('Content-Type: application/json; charset=utf-8');

require_once __DIR__ . '/../models/Database.php';

// Só quem está logado pode montar a própria lista de treino
if (!isset($_SESSION['usuario_id'])) {
    http_response_code(401);
    echo json_encode(['erro' => 'Você precisa entrar na sua conta para adicionar exercícios.']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['erro' => 'Método não permitido.']);
    exit;
}

$dados = json_decode(file_get_contents('php://input'), true) ?? [];

$exercicioId = (int) ($dados['exercicio_id'] ?? 0);
$series = (int) ($dados['series'] ?? 0);
$repeticoes = (int) ($dados['repeticoes'] ?? 0);
$carga = isset($dados['carga']) && $dados['carga'] !== '' && $dados['carga'] !== null
    ? (float) $dados['carga']
    : null;

if ($exercicioId <= 0 || $series <= 0 || $repeticoes <= 0) {
    http_response_code(400);
    echo json_encode(['erro' => 'Preencha séries e repetições com valores válidos.']);
    exit;
}

$database = new Database('localhost', 'techfit_les', 'root', '');
$conexao = $database->getConnection();

// Confirma que o exercício existe antes de gravar
$verificaExercicio = $conexao->prepare('SELECT id FROM exercicios WHERE id = :id');
$verificaExercicio->execute(['id' => $exercicioId]);

if (!$verificaExercicio->fetch()) {
    http_response_code(404);
    echo json_encode(['erro' => 'Exercício não encontrado.']);
    exit;
}

$insercao = $conexao->prepare(
    'INSERT INTO lista_treino (usuario_id, exercicio_id, series, repeticoes, carga_kg)
     VALUES (:usuario_id, :exercicio_id, :series, :repeticoes, :carga_kg)'
);
$insercao->execute([
    'usuario_id' => $_SESSION['usuario_id'],
    'exercicio_id' => $exercicioId,
    'series' => $series,
    'repeticoes' => $repeticoes,
    'carga_kg' => $carga,
]);

echo json_encode(['sucesso' => true]);
