# TECHFIT_LES
O projeto tem como objetivo oferecer informações acessíveis sobre atividades físicas, exercícios, treinos e hábitos saudáveis, proporcionando uma experiência simples e intuitiva para usuários de diferentes níveis de experiência.


# 🏋️ TechFit

Aplicação web para acompanhamento de treinos e hábitos saudáveis. O TechFit permite que o usuário se cadastre, monte sua semana de treino, acompanhe exercícios com instruções e visualize planos de assinatura, em uma interface simples e intuitiva.


## 🛠 Tecnologias

- HTML5 e CSS3
- JavaScript (ES6+)
- PHP (back-end e regras de autenticação)
- MySQL / PDO (persistência de dados)
- Sessões PHP (`session_start`) para login

## ▶️ Como executar localmente

Como o projeto usa **PHP + MySQL**, ele precisa rodar em um servidor com suporte a PHP (não abre apenas clicando duas vezes no `index.html`). O jeito mais simples é usar o **XAMPP** (Windows/Linux) ou **MAMP** (Mac).

1. Clone o repositório:
   ```
   git clone https://github.com/pabloferreirafatec-gif/TECHFIT_LES.git
   ```

2. Copie a pasta do projeto para o diretório do servidor local (ex: `htdocs`, no caso do XAMPP):
   ```
   C:\xampp\htdocs\TECHFIT_LES
   ```

3. Crie o banco de dados MySQL:
   - Nome do banco: `techfit_les`
   - Crie as tabelas necessárias (ex: `usuarios`, com os campos `id`, `nome`, `email`, `senha_hash`)

4. Verifique as credenciais de conexão em `assets/models/Database.php` (host, usuário e senha do MySQL local).

5. Inicie o Apache e o MySQL pelo painel do XAMPP.

6. Acesse no navegador:
   ```
   http://localhost/TECHFIT_LES/
   ```



## 📁 Estrutura do projeto

```
TECHFIT_LES/
├── index.html              # Página inicial
├── README.md                # Documentação
├── assets/
│   ├── css/                 # Estilos (style, layout, components)
│   ├── js/                  # Scripts (treino, semana, planos, sessão)
│   ├── img/                 # Imagens e ícones
│   ├── models/
│   │   └── Database.php     # Conexão com o banco (PDO/MySQL)
│   └── php/                 # APIs (exercícios, lista de treino)
└── pages/
    ├── login.html / processa-login.php
    ├── cadastro.html / processa-cadastro.php
    ├── exercicios.html
    ├── planos.html
    ├── perfil.html
    ├── semana.html
    ├── treino.html
    └── sobre.html
```

## 👥 Autores

- Pablo Ferreira — [@pabloferreirafatec-gif](https://github.com/pabloferreirafatec-gif)
- Luiz Botta — [@luizbottaa](https://github.com/luizbottaa)
