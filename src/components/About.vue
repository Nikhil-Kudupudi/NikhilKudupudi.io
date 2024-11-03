<template>
  <div class="main">
    <!-- Background Image -->
    <div class="background-image"></div>

    <!-- Scrollable Content -->
    <div class="content">
      <div class="sections-container">
        <section class="section" id="about">
          <h1 class="section-title">About Me</h1>
          <p>
            Hello! My name is <b>Nikhil Kudupudi</b>. I'm passionate about Data Science, with projects in Autonomous Car Simulation and Heart Disease Analysis.
            Previously a Backend Developer in fintech, my work sparked my interest in data, leading me to pursue a Master’s in Data Analytics.
          </p>
          <p>
            My experience spans Backend Development, Data Science, and Cloud Computing, but Data Science excites me most for its potential in data exploration.
          </p>
        </section>

        <div class="vertical-line"></div> <!-- Vertical Line -->

        <section class="section" id="roadmap">
          <h1 class="section-title">Career Roadmap</h1>
          <div class="roadmap">
            <div class="roadmap-item" v-for="item in roadmap" :key="item.date">
              <div class="roadmap-date">{{ item.date }}</div>
              <div class="roadmap-content">
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </section>

        <div class="vertical-line"></div> <!-- Vertical Line -->

        <section class="section" id="skills">
          <h1 class="section-title">Skills</h1>
          <div class="skills-container">
            <div v-if="loading" class="loader">Loading Skills...</div>
            <div v-else class="skills-grid">
              <div class="skill-item" v-for="skill in skills" :key="skill.name">
                <img :src="skill.icon" alt="" class="skill-icon" />
                <span class="skill-name">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutComponent",
  data() {
    return {
      loading: true, // Loader state
      roadmap: [
        {
          date: "2018 - 2022",
          title: "Bachelor's in Computer Science",
          description: "Completed my undergraduate degree in Computer Science, which laid the foundation for my technical skills.",
        },
        {
          date: "2022 - 2024",
          title: "Associate Software Engineer at Webileapps",
          description: "Worked as an Associate Software Engineer, gaining hands-on experience in fintech projects and backend development.",
        },
        {
          date: "Sep 2024 - Present",
          title: "Master's in Data Analytics Engineering",
          description: "Currently pursuing a Master’s degree in Data Analytics Engineering to deepen my knowledge in data science and analytics.",
        },
      ],
      skills: [
        { name: "Python", icon: "../assets/python-icon.png" },
        { name: "SQL", icon: "../assets/sql-icon.png" },
        { name: "Machine Learning", icon: "../assets/ml-icon.png" },
        { name: "Data Visualization", icon: "../assets/dv-icon.png" },
        { name: "Backend Development", icon: "../assets/backend-icon.png" },
      ],
    };
  },
  mounted() {
    // Simulate a delay for loading the skills
    setTimeout(() => {
      this.loading = false; // Set loading to false after the delay
    }, 500); // Adjust the timeout as necessary
  },
};
</script>

<style>
/* Main container */
.main {
  position: relative;
  overflow-y: auto;
  height: 100vh;
}

/* Background image */
.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/aboutbg.jpeg");
  background-size: cover;
  background-position: center;
  filter: blur(10px);
  z-index: -1;
}

/* Scrollable content container */
.content {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

/* Container for sections */
.sections-container {
  display: flex;
  flex-direction: column; /* Stack sections vertically */
  align-items: center; /* Center the sections */
}

/* Section styling */
.section {
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: none; /* Remove shadow for a cleaner look */
  width: 100%; /* Allow sections to take full width */
}

/* Vertical line */
.vertical-line {
  width: 4px; /* Thickness of the line */
  height: 20px; /* Height of the line */
  background-color: rgba(74, 144, 226, 0.3); /* Light shade */
  margin: 10px 0; /* Space between the sections */
}

/* Section title */
.section-title {
  font-size: 2rem; /* Font size */
  color: #333; /* Dark gray for a techy look */
  margin-bottom: 15px;
  font-weight: 600; /* Medium font weight */
  text-align: center; /* Centered the heading */
  text-transform: uppercase; /* Uppercase text */
  border-bottom: 2px solid rgba(74, 144, 226, 0.6); /* Underline with subtle color */
  padding-bottom: 10px; /* Padding below the text */
}

/* Roadmap styling */
.roadmap {
  display: flex;
  flex-direction: column;
  position: relative;
}

.roadmap-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px; /* Reduced margin for a cleaner look */
  position: relative;
  padding-left: 20px; /* Reduced padding */
}

.roadmap-date {
  font-weight: bold;
  margin-right: 10px;
  color: #555; /* Gray for less emphasis */
}

.roadmap-content {
  background: rgba(74, 144, 226, 0.1);
  padding: 5px 10px; /* Reduced padding for a minimalist look */
  border-radius: 5px;
}

.roadmap-item h3 {
  margin: 0;
  font-size: 1.1rem;
  color: #333;
}

.roadmap-item p {
  margin: 5px 0 0;
  font-size: 0.85rem; /* Smaller font size for less emphasis */
  color: #777; /* Light gray for less emphasis */
}

/* Skills section */
.skills-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.loader {
  font-size: 1.2rem;
  color: #333;
  margin: 20px 0;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap; /* Allows skills to wrap into multiple rows */
  justify-content: center; /* Center the skills items */
  gap: 15px; /* Space between items */
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100px; /* Adjust as needed */
  padding: 10px;
  border-radius: 10px; /* Rounded corners */
  background: rgba(255, 255, 255, 0.9); /* Light background */
  transition: transform 0.2s ease; /* Smooth hover effect */
}

.skill-item:hover {
  transform: translateY(-3px); /* Lift effect on hover */
}

.skill-icon {
  width: 40px; /* Set icon size */
  height: 40px; /* Set icon size */
}

.skill-name {
  margin-top: 5px;
  font-size: 0.9rem; /* Smaller font size for a minimalist look */
  color: #333;
}
</style>
