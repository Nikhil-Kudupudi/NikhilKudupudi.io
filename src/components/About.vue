<template>
    <div class="main">
     <video autoplay muted loop playsinline class="background-video">
      <source src="../assets/bg-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>


       <div class="content">
        <!-- Left side jumbotron -->

<div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">My name is <b>Nikhil Kudupudi</b>, I'm a passionate about Data, and Currently exploring this field ,did some projects using Data such as Autonomous Cars Simulation, Heart Disease Analysis using Machine Learning .
    I worked as a Backend Developer for a fintech company working there seeing all 
    the visual analytics,hadnling database etc., scenarios  triggered me to pursue Masters in data analytics...So, I want to continue my career in the field of DataScience.</p>
  <hr class="my-4">
  <p>I had explored multiple fields such as Backend Web Developement, Data Science,Cloud.So you can expect some general knowledge in these domains.
    But I get to find the Data Field more intresting due exploration of data. 
  </p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
    <!-- Right side 3D image -->
     <!-- <ThreeDModel /> -->
      <img src="../assets/profile3d.png" alt="3D Model"  width="800 px" class="three-d-image" />
</div>
  </div>
</template>
<style>
/* Left side jumbotron */
.jumbotron {
  background: rgba(255, 255, 255, 0.8);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* Adds a lifted effect */
  max-width: 50%;
  margin-right: 20px;
}
/* Container for jumbotron and 3D image */
.content {
  display: flex;
  align-items: center;
  z-index: 1; /* Place content above the video */
  padding: 20px;
}

/* Right side 3D image */
.three-d-image {
  width: 500 px; /* Set a larger fixed width */
  height: auto; /* Maintain aspect ratio */
  transform: perspective(1000px) rotateY(-10deg); /* Gives a slight 3D effect */
}
/* Style for the background video */
.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures video covers entire area */
  z-index: -1; /* Places video behind other content */
   filter: blur(10px); /* Adjust the blur intensity as needed */
}
</style>
<script>

export default {
    name:"AboutComponent",
   
}
</script>