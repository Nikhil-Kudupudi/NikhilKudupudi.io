<template>
  <section id="experience" class="experience-section">
    <h2 class="section-title">Experience</h2>

    <div class="experience-container">
      <h3 class="sub-section-title">Work Experience</h3>
      <div class="experience-item">
        <div class="company-info">
          <img
            src="../assets/icons/webileapps.jpeg" 
            alt="Webileapps Logo"
            class="company-logo"
          />
          <div class="company-details">
            <h4 class="job-title">Associate Software Engineer</h4>
            <p class="company"><strong>Webileapps</strong>, Hyderabad, India</p>
          </div>
          <p class="duration"><em>Nov 2022 - July 2024</em></p> <!-- Tenure on the right -->
        </div>

        <h5 class="project-title">Projects</h5>
        <div class="project-item">
          <h6>AIF Wealth Management</h6>
          <p class="project-description">
            AIF is a private investment way of investing in equity, mostly managed by individuals or body corporates, offering different investments based on the categories. It has various categories for investments that have different options for capital preservation with high returns, debt, and equity funds, which involve multiple investment managers and trustees.
          </p>
          <ul>
            <li>Executed the minor onboarding flow for investment in schemes, CKYC data, and PAN verification using external API functionalities.</li>
            <li>Developed support functionality for handling encrypted files and Contribution Agreement integration based on a scheme using microservices.</li>
          </ul>
        </div>

        <div class="project-item">
          <h6>Portfolio Management Service (PMS)</h6>
          <p class="project-description">
            PMS is another way of investing with a minimum high investment amount and the flexibility to switch between cash, equity, and risk profile based on market conditions. It provides flexibility to go with various investment strategies and options without necessarily going through investment managers and trustees.
          </p>
          <ul>
            <li>Implemented mapping functionality for schemes to distributors, authorization based on roles, and application status-based email triggering functionality.</li>
            <li>Developed a comprehensive method to understand the risk-based appropriate schemes.</li>
            <li>Performed PDF form integration change based on custodian types.</li>
          </ul>
        </div>
      </div>
    </div>

    <h3 class="sub-section-title">Skills</h3>
    <ul class="skills-list">
      <li v-for="(skill, index) in skills" :key="index">{{ skill }}</li>
    </ul>
  </section>
</template>

<script>
export default {
    name:"ExperienceComponent",
  data() {
    return {
      skills: [
        "Python",
        "JavaScript",
        "Java",
        "React",
        "Node.js",
        "HTML",
        "CSS",
        "SQL",
        "Pandas",
        "NumPy",
        "Communication",
        "Teamwork",
        "Problem-Solving",
      ],
    };
  },
};
</script>

<style scoped>
.experience-section {
  padding: 2rem;
  background: linear-gradient(135deg, #6e7dff, #4ecdc4);
  border-radius: 8px;
  color: rgb(23, 21, 21);
   background-image: url('../assets/experience.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.section-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;
}

.sub-section-title {
  font-size: 1.5rem;
  margin-top: 1.5rem;
  color: #fff;
}

.experience-container {
  margin-bottom: 2rem;
}

.company-info {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Space between logo, details, and tenure */
  margin-bottom: 1rem;
}

.company-logo {
  width: 50px; /* Adjust the size as needed */
  height: auto;
  margin-right: 1rem; /* Space between logo and text */
}

.company-details {
  flex-grow: 1; /* Allow details to take available space */
}

.experience-item {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 6px;
  padding: 1rem;
  margin: 1rem 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.job-title {
  font-weight: bold;
  font-size: 1.25rem;
}

.company {
  color: #444;
}

.duration {
  color: #666;
  text-align: right; /* Right-align the tenure */
}

.project-title {
  font-weight: bold;
  margin-top: 1rem;
}

.project-item {
  margin-top: 1rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
}

.project-description {
  margin: 0.5rem 0;
  color: #333;
}

.skills-list {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skills-list li {
  background-color: rgba(255, 255, 255, 0.8);
  color: #007bff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.skills-list li:hover {
  background-color: rgba(255, 255, 255, 0.9);
}
</style>
