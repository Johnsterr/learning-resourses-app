<template>
	<stored-resources :resources="storedResources"></stored-resources>
</template>

<script>
// Подключаем компонент локально
import StoredResources from './components/resources/StoredResources.vue';

export default {
	// Регистрируем компоненты
	components: {
		/* Варианты регистрации компонента
		'learning-resource': LearningResource
		LearningResource: LearningResource
		*/
		StoredResources
	},
	data() {
		return {
			storedResources: [
				{
					id: 'off-guide',
					title: 'Официальное руководство',
					description: 'Официальная документация фреймворка VueJS',
					link: 'https://vuejs.org/'
				},
				{
					id: 'yand',
					title: 'Yandex',
					description: 'Поисковая система Яндекс',
					link: 'https://yandex.ru/'
				}
			]
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