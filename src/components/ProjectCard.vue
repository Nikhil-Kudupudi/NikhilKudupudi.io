<template>
  <div class="project-card" @click="flipped = !flipped">
    <div class="project-card-inner" :class="{ flipped }">
      <!-- Front Side of the Card -->
      <div class="project-card-front">
        <div class="project-details">
          <h3>{{ projectName }}</h3>
          <div class="tools-container">
            <img
              v-for="(tool, index) in project.tools"
              :key="index"
              class="tool-icon"
              :src="tool"
              alt="Tool Icon"
            />
          </div>
        </div>
        <img class="project-image" :src="project.image" alt="Project Image" />
      </div>

      <!-- Back Side of the Card -->
      <div class="project-card-back">
        <h3>{{ projectName }}</h3>
        <p><strong>Description:</strong> {{ project.description }}</p>
        <p><strong>Results:</strong> {{ project.results }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    projectName: String,
    project: Object
  },
  data() {
    return {
      flipped: false
    };
  }
};
</script>

<style scoped>
.project-card {
  width: 100%;
  max-width: 1000px;
  height: auto;
  perspective: 1000px;
  cursor: pointer;
  margin: 20px auto;
}

.project-card-inner {
  position: relative;
  width: 100%;
  height: auto; /* Adjust height based on content */
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.project-card-inner.flipped {
  transform: rotateY(180deg);
}

.project-card-front,
.project-card-back {
  position: absolute;
  width: 100%;
  height: auto; /* Set height to auto to adapt to content */
  backface-visibility: hidden;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 20px;
}

.project-card-front {
  background: linear-gradient(to right, #f0f8ff, #e6e6fa);
}

.project-details {
  flex: 1;
  text-align: left;
}

.tools-container {
  display: flex;
  gap: 10px; /* Space between icons */
  margin-top: 10px; /* Space above icons */
}

.tool-icon {
  width: 30px; /* Size of tool icons */
  height: auto; /* Maintain aspect ratio */
}

.project-image {
  width: 150px;
  height: auto;
  border-radius: 8px;
  margin-left: 15px;
}

.project-card-back {
  background-color: #f8f8ff;
  color: #333;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

/* Responsive Adjustments */
@media (max-width: 1000px) {
  .project-card {
    padding: 10px;
  }

  .project-details, .project-image {
    text-align: center;
    margin: 0;
  }
}
</style>
