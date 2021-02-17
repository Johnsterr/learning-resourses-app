import { createApp } from 'vue';

import App from './App';
// Глобальные компоненты
import BaseCard from './components/ui/BaseCard';
import BaseButton from './components/ui/BaseButton';

const app = createApp(App);

// Регистрация компонентов
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.mount('#app');
