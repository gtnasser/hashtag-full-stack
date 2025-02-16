# Hashtag - Jornada Full Stack

10 a 13/Fev/2025

Aula|Video|Material
---|---|---
1ª aula | [video](https://youtu.be/8cKuB0PfqTs) | [download](https://drive.google.com/drive/folders/1_otlml4QSqqkbexREoL0-mwO-SH2kn90)
2ª aula | [video](https://youtu.be/JkakNVjhXqM) | [download](https://drive.google.com/drive/folders/1kIE7AK1PI2qcpr-kMNDK-vMuUQMSFdrz)
3ª aula | [video](https://youtu.be/oPLOZfqk7qQ) | [download](https://drive.google.com/drive/folders/1olA9SsCHSXHfNxYMfHg4IdvTdGeh8R71)
4ª aula | [video](https://youtu.be/6PwcILaFgCc) | [download](https://drive.google.com/drive/folders/11iNjXwITKtJp6TdndxMZGIbUQQk04qXz)

Link das aulas auxiliares/complementares:
- [Instalação VS Code e Node + Extensões](https://youtu.be/fzgL5YIL77Q)
- [Aulas Complementares de CSS]
    - [Estilizando a Home - Aula 1](https://youtu.be/sJcyKmc_GMw)
    - [Página de Artista + Início da Música - Aula 2](https://youtu.be/EuVdTqyPvyk)
    - [Ajustes Finais + Responsividade - Aula 3](https://youtu.be/_WBCQOy1Vfc)

Para [validar a sua presença nas aulas](https://hashaqui.com/certificados/jornada-fullstack) (necessário para o certificado)
<!--
Aula|Código
---|---
1|react58
2|backend95
3|fullstack91
4|github16
-->

## Objetivo:

Criar uma aplicação, baseada no Spotify:
- páginas de Artistas e Músicas, com um player funcional
- utilizando no front-end: HTML/CSS/Javascript e React
- utilizando no back-end: Node.js com Express e banco de dados MongoDB

## AULA 1

## AULA 2

## AULA 3

Aula 1: A gente vai começar o nosso projeto completo, criando a interface do aplicativo de uma réplica do Spotify usando HTML, CSS, JavaScript e o React. Tudo isso, passo a passo e linha a linha de código para você conseguir acompanhar sem nenhuma dificuldade;
Aula 2: Aprender a criar o Backend do projeto, usando Express e Node, e conectando com o banco de dados em MongoDB, para poder criar e controlar todas as lógicas do aplicativo;
Aula 3: Conectar tudo que você aprendeu nas duas primeiras aulas e criar um player de áudio completo;
Aula 4: Finalizar todo o projeto dando deploy e disponibilizando essa réplica do Spotify em um site e colocando no seu portfólio para melhorar o seu currículo


## AULA 4

- construir a API
- criar banco de dados na nuvem (MongoDB)
- conectar API com o Banco de dados
- conectar front com o backend usando a API
- criar lógicas do player (play/pause, progress)
*-* github e deploy

- dividir o projeto em front-end e back-end, o que fizemos ate agora vai para front-end
- no back-end vamos criar um novo projeto com: $ npm init -y
- alterar package.json incluindo: "type": module

- Atlas Mongo DB
  - criar database, criar collections: artists e songs, incluir um documento
  - network access: criar IP 0.0.0.0 para facilitar o deploy
  - Database access > Database users > + add new database users (spotify/zt3hW6pn8NhnS6rm)
  - cluster > connect > drivers

## Para executar este projeto

Este projeto pode ser clonado de https://github.com/gtnasser/hashtag-full-stack

Para executar esta aplicação, abra o terminal e execute:

```shell
# clone a pasta do projeto
git clone http://github.com/gtnasser/hashtag-full-stack

# entre na pasta do projeto:
cd hashtag-full-stack
```

### BACK-END

Abra um terminal e na pasta do projeto execute:
```shell
cd back-end
npm i
```

executar um servidor publicando em arquivos:
```shell
node api\server-file.js
# testando:
curl http://localhost:3001/artists
```

executar um servidor republicando de MongoDB:
```shell
node api\server-mongo.js
# testando:
curl http://localhost:3001/artists
# no mongodb, criar as collections artists e songs, e popular com:
node api\migrations\0001-insert-mongodb.js
```

### FRONT-END
