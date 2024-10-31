<template>
  <div class="main"> 
  <div class="projects-container">
    <h2>My Projects</h2>
    <div class="project-list">
      <ProjectCard
        v-for="(project, name) in projects"
        :key="name"
        :projectName="name"
        :project="project"
      />
    </div>
  </div>
  </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue';
import { projects } from '../assets/data';

export default {
  name: "ProjectComponent",
  components: {
    ProjectCard
  },
  data() {
    return {
      projects
    };
  }
};
</script>

<style scoped>
.projects-container {
  padding: 20px;
 
}
.main{
   background-image: url('../assets/bg.avif');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.project-list {
  display: flex;
  flex-direction: column; /* Stack cards vertically */
  gap: 160px; /* Space between each card */
  align-items: center; /* Center cards horizontally */
}
</style>
