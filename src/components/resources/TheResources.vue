<template>
	<div>
		<base-card>
			<base-button
				@click="setSelectedTab('stored-resources')"
				:mode="storedButtonMode"
			>Библиотека ресурсов</base-button>
			<base-button
				@click="setSelectedTab('add-resource')"
				:mode="addButtonMode"
			>Добавить ресурс</base-button>
		</base-card>
	</div>
	<component :is="selectedTab"></component>
</template>

<script>
// Подключаем компоненты локально
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
	// Регистрируем компоненты
	components: {
		StoredResources,
		AddResource
	},
	data() {
		return {
			// Активная вкладка
			selectedTab: 'stored-resources',
			// Данные
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
				},
				{
					id: 'clr-scheme',
					title: 'ColorScheme',
					description: 'Цветовой круг: онлайн подбор цветов и цветовых схем',
					link: 'https://colorscheme.ru/'
				}
			]
		}
	},
	computed: {
		// Добавление стилей
		storedButtonMode() {
			return this.selectedTab === 'stored-resources' ? null : 'flat';
		},
		addButtonMode() {
			return this.selectedTab === 'add-resource' ? null : 'flat';
		}
	},
	// Передача данных в дочерние компоненты
	provide() {
		return {
			resources: this.storedResources
		}
	},
	methods: {
		// Передаем в data активную вкладку
		setSelectedTab(tab) {
			this.selectedTab = tab;
		}
	}
}
</script>

<style scoped>
div {
	max-width: 40rem;
	padding: 1rem;
	margin: 0 auto;
}

button + button {
	margin-left: 1rem;
}
</style>