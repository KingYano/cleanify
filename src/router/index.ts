import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue'
import Rules from '../components/Surveys/Rules/Rules.vue';
import Survey from '../components/Surveys/Survey/Survey.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'app',
      component: App
    },
    {
      path: '/rules/:target',
      name: 'rules',
      component: Rules,
      props: true
    },
    {
      path: '/survey/:target',
      name: 'survey',
      component: Survey,
      props: true
    }
  ]
});

export default router;
