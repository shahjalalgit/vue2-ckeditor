import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

// In Vite, environment variables are available on import.meta.env
const BASE_URL = import.meta.env.VITE_APP_BASE_URL || '/';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/editor',
    name: 'Editor',
    component: () => import('../views/EditorView.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: BASE_URL,
  routes
});

export default router;
