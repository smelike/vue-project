import Vue from 'vue';
import App from './App';


import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Hello from './components/Hello.vue';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter();

router.map({
  '/hello': {
    component: Hello,
  }
});

router.redirect({
  '*': '/hello',
});

router.start(App, '#app');
/* eslint-disable no-new */
/*
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
*/
