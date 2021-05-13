<template>
  <BaseCard>
    <!-- BaseButton -->
    <BaseButton
      @click="setSelectedTab('stored-resources')"
      :mode="storedButtonMode"
    >
      Библиотека материалов
    </BaseButton>
    <!-- BaseButton -->
    <BaseButton
			@click="setSelectedTab('add-resource')"
			:mode="addButtonMode"
		>
      Добавить ресурс
    </BaseButton>
  </BaseCard>
	<!-- Кэширование компонента через keep-alive -->
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
// Подключаем компоненты локально
import StoredResources from './StoredResources';
import AddResource from './AddResource';

export default {
  // Регистрируем компоненты
  components: {
    StoredResources,
    AddResource,
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
          link: 'https://vuejs.org/',
        },
        {
          id: 'yand',
          title: 'Yandex',
          description: 'Поисковая система Яндекс',
          link: 'https://yandex.ru/',
        },
        {
          id: 'clr-scheme',
          title: 'ColorScheme',
          description: 'Цветовой круг: онлайн подбор цветов и цветовых схем',
          link: 'https://colorscheme.ru/',
        },
      ],
    };
  },
  computed: {
    // Добавление стилей
    storedButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'smooth';
    },
    addButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'smooth';
    },
  },
  // Передача данных в дочерние компоненты
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.deleteResource,
    };
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
        link: link,
      };
      this.storedResources.push(newResource);
      this.selectedTab = 'stored-resources';
    },
    // Удаляем ресурс из списка
    deleteResource(resId) {
      /* Реализация, не работающая с provide/inject
			this.storedResources = this.storedResources.filter(res => res.id !== resId);
			*/
      const resIndex = this.storedResources.findIndex(
        (res) => res.id === resId
      );
      this.storedResources.splice(resIndex, 1);
    },
  },
};
</script>
