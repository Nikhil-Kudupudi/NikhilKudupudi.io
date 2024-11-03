<template>
  <div ref="stlContainer" style="width: 100%; height: 100%;"></div>
</template>

<script>
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

export default {
name:"STLViewer",
  props: {
    stlFilePath: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.initThree();
  },
  methods: {
    initThree() {
      // Set up the scene
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(75, this.$refs.stlContainer.clientWidth / this.$refs.stlContainer.clientHeight, 0.1, 1000);
      this.camera.position.z = 100;

      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(this.$refs.stlContainer.clientWidth, this.$refs.stlContainer.clientHeight);
      this.$refs.stlContainer.appendChild(this.renderer.domElement);

      // Add lighting
      const light = new THREE.DirectionalLight(0xffffff);
      light.position.set(1, 1, 1).normalize();
      this.scene.add(light);

      // Load STL file
      const loader = new STLLoader();
      loader.load(this.stlFilePath, (geometry) => {
        const material = new THREE.MeshPhongMaterial({ color: 0x606060 });
        const mesh = new THREE.Mesh(geometry, material);
        this.scene.add(mesh);
        this.animate();
      });
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
    }
  }
};
</script>

<style scoped>
/* Ensure the container fills the component space */
div {
  width: 100%;
  height: 100%;
}
</style>
