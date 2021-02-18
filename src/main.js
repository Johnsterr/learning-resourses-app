import { createApp } from 'vue';

import App from './App';
// Глобальные компоненты
import BaseCard from './components/ui/BaseCard';
import BaseButton from './components/ui/BaseButton';
import BaseDialog from './components/ui/BaseDialog';

const app = createApp(App);

// Регистрация компонентов
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

app.mount('#app');
