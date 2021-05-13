<template>
  <!-- BaseDialog -->
  <BaseDialog
    v-if="inputIsInvalid"
    title="Неверные данные"
    @close="confirmError"
  >
    <template #default>
      <p>Ой, ошибка! Одно из полей оказалось пустым.</p>
      <p>Пожалуйста, проверьте все ли данные были введены.</p>
    </template>
    <template #actions>
			<!-- BaseButton -->
      <BaseButton @click="confirmError">Ок</BaseButton>
    </template>
  </BaseDialog>
	<!-- BaseCard -->
  <BaseCard>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="title">Название</label>
        <input id="title" name="title" type="text" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Описание</label>
        <textarea
          id="description"
          name="description"
          rows="4"
          ref="descInput"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Ссылка</label>
        <input id="link" name="link" type="url" ref="linkInput" />
      </div>
      <div>
				<!-- BaseButton -->
        <BaseButton type="submit">Добавить ресурс</BaseButton>
      </div>
    </form>
  </BaseCard>
</template>

<script>
export default {
  // Получаем данные от родителя TheResources.vue
  inject: ['addResource'],
  data() {
    return {
      // Данные для валидации полей
      inputIsInvalid: false,
    };
  },
  methods: {
    // Отправка формы
    submitForm() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descInput.value;
      const enteredLink = this.$refs.linkInput.value;

      // Валидация введенных данных
      if (
        enteredTitle.trim() === '' ||
        enteredDescription.trim() === '' ||
        enteredLink.trim() === ''
      ) {
        this.inputIsInvalid = true;
        return;
      }

      this.addResource(enteredTitle, enteredDescription, enteredLink);
    },
    // Подтверждение ошибки
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}
input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}
input:focus,
textarea:focus {
  outline: none;
  border-color: #f8a13e;
  background-color: #fdeeda;
}
.form-control {
  margin: 1rem 0;
}
</style>
