// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';

import AboutComponent from "./components/About.vue";
import ProjectComponent from "./components/Projects.vue";
import ExperienceComponent from "./components/Experience.vue";
import CertificationComponent from "./components/Certifications.vue";
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
  },
  {
    path: '/experience',
    name:"Experience",
    component:ExperienceComponent
  },
  {
    path:"/certifications",
    name: "Certifications",
    component:CertificationComponent

  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
