<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light custom-navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">My App</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link" active-class="active" exact>Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/projects" class="nav-link" active-class="active">Projects</router-link>
            </li>
                        <li class="nav-item">
              <router-link to="/experience" class="nav-link" active-class="active">Experience</router-link>
            </li>
                        <li class="nav-item">
              <router-link to="/certifications" class="nav-link" active-class="active">Certifications</router-link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "HomeComponent"
}
</script>

<style>
.nav-link{
    font-size: 18px;
}
.custom-navbar {
  background: linear-gradient(135deg, #eef3f5, #000000);/* Silver gradient *//* Metallic gradient */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); /* Adds shadow to the navbar */
  border-radius: 5px; /* Rounds the edges of the navbar */
  position: relative; /* Needed for the pseudo-elements */
  overflow: hidden; /* Ensures no overflow from border radius */
  padding: 10px 20px; /* Add padding for aesthetics */
}

.custom-navbar::before, .custom-navbar::after {
  content: '';
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  border-radius: 20px; /* Match the navbar's border radius */
  z-index: -1; /* Places the shine behind the navbar */
}

.custom-navbar::before {
  left: -10px; /* Position for left shine */
  right: 10px; /* Position for right shine */
  background: rgba(255, 255, 255, 0.3); /* Light shine effect */
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
}

.custom-navbar::after {
  left: 10px; /* Position for left shadow */
  right: -10px; /* Position for right shadow */
  background: rgba(0, 0, 0, 0.1); /* Dim shine effect */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.navbar-nav .nav-link {
  transition: transform 0.3s, color 0.3s; /* Smooth transitions for effects */
  padding: 10px 15px; /* Add padding for better touch targets */
   text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5); /* Add a slight shadow */
  transition: transform 0.3s, color 0.3s, text-shadow 0.3s; /* Include text shadow in transitions */
  font-size: 24 px;
}

.navbar-nav .nav-link:hover {
  transform: translateY(-3px); /* Lifts the link on hover */
  color: #849bb4; /* Change color on hover */
  text-decoration: none; /* Remove underline */
   transform: translateY(-3px); /* Lifts the link on hover */
  color: #e4e0d2; /* Change color on hover */
  text-shadow: 1px 1px 5px rgba(27, 26, 23, 0.7); /* Bright shadow on hover */
   font-size: 24 px;
}

.navbar-nav .nav-link.active {
  font-weight: bold; /* Highlight the active link */
  color: #0056b3; /* Active link color */
  border-bottom: 2px solid #0056b3; /* Underline active link */
   font-size: 24 px;
}

.navbar-toggler {
  border: none; /* Remove border */
}

.navbar-toggler-icon {
  background-color: #007bff; /* Change the color of the toggle icon */
}

@media (max-width: 768px) {
  .custom-navbar {
    box-shadow: none; /* Remove shadow on mobile for a cleaner look */
  }
  .navbar-nav {
    text-align: center; /* Center nav items on mobile */
  }
  .navbar-nav .nav-link {
    padding: 15px; /* Increase padding for mobile */
  }
}
</style>
