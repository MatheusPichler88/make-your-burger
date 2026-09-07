<template>
    <!-- Rodapé principal do sistema -->
    <footer id="footer">
        <!-- Copyright e nome do sistema -->
        <p>Faça seu Hambúrguer &copy; 2026</p>
    </footer>
</template>

<script>
export default {
    name: 'Footer', // Identificador do componente
}
</script>


<style scoped>
    /* Estilização da caixa do rodapé */
    #footer {
        height: 200px;                  /* Altura fixa do rodapé */
        background-color: #222;         /* Fundo escuro */
        border-top: 4px solid #111;     /* Borda superior de contraste */
        color: #FCBA03;                 /* Texto em amarelo */
        display: flex;                  /* Ativa o alinhamento Flexbox */
        align-items: center;            /* Centraliza o texto na vertical */
        justify-content: center;        /* Centraliza o texto na horizontal */
        width: 100%;                    /* Ocupa toda a largura da tela */
    }
</style>