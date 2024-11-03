<template>
  <div id="app">
    <!-- Jumbotron Section -->
    <div v-if="showJumbotron" class="jumbotron">
      <div class="jumbotron-content">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hello! I'm Nikhil Kudupudi, a passionate Data Scientist with a background in Backend Development and a focus on data analytics.
          Explore my projects and experiences below!
        </p>
        <button @click="hideJumbotron" class="explore-btn">Explore</button>
      </div>
      <div class="jumbotron-image">
        <img src="./assets/aboutbg.jpeg" alt="Welcome" />
      </div>
    </div>

    <!-- Home Component (Hidden initially) -->
    <HomeComponent v-if="!showJumbotron" />
  </div>
</template>

<script>
import HomeComponent from './components/Home.vue';

export default {
  name: 'App',
  components: {
    HomeComponent
  },
  data() {
    return {
      showJumbotron: true, // Controls the visibility of the jumbotron
    };
  },
  methods: {
    hideJumbotron() {
      this.showJumbotron = false;
    }
  }
};
</script>

<style>
#app {
  /* overflow: hidden; Hide the scrollbar */
  height: 100vh;
  width: 100vw;
}

/* Jumbotron styling */
.jumbotron {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 40px; */
  background-color: blue;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; /* Full viewport height */
  z-index: 10;
  transition: transform 0.6s ease-in-out;
}

.jumbotron-content {
  max-width: 40%; /* Adjust to ensure image takes 60% */
  padding: 40px;
}

.jumbotron h1 {
  font-size: 3rem;
}

.jumbotron p {
  font-size: 1.5rem;
}

.explore-btn {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #fff;
  color: #007bff;
  border: none;
  cursor: pointer;
}

.jumbotron-image {
  width: 40%; /* Set width to 40% of the jumbotron */
  height: 100%; /* Full height of the jumbotron */
  display: flex; /* Use flexbox to align the image */
  justify-content: flex-end; /* Align image to the right */
  overflow: hidden; /* Prevent overflow */
  padding: 0px;
}

.jumbotron-image img {
  height: 100%; /* Make the image fill the height of the container */
  width: auto; /* Keep the aspect ratio */
  object-fit: cover; /* Cover the entire container */
}

/* Home content styling */
.content {
  padding-top: 100vh; /* Space for content to sit below the jumbotron */
  transition: opacity 0.6s ease-in-out;
  opacity: 1;
}
</style>
