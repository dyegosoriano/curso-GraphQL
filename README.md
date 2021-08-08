<h1 align=center>
  <img src="./readme/graphql.svg" />
</h1>

<h3 align="center">

Material resultado do curso de desenvolvimento com GraphQL

</h3>

## **:rocket: OBJETIVO**

O projeto tem como finalidade **estabelecer uma conexão** entre **empresas e/ou entidades que coletam resíduos** (orgânicos e inorgânicos) **às pessoas e/ou entidades que necessitam constantemente descartar esses resíduos**. Solucionando um grande problema recorrente que é o **descarte inadequado do lixo**, facilitando o processo de recliclagem e reutilização.

## **:wine_glass: COMO UTILIZAR**

### Configurações Iniciais

Primeiro, você precisa ter o <kbd>[NodeJS](https://nodejs.org/en/download/)</kbd> instalado na sua máquina.

Se você estiver utilizando o **Linux**, você pode optar por instalar o **Node** através do gerênciador de versões <kbd>[asdf]</kbd> para facilitar o processo de mudança da versão do **Node**, quando for necessário.

Você pode optar também por utilizar o **yarn** no lugar do **npm**. Você pode instalar clicando nesse <kbd>[link][yarn]</kbd>, ou através do <kbd>[asdf]</kbd>.

Após ter o **Node** instalado, execute as instruções abaixo no diretório do projeto.

Instale as dependências contidas nos arquivos `package.json` que se encontram na raíz do repositório (para o gerenciamento de commits), no diretório do **server**, no diretório do **website** e no diretório **mobile**. Para instalar as dependências, basta abrir o terminal no diretório e digitar o comando:

```sh
$ yarn
# ou
$ npm install
```

Veja os arquivos **`package.json`** do <kbd>[server](./package.json)</kbd>.

### Utilizando o Server

```sh
# Inicializando servidor Apollo:
$ yarn dev:server

# Executando API fake:
$ yarn dev:server
```

> Veja a parte de **scripts {}** do arquivo <kbd>[package.json](./sources/server/package.json)</kbd> para saber quais scripts estão disponíveis.
