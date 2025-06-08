import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router';

import Drawer from 'primevue/drawer';
import Button from 'primevue/button';
import Noir from './presets/Noir';

const app = createApp(App);
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Noir,
    options: {
      prefix: 'p',
      darkModeSelector: '.p-dark',
      cssLayer: false,
    }
  }
});
app.component("Drawer", Drawer);
app.component("Button", Button);
app.mount('#app')
