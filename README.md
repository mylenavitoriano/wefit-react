<h1 align="center"> Desafio WeFit </h1>

<p align="center">
    Projeto e-Commerce
<br/>
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>
<br>

<p align="center">
  <img alt="projeto Habits" src=".github/preview.png" width="100%">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- Next.js
- Typescript
- Styled-component
- JSON Server
- Mantine
- React Router

## 💻 Projeto

No Projeto e-Commerce, é proporcionado ao usuário uma listagem de produtos e possibilita que ele adicione-os ao carrinho, aumente a quantidade do mesmo e após feito todos esses processos, é possível ver o valor final de sua compra.
Para esse projeto eu consumi uma API de Filmes, com ela eu obtive retorno de dados como título do filme, imagem e preço. Após o consumo dessa API foi feita a listagem para o usuário, como um e-Commerce.


## 🔖 Layout

Você pode visualizar o layout do projeto através [DESSE LINK](https://www.figma.com/file/RY494yKewR5EpAWUWBhlUp/Re-teste-Front-React-WeFit---2024?type=design&node-id=0%3A1&mode=design&t=NkSGvyMeyZjCXYlF-1).


## ↔️ Fluxo

1. Início (Home):
- Exibe uma lista inicial de filmes disponíveis.
- Inclui uma barra de busca para os usuários procurarem filmes específicos.
- Permite aos usuários adicionar filmes à sua sacola de compras.
- Oferece a opção de acessar a sacola de compras.

2. Busca (Search):
- Apresenta uma funcionalidade de busca avançada para os usuários encontrarem filmes específicos.
- Permite aos usuários adicionar filmes à sua sacola de compras.
- Possibilita retornar à página inicial caso não haja resultados de busca.

3. Carrinho de Compras (Cart):
- Exibe os filmes adicionados à sacola de compras pelo usuário.
- Garante que o total seja calculado corretamente para cada filme, levando em consideração a quantidade selecionada.
- Calcula o valor total da compra com base nos filmes selecionados e suas quantidades.
- Apresenta uma mensagem de confirmação de compra bem-sucedida ao finalizar a transação.
- Permite ao usuário retornar à página inicial após a conclusão da compra.

## 📌 Instruções
```bash
# Clonar o repositório
git clone https://github.com/mylenavitoriano/wefit-react.git

# Entrar no diretório
cd wefit-react

# Baixar as dependências (npm || yarn)
npm install
yarn

# Executar a aplicação (npm || yarn)
npm run dev
yarn dev
```
