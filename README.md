# ignite-feed-react-ts
## Descrição
Projeto para aprender os fundamentos de React utilizando Typescript seguindo o projeto Ignite Feed da Rocketseat, ele consiste em um Feed responsivo com posts estáticos onde é possivel adicionar, remover e aplaudir comentários.

## Incrementos Feitos
Inicialmente o projeto tinha apenas a página de _Feed_ com as interações de criar _comentários_ e adicionar _aplausos_ e por isso decidi criar as telas de _Login_ e  _Perfil_.

Na tela de _Login_ eu criei um formulário onde o usuário informa o nome e o cargo/função que serão exibidos no _Feed_.

Na tela de _Perfil_ é possível editar os dados informados pelo usuário.

Para implementar a navegação entre páginas utilizei **react-router-dom**.

Para validação dos formulários utilizei **react-hook-form**.

Para manipular datas utilizei **date-fns**.

## To do
- Implementar um CRUD de _Posts_
- Limitar aplausos para 1.

## Setup
```
npm i
```

## Hot-reload para desenvolvimento
```
npm run dev
```
