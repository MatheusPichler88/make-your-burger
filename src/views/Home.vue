<template>
  <Banner />
  <!-- Aplica o container global definido no App.vue -->
  <div class="main-container">
    <h1>Monte o seu burger:</h1>
    <BurgerForm />
  <p>formulario</p>
  </div>
</template>



<script>
import Banner from '@/components/Banner.vue';
import BurgerForm from '@/components/BurgerForm.vue';
export default {
  name: 'Home', // Identificador da View da página inicial
  components:{
    Banner,
    BurgerForm
  }

}
</script>