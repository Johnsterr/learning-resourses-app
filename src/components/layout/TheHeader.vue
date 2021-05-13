<template>
  <header>
    <h1>{{ apptitle }}</h1>
  </header>
</template>

<script>
export default {
  // Входные параметры из App.vue
  props: ['apptitle'],
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8a13e;
}
header h1 {
  margin: 0;
  color: rgb(19, 19, 19);
}
</style>
