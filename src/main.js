import { createApp } from 'vue'
import App from './App.vue'

/**
 * Route Import
 */
import router from './router';

/**
 * Store Import
 *
 */
import store from './store/index';

/**
 * 
 * Mixins Import
 */
import mixins from './mixins';

/**
 * Import Toast
 * 
 */
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

/**
 * Tailwind CSS
 *
 */
import './index.css'

// create app in Vue
const app = createApp(App);

// using plugin
app.use(Toast);

// using router
app.use(router)

// using store
app.use(store);

// using mixin
app.mixin(mixins);

// mounting
app.mount('#app');