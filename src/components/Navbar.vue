<template>
  <div id="nav">

    <router-link to="/" id="logo-url"> <!-- Envolve a imagem em um link clicável apontando para a Home -->
      <img :src="logo" id="logo" :alt="alt" /> <!-- Recebe e renderiza a imagem e o texto de acessibilidade via props -->
    </router-link>

    <router-link to="/">Home</router-link> | <!-- Link navegável para a rota inicial -->
    <router-link to="/pedidos">Pedidos</router-link> <!-- Link navegável para a rota de pedidos -->

  </div>
</template>

<script>
export default {
    name: 'Navbar', // Nome/Identificador do componente
    props: ["logo", "alt"], // "Portas de entrada": recebe os dados vindos do componente pai (App.vue)
}
</script>

<style scoped>
  /* Container da barra principal */
  #nav {
    background-color: #222; /* Cor de fundo */
    border-bottom: 4px solid #111; /* Borda inferior */
    padding: 15px 50px; /* Margem interna (cima/baixo e lados) */
    display: flex; /* Ativa alinhamento em linha */
    justify-content: flex-end; /* Links para a direita */
    align-items: center; /* Centraliza itens na vertical */
  }

  /* Container do link da logo */
  #nav #logo-url {
    margin: auto;
    margin-left: 0; /* Empurra a logo para a extrema esquerda */
  }

  /* Tamanho da imagem da logo */
  #logo {
    width: 40px;
    height: 40px;
  }

  /* Links do menu (Home e Pedidos) */
  #nav a {
    color: #FCBA03; /* Amarelo do tema */
    text-decoration: none; /* Tira o sublinhado */
    margin: 12px; /* Espaço entre os links */
    transition: .5s; /* Animação suave na cor */
  }

  /* Ao passar o mouse nos links */
  #nav a:hover{
    color: #fff; /* Fica branco */
  }
</style>