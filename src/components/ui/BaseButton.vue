<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  // Входные параметры компонента
  props: ['mode'],
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #f8a13e;
  border: 1px solid #f8a13e;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #dd7717;
  border-color: #dd7717;
}
.flat {
  background-color: transparent;
  color: #f73707;
  border: none;
}
.flat:hover,
.flat:active {
  background-color: #fddada;
}
.smooth {
  background-color: transparent;
  color: #f78f07;
  border: none;
}
.smooth:hover,
.smooth:active {
  background-color: #fdf1da;
}
</style>
