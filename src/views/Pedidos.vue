<template>
  <!-- Usa o mesmo container global para manter o alinhamento visual -->
  <div class="main-container">
    <h1>Gerenciar pedidos:</h1>
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue';

export default {
  name: 'Pedidos', // Identificador da View de pedidos
  components: {
    Dashboard
  }
}
</script>