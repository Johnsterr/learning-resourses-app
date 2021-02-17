import { createApp } from 'vue';

import App from './App';
// Глобальные компоненты
import BaseCard from './components/ui/BaseCard';

const app = createApp(App);

// Регистрация компонентов
app.component('base-card', BaseCard);

app.mount('#app');
