<template> 
  <!-- Navbar recebe a logo e o nome da aplicação via props (v-bind / :) -->
  <Navbar :logo="logo_src" :alt="app_name" /> 

  <!-- Renderiza dinamicamente a página da rota atual (Home, Pedidos, etc.) -->
  <router-view /> 

  <!-- Rodapé fixo na parte inferior -->
  <Footer /> 
</template>

<script>
// Importação dos componentes visuais reutilizáveis
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default { 
  name: 'App', // Nome do componente principal
  components: {
    Navbar, // Registra o componente da barra de navegação
    Footer  // Registra o componente do rodapé
  },
  data() { // Estado global do App (dados reutilizados pela aplicação)
    return {
      logo_src: '/img/logo.png', // Caminho da imagem da logo
      app_name: "Make Your Burger | Faça seu Pedido" // Nome da aplicação para acessibilidade (alt)
    }
  }
}
</script>
  
<style>
/* Reset global de estilos */
* {
  font-family: Helvetica; /* Fonte padrão de toda a aplicação */
  padding: 0;             /* Zera o espaçamento interno padrão */
  margin: 0;              /* Zera as margens padrão */
  box-sizing: border-box; /* Borda e padding contam dentro da largura do elemento */
}

/* Força a página a usar 100% da altura da janela */
html, body {
  height: 100%;
}

/* Transforma o elemento raiz (#app) em um container Flexbox vertical */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ocupa 100% da altura da tela visível */
}

/* Container padrão de todas as Views */
.main-container {
  margin: 50px;      /* Espaçamento em volta do conteúdo */
  min-height: 250px; /* Altura mínima da área de conteúdo */
  flex: 1;           /* Expande para preencher o espaço e empurrar o Footer para a base */
}

/* Estilo padronizado para os títulos das páginas */
h1 {
  text-align: center;  /* Centraliza o título */
  font-size: 42px;     /* Tamanho da fonte */
  margin-bottom: 30px; /* Espaço abaixo do título */
  color: #222;         /* Cor do texto */
}
</style>