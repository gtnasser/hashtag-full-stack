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

- criar app usando React
- criar telas de Artistas e Músicas


## AULA 2

- criar componentes Artistas e Músicas
- criar rotas

## AULA 3

- criar componentes Música
- refactor telas

## AULA 4

- construir a API
- criar banco de dados na nuvem (MongoDB)
- conectar API com o Banco de dados
- conectar front com o backend usando a API
- criar lógicas do player (play/pause, progress)


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

Abra um terminal e na pasta do projeto execute:
```shell
cd front-end
npm i
npm run dev
```
Abrir o navegador na página: http://localhost:5174/