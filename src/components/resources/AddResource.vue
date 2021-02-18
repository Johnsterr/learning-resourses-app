<template>
	<base-card>
		<form>
			<div class="form-control">
				<label for="title">Название</label>
				<input id="title" name="title" type="text">
			</div>
			<div class="form-control">
				<label for="description">Описание</label>
				<textarea id="description" name="description" rows="4"></textarea>
			</div>
			<div class="form-control">
				<label for="link">Ссылка</label>
				<input id="link" name="link" type="url">
			</div>
			<div>
				<base-button type="submit">Добавить ресурс</base-button>
			</div>
		</form>
	</base-card>
</template>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input, textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #f8a13e;
  background-color: #fdeeda;
}

.form-control {
  margin: 1rem 0;
}
</style>