<template>
  <div>
    <p>Componente de msg</p>
    <div>
      <!-- Formulário que envolve todos os campos e o envio -->
      <form id="burger-form">
        
        <!-- Campo: Nome -->
        <div class="input-container">
          <label for="nome">Nome do cliente</label>
          <input type="text" id="nome" name="name" v-model="nome" placeholder="Digite seu nome">
        </div>

        <!-- Campo: Pão -->
        <div class="input-container">
          <label for="pao">Escolha o pão</label>
          <select name="pao" id="pao" v-model="pao">
            <option value="">Selecione seu pão</option>
            <option value="integral">Integral</option>
          </select>
        </div>

        <!-- Campo: Carne -->
        <div class="input-container">
          <label for="carne">Escolha a carne</label>
          <select name="carne" id="carne" v-model="carne">
            <option value="">Selecione o tipo de carne</option>
            <option value="Maminha">Maminha</option>
          </select>
        </div>

        <!-- Campo: Opcionais -->
        <div id="opcionais-container" class="input-container">
          <label id="opcionais-title" for="opcionais">Selecione os opcionais:</label>
          
          <div class="checkbox-container">
            <input type="checkbox" name="opcionais" v-model="opcionais" value="salame">
            <span>Salame</span>
          </div>

          <div class="checkbox-container">
            <input type="checkbox" name="opcionais" v-model="opcionais" value="bacon">
            <span>Bacon</span>
          </div>

          <div class="checkbox-container">
            <input type="checkbox" name="opcionais" v-model="opcionais" value="cheddar">
            <span>Cheddar</span>
          </div>

          <div class="checkbox-container">
            <input type="checkbox" name="opcionais" v-model="opcionais" value="cebola_roxa">
            <span>Cebola Roxa</span>
          </div>
        </div>

        <!-- Botão Submit -->
        <div class="input-container">
          <input type="submit" class="submit-btn" value="Criar meu Burger">
        </div>
      </form>
    </div> 
  </div>
</template>

<script>
export default {
  name: "BurgerForm" // Nome do componente
}
</script>

<style scoped>
 /* Form centralizado com largura máxima */
 #burger-form {
    max-width: 400px;
    margin: 0 auto;
 }

 /* Container em coluna para inputs */
 .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
 }

 /* Rótulo com faixa amarela na esquerda */
 label {
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;
    padding: 5px 10px;
    border-left: 4px solid #FCBA03;
 }

 /* Estilo padrão para campos de texto e seleção */
 input, select {
    padding: 5px 10px;
    width: 300px;
 }

 /* Permite alinhar vários checkboxes lado a lado */
 #opcionais-container {
    flex-direction: row;
    flex-wrap: wrap;
 }

 /* Garante que o título dos opcionais ocupe a linha toda */
 #opcionais-title {
    width: 100%;
 }

 /* Exibe 2 checkboxes por linha */
 .checkbox-container {
    display: flex;
    align-items: flex-start;
    width: 50%;
    margin-bottom: 20px;
 }

 /* Evita que a caixa do checkbox estique */
 .checkbox-container span,
 .checkbox-container input {
    width: auto;
 }

 /* Espaçamento do texto ao lado do checkbox */
 .checkbox-container span {
    margin-left: 6px;
    font-weight: bold;
 }

 /* Botão enviar */
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

 /* Efeito ao passar o mouse */
 .submit-btn:hover {
    background-color: transparent;
    color: #222;
 }
</style>