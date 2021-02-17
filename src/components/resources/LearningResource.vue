<template>
	<li>
		<base-card>
			<header>
				<h3>{{ title }}</h3>
				<!-- Добавляем класс flat через входные параметры -->
				<base-button mode="flat">Удалить</base-button>
			</header>
			<p>{{ description }}</p>
			<nav>
				<a :href="link" target="_blank" rel="noopener noreferrer">Посмотреть ресурс</a>
			</nav>
		</base-card>
	</li>
</template>

<script>
export default {
	// Входные параметры из StoredResources.vue 
	props: ['title', 'description', 'link']
}
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

a:hover, a:active {
  color: #10b1f0;
}
</style>