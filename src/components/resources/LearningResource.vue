<template>
	<li>
		<div>
			<header>
				<h3>{{ title }}</h3>
				<button>Удалить</button>
			</header>
		</div>
		<p>{{ description }}</p>
		<nav>
			<a :href="link" target="_blank" rel="noopener noreferrer">Посмотреть ресурс</a>
		</nav>
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
	padding: 1rem;
  max-width: 40rem;
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