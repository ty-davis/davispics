import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router';

import Drawer from 'primevue/drawer';
import Button from 'primevue/button';
import Image from 'primevue/image';
import Noir from './presets/Noir';
import InputText from 'primevue/inputtext';
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';
import Textarea from 'primevue/textarea';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import FloatLabel from 'primevue/floatlabel';


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
app.use(ToastService);
app.component("Drawer", Drawer);
app.component("Button", Button);
app.component("Image", Image);

app.component("InputText", InputText);
app.component("DatePicker", DatePicker);
app.component("Select", Select);
app.component("Textarea", Textarea);
app.component("Toast", Toast);
app.component("FloatLabel", FloatLabel);

app.mount('#app')
