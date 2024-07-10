import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';
import Rules from '../components/Surveys/Rules/Rules.vue';
import Survey from '../components/Surveys/Survey/Survey.vue';
import UserInfoForm from "@/components/Surveys/UserInfoForm/UserInfoForm.vue";

const routes = [
  {
    path: '/',
    name: 'app',
    component: App,
  },
  {
    path: '/rules/:code',
    name: 'rules',
    component: Rules,
    props: true,
  },
  {
    path: '/survey/:code',
    name: 'survey',
    component: Survey,
    props: true,
  },
  {
    path: '/submit',
    name: 'submit',
    component: UserInfoForm,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;