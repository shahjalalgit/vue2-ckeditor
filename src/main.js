import Vue from 'vue';
import CKEditor from '@ckeditor/ckeditor5-vue2';
import App from './App.vue';

Vue.use(CKEditor);

new Vue({
  render: h => h(App)
}).$mount('#app');