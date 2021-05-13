<template>
	<TheHeader :apptitle="appTitle"></TheHeader>
	<TheResources></TheResources>
</template>

<script>
// Подключаем компоненты локально
import TheHeader from './components/layout/TheHeader.vue';
import TheResources from './components/resources/TheResources.vue';

export default {
	// Регистрируем компоненты
	components: {
		/* Варианты регистрации компонента
		'learning-resource': LearningResource
		LearningResource: LearningResource
		*/
		TheHeader,
		TheResources
	},
	data() {
		return {
			appTitle: 'Полезные материалы'
		}
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Fira Sans', sans-serif;
}

body {
  margin: 0;
}
</style>