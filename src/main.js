import Vue from 'vue';
import CKEditor from '@ckeditor/ckeditor5-vue2';
import App from './App.vue';
import router from './router';

// Configure CKEditor
Vue.use(CKEditor);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');