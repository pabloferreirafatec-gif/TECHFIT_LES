<?php

header('Content-Type: application/json; charset=utf-8');

require_once __DIR__ . '/../models/Database.php';

$database = new Database('localhost', 'techfit_les', 'root', '');
$conexao = $database->getConnection();

$nivel = $_GET['nivel'] ?? null;
$niveisValidos = ['iniciante', 'intermediario', 'avancado'];

$sql = 'SELECT id, nome, descricao, grupo_muscular, nivel, imagem, peso_corporal FROM exercicios';

if ($nivel && in_array($nivel, $niveisValidos, true)) {
    $consulta = $conexao->prepare($sql . ' WHERE nivel = :nivel ORDER BY nome');
    $consulta->execute(['nivel' => $nivel]);
} else {
    $consulta = $conexao->query($sql . ' ORDER BY nome');
}

$exercicios = $consulta->fetchAll(PDO::FETCH_ASSOC);

// peso_corporal vem do banco como string ("0"/"1") — convertendo pra
// boolean de verdade, fica mais fácil de usar no JS do outro lado.
foreach ($exercicios as &$exercicio) {
    $exercicio['peso_corporal'] = (bool) $exercicio['peso_corporal'];
}

echo json_encode($exercicios);
