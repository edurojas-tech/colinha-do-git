# Hello World Git e GitHub

Guia Prático de Git e GitHub para iniciantes.

### Instalação 
https://git-scm.com/download

# Casos de Usos
- [x] Iniciar o repositório ou clonar:
    - Para clonagem de repositório, se executa o comando "git clone link-do-repositorio"
    -  Para inicializar um novo repositório "git init"

- [x] Criar pontos de produção no histórico da timeline do projeto
- [x] Verificar  alterações/mudanças feitas no projeto:
    - Para verificar, usa-se o comando "git status"

- [x] Para adicionar os arquivos, a serm lidos ou sicronizados para que o git consiga monitorar, se usa o comando: "git add nomedoArquivo" ou "git add ." para adicionar todos os arquivos pendentes.

# Comandos:

`git status`

verifica situação que se encontra a branch, validando se há alterções, commits pendentes, etc.

`git add .`

Adiciona todos os arquivos e/ou pastas modificados na lista para commitar. 

`git add <nome-arquivo-ou-pasta>`

Adiciona arquivos/pastas específicas para realizar o commit na sequencia.

`git commit -m "descricao"`

Insere uma descrição do que está sendo comitado (alterações, criação de features, correções de bug, etc).

`git branch -a`

lista todas as branchs do repositorio e marca atual que estiver mexendo.

`git checkout nome-da-branch`

mudar de branch.
