<template>
	<ul>
		<learning-resource
			v-for="resource in resources"
			:key="resource.id"
			:title="resource.title"
			:description="resource.description"
			:link="resource.link"
		></learning-resource>
	</ul>
</template>

<script>
// Подключаем компонент локально
import LearningResource from './LearningResource';

export default {
	// Регистрируем компонент
	components: {
		LearningResource
	},
	// Получаем данные от родителя TheResources.vue
	inject: ['resources']
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0 auto;
  padding: 1rem;
  max-width: 40rem;
}
</style>