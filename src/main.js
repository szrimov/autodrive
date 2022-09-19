import { createApp } from 'vue';
import store from './store';
import 'animate.css';
import './style.css';
import App from './App.vue';

import 'material-design-icons-iconfont';
import Maska from 'maska';

createApp(App).use(store).use(Maska).mount('#app');
