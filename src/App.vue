<template>


  <HomeComponent />

 
</template>

<script>
import HomeComponent from './components/Home.vue'

export default {
  name: 'App',
  components: {
    HomeComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
 
}
/* .main{
  background-image: url('./assets/bg.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* Make the background cover the full viewport 
  height: 100vh;
  width: 100vw;
  
  margin: 0;
} 
*/


</style>
