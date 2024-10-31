// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';

import AboutComponent from "./components/About.vue";
import ProjectComponent from "./components/Projects.vue";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: AboutComponent,
  },
  {
    path: '/projects',
    name: "Projects",
    component: ProjectComponent
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
