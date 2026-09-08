<template>
  <!-- Estrutura principal do container do banner -->
  <div id="main-banner">
    <!-- Caixa de texto que agrupa o título e a descrição -->
    <div class="banner-content">
      <h1>Faça seu hambúrguer</h1>
      <p>Monte do seu jeito, com os ingredientes que você quiser.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner" // Nome do componente registrado no Vue.js
}
</script>

<style scoped>

  /* 1. Container Principal do Banner */
  #main-banner {
    position: relative; /* Define ponto de referência para os elementos filhos */
    height: 700px;     /* Altura total do banner */
    display: flex;     /* Habilita o modelo de layout flexível */
    align-items: center; /* Centraliza o conteúdo verticalmente */
    padding: 0 8%;     /* Espaçamento lateral interno (evita colar nas bordas) */
    
    /* Imagem de fundo composta por duas camadas: */
    background-image:
      /* Camada 1: Gradiente escuro da esquerda (85% opaco) para a direita (transparente) */
      linear-gradient(90deg, rgba(10, 10, 10, 0.85) 0%, rgba(10, 10, 10, 0.85) 40%, rgba(10, 10, 10, 0.2) 55%, rgba(10, 10, 10, 0) 62%),
      /* Camada 2: Foto da imagem de fundo */
      url('/public/img/burger.png');
      
    background-position: center;   /* Centraliza o ponto focal da imagem */
    background-size: cover;        /* Redimensiona a imagem para cobrir todo o container */
    background-repeat: no-repeat;  /* Impede a imagem de se repetir */
  }

  /* 2. Container de Texto (Bloco da Esquerda) */
  .banner-content {
    max-width: 440px; /* Limita a largura do texto para não cobrir a foto toda */
  }

  /* 3. Estilização do Título Principal (H1) */
  #main-banner h1 {
    color: #fff;                             /* Cor do texto em branco */
    text-align: left;                        /* Alinha o texto à esquerda */
    font-size: clamp(30px, 4.2vw, 46px);     /* Fonte fluida: se adapta ao tamanho da tela */
    font-weight: 700;                        /* Deixa a fonte em negrito */
    line-height: 1.2;                        /* Altura da linha para não empilhar o texto */
    margin: 0 0 16px;                        /* Espaço de 16px abaixo do título */
    text-shadow: 0 2px 14px rgba(0, 0, 0, 0.5); /* Sombra preta suave atrás das letras */
  }

  /* 4. Estilização do Parágrafo (Subtítulo) */
  #main-banner p {
    color: #e6e6e6;                          /* Tom de cinza claro */
    font-size: clamp(15px, 1.8vw, 19px);     /* Fonte fluida ajustável */
    line-height: 1.5;                        /* Espaçamento legível entre as linhas */
    margin: 0;                               /* Zera as margens padrão */
    text-shadow: 0 1px 8px rgba(0, 0, 0, 0.5); /* Sombra para leitura legível sobre a foto */
  }

  /* 5. Regra de Responsividade para Celulares (Telas menores que 640px) */
  @media (max-width: 640px) {
    #main-banner {
      height: 520px;   /* Reduz a altura do banner em telas pequenas */
      padding: 0 6%;   /* Reduz o espaçamento das bordas laterais */
    }

    .banner-content {
      max-width: 100%; /* Permite que o bloco de texto ocupe toda a largura disponível */
    }
  }

</style>