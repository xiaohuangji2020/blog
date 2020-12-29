import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import '../public/js/clickparticle';
import router from './router';
import store from './store';
import { Radio, Button } from 'element-ui';
import './assets/css/main.less';

Vue.component(Radio.name, Radio);
Vue.component(Button.name, Button);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
