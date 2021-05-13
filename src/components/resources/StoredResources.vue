<template>
  <ul>
    <LearningResource
      v-for="resource in resources"
      :key="resource.id"
      :id="resource.id"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
    ></LearningResource>
  </ul>
</template>

<script>
// Подключаем компонент локально
import LearningResource from './LearningResource';

export default {
  // Регистрируем компонент
  components: {
    LearningResource,
  },
  // Получаем данные от родителя TheResources.vue
  inject: ['resources'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: 40rem;
}
</style>