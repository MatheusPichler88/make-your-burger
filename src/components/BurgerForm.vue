<template>
  <div>
    <p>Componente de msg</p>
    <div>
      <!-- Formulário que abraça todos os campos e o envio -->
      <form id="burger-form">
        
        <!-- Campo: Nome do cliente -->
        <div class="input-container">
          <label for="nome">Nome do cliente</label>
          <input type="text" id="nome" name="name" v-model="nome" placeholder="Digite seu nome">
        </div>

        <!-- Campo: Seleção do pão vindo da API -->
        <div class="input-container">
          <label for="pao">Escolha o pão</label>
          <select name="pao" id="pao" v-model="pao">
            <option value="">Selecione seu pão</option>
            <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{ pao.tipo }}</option>
          </select>
        </div>

        <!-- Campo: Seleção da carne vinda da API -->
        <div class="input-container">
          <label for="carne">Escolha a carne</label>
          <select name="carne" id="carne" v-model="carne">
            <option value="">Selecione o tipo de carne</option>
            <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">{{ carne.tipo }}</option>
          </select>
        </div>

        <!-- Campo: Opcionais em checkboxes -->
        <div id="opcionais-container" class="input-container">
          <label id="opcionais-title" for="opcionais">Selecione os opcionais:</label>
          
          <div class="checkbox-container" v-for="opcional in opcionaisdata" :key="opcional.id">
            <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo">
            <span>{{ opcional.tipo }}</span>
          </div>
        </div>

        <!-- Botão de submissão do formulário -->
        <div class="input-container">
          <input type="submit" class="submit-btn" value="Criar meu Burger">
        </div>
      </form>
    </div> 
  </div>
</template>

<script>
export default {
  name: "BurgerForm", 
  data() {
    return {
      // Listas preenchidas via backend (API)
      paes: null,
      carnes: null,
      opcionaisdata: null,
      
      // Dados reativos preenchidos pelo usuário
      nome: null,
      pao: null,
      carne: null,
      opcionais: [],
      status: "Solicitado",
      msg: null
    }
  },
  methods: {
    // Busca as opções de ingredientes no JSON Server
    async getIngredientes() {
      const req = await fetch("http://localhost:3000/ingredientes");
      const data = await req.json();

      this.paes = data.paes;
      this.carnes = data.carnes;
      this.opcionaisdata = data.opcionais;
    }
  },
  mounted() {
    // Executa a busca assim que o componente é montado na tela
    this.getIngredientes();
  }
}
</script>

<style scoped>
 /* Container do form centralizado */
 #burger-form {
    max-width: 400px;
    margin: 0 auto;
 }

 /* Bloco flex em coluna para alinhar label e input */
 .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
 }

 /* Rótulos com faixa amarela decorativa */
 label {
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;
    padding: 5px 10px;
    border-left: 4px solid #FCBA03;
 }

 /* Largura e espaçamento interno dos campos */
 input, select {
    padding: 5px 10px;
    width: 300px;
 }

 /* Permite dispor os checkboxes em grid/linhas lado a lado */
 #opcionais-container {
    flex-direction: row;
    flex-wrap: wrap;
 }

 /* Ocupa a linha inteira para isolar o título das caixas */
 #opcionais-title {
    width: 100%;
 }

 /* Renderiza 2 checkboxes por linha */
 .checkbox-container {
    display: flex;
    align-items: flex-start;
    width: 50%;
    margin-bottom: 20px;
 }

 /* Mantém o tamanho natural da caixa e do texto */
 .checkbox-container span,
 .checkbox-container input {
    width: auto;
 }

 /* Espaço e destaque para o texto ao lado do checkbox */
 .checkbox-container span {
    margin-left: 6px;
    font-weight: bold;
 }

 /* Estilo do botão de confirmação */
 .submit-btn {
    background-color: #222;
    color: #FCBA03;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
 }

 /* Inverte as cores ao passar o cursor */
 .submit-btn:hover {
    background-color: transparent;
    color: #222;
 }
</style>