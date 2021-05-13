import { createApp } from 'vue';

import App from './App';
// Глобальные компоненты
import BaseCard from './components/ui/BaseCard';
import BaseButton from './components/ui/BaseButton';
import BaseDialog from './components/ui/BaseDialog';

const app = createApp(App);

// Регистрация компонентов
app.component('BaseCard', BaseCard);
app.component('BaseButton', BaseButton);
app.component('BaseDialog', BaseDialog);

app.mount('#app');
