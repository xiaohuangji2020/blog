import main from './src/main.vue';
import Vue from 'vue';

const coder = {
  install: function(vue: typeof Vue) {
    vue.component(main.name, main);
  }
};
export default coder;
