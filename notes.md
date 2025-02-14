Aula 1: A gente vai começar o nosso projeto completo, criando a interface do aplicativo de uma réplica do Spotify usando HTML, CSS, JavaScript e o React. Tudo isso, passo a passo e linha a linha de código para você conseguir acompanhar sem nenhuma dificuldade;
Aula 2: Aprender a criar o Backend do projeto, usando Express e Node, e conectando com o banco de dados em MongoDB, para poder criar e controlar todas as lógicas do aplicativo;
Aula 3: Conectar tudo que você aprendeu nas duas primeiras aulas e criar um player de áudio completo;
Aula 4: Finalizar todo o projeto dando deploy e disponibilizando essa réplica do Spotify em um site e colocando no seu portfólio para melhorar o seu currículo


## Aula 1

1. criar projeto com o vite na pasta do projeto

npm create vite@latest .
- Remove & continue
- gabarito-da-aula-1
- React
- JavaScript

2. limpar projeto demo criado pelo vite para desenvolvermos o nosso

- remover pasta public
- remover arquivos da pasta assets
- remover App.css
- remover codigo do App.jsx (deixar somente function App() vazia)

## Aula 4



---------

VSCode

Extensão -> rafce = React Arrow Function Component Export

[ctrl]+; -> comenta a linha

------

FontAwesome

1. Add SVG Core
```shell
npm i --save @fortawesome/fontawesome-svg-core
```

2. Add Icon Package
```shell
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
```

3. Add the React Component
```shell
npm i --save @fortawesome/react-fontawesome@latest
```

-----


// rafce

// const App = () => <h1>Olá Mundo!</h1>

nomeação de componentes: PascalCase

nomeação de variável, função, etc : camelCase


export default posso importar com qualquer nome e sem chaves

export "sem default" só posso importar com o nome exportado e entre chaves


self closing tag: <Header></Header> -> <Header />


nomeacao de classes em CSS: metodologia BEM

- Blocks
- Elements
- Modifiers

bloco__elemento--modificador

-    header
-    header__link
-    header__link--small
-
-    nomes compostos sao separados por hifen
-    ex: list-item

<> Tag vazia = Fragment