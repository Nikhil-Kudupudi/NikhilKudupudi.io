<template>
  <section id="certifications" class="certifications-section">
    <h2 class="section-title">Certifications</h2>
    <div class="container">
      <div class="row">
        <div class="col-md-6 mb-4" v-for="(certification, index) in certifications" :key="index">
          <div class="card h-100 shadow">
            <div class="card-body">
              <img :src="certification.icon" alt="Icon" class="icon-image me-3" />
              <h5 class="certification-title">{{ certification.title }}</h5>
              <p class="certification-details">
                <strong>{{ certification.organization }}</strong> - <em>{{ certification.date }}</em>
              </p>
            </div>
            <div class="card-footer">
              <button class="btn btn-primary" @mouseover="hoveredIndex = index" >
                View Details
              </button>
              <transition name="fade">
                <p v-if="hoveredIndex === index" class="mt-2 text-muted"><a :href="certification.url"><img :src="certification.image" alt="Badge" width="70" height="70" /></a></p>
              </transition> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name:"CertificationComponent",
  data() {
    return {
      hoveredIndex: null, // Track which certification is hovered
      certifications: [
        {
          title: "SAS Programming 1: Essentials, Digital Badge",
          organization: "SAS Institute",
          date: "July 2022",
          url:"https://www.credly.com/badges/e1e15876-7f8f-4418-a632-62290ac9c859/public_url",
          image:require("../assets/certificates/sas.png"),
          icon:require("../assets/icons/sas.png")
        },
        {
          title: "Python (Basic) Certification",
          organization: "HackerRank",
          date: "Oct 2020",
          url:"https://www.hackerrank.com/certificates/bce10bc41032",
          image:require("../assets/certificates/python.png"),
          icon:require("../assets/icons/hackerrank.png")
        },
        {
          title: "Java (Basic) Certification",
          organization: "HackerRank",
          date: "Oct 2022",
          url:"https://www.hackerrank.com/certificates/1fd7fed7bdad",
          image:require("../assets/certificates/java.png"),
          icon:require("../assets/icons/hackerrank.png")
        },
        {
          title: "Introduction to Programming in C",
          organization: "NPTEL",
          date: "Oct 2019",
          url:"https://archive.nptel.ac.in/content/noc/NOC19/SEM2/Ecertificates/106/noc19-cs42/Course/NPTEL19CS42S12180040191119805.jpg",
          image:require("../assets/certificates/NPTELC.jpeg"),
          icon:require("../assets/icons/nptel.jpg")
        },
        {
          title: "Python Data Structures",
          organization: "Coursera",
          date: "Sep 2020",
          url:"https://coursera.org/share/93d05d8aed0855b249efa5c73b1800fe",
          image:require("../assets/certificates/python_DSA.jpg"),
          icon:require("../assets/icons/coursera.svg")
        },
        {
          title: "Intro to Machine Learning",
          organization: "Kaggle",
          date: "Aug 2021",
          url:"https://www.kaggle.com/learn/certification/kudupudinikhil/intro-to-machine-learning",
          image:require("../assets/certificates/ML_kaggle.png"),
          icon:require("../assets/icons/kaggle.png")
        },
        {
          title: "Software Engineering Virtual Experience",
          organization: "JP Morgan Chase & Co through Forage",
          date: "Oct 2022",
          url:"https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_SiWzS86nWxM5ofHnK_1666507344812_completion_certificate.pdf",
          image:require("../assets/certificates/forage.jpg"),
          icon:require("../assets/icons/forage.png")
        },
        {
          title: "Contributor, Hug-bot repository",
          organization: "HacktoberFest, GitHub",
          date: "Oct 2022",
          url:"https://holopin.io/@nikhilkudupudi",
          image:require("../assets/certificates/hacktoberfest.png"),
          icon:require("../assets/icons/hacktoberfest.png")
        },
      ],
    };
  },
};
</script>

<style scoped>
.icon-image {
  width: 40px; /* Adjust size as needed */
  height: 40px;
  border-radius: 50%; /* Optional: for circular icons */
}
.certifications-section {
  padding: 2rem;
  background: linear-gradient(135deg, #6e7dff, #4ecdc4);
  border-radius: 8px;
  color: white;
   background-image: url('../assets/certificates.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.section-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;
}

.certification-title {
  font-weight: bold;
  font-size: 1.25rem;
}

.certification-details {
  color: #444;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
