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
	// Входные параметры
	props: ['title', 'description', 'link']
}
</script>