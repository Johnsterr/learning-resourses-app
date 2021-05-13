<template>
  <li>
    <!-- BaseCard -->
    <BaseCard>
      <header>
        <h3>{{ title }}</h3>
        <!-- BaseButton -->
        <!-- Отправляем класс flat через входные параметры внутрь компонента -->
        <BaseButton mode="flat" @click="deleteResource(id)">Удалить</BaseButton>
      </header>
      <p>{{ description }}</p>
      <nav>
        <a :href="link" target="_blank" rel="noopener noreferrer">
					Посмотреть ресурс
				</a>
      </nav>
    </BaseCard>
  </li>
</template>

<script>
export default {
  // Входные параметры из StoredResources.vue
  props: ['id', 'title', 'description', 'link'],
  // Получаем данные от родителя TheResources.vue
  inject: ['deleteResource'],
};
</script>

<style scoped>
li {
  margin: 0 auto;
  max-width: 40rem;
}
li + li {
  margin-top: 1rem;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h3 {
  font-size: 1.25rem;
  margin: 0.75rem 0;
}
p {
  margin: 0.75rem 0;
}
a {
  text-decoration: none;
  color: #126cd3;
}
a:hover,
a:active {
  color: #10b1f0;
}
</style>
