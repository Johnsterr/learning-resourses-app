<template>
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
	<keep-alive>
		<component :is="selectedTab"></component>
	</keep-alive>
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
			return this.selectedTab === 'stored-resources' ? null : 'smooth';
		},
		addButtonMode() {
			return this.selectedTab === 'add-resource' ? null : 'smooth';
		}
	},
	// Передача данных в дочерние компоненты
	provide() {
		return {
			resources: this.storedResources,
			addResource: this.addResource
		}
	},
	methods: {
		// Передаем в data активную вкладку
		setSelectedTab(tab) {
			this.selectedTab = tab;
		},
		// Создаем новый ресурс и добавляем в список
		addResource(title, desc, link) {
			const newResource = {
				id: new Date().toString(),
				title: title,
				description: desc,
				link: link
			};
			this.storedResources.push(newResource);
			this.selectedTab = 'stored-resources';
		}
	}
}
</script>
