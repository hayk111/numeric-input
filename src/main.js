import Vue from 'vue';
import App from './App.vue';
import isNumeric from './custom/directives/is-numeric.directive';

Vue.directive('isNumeric', isNumeric);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
