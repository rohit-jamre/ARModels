// src/products/smart-watch.js

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


// SCENE SETUP
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 2;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

// LIGHT
const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

// ✅ GLTFLoader
const loader = new GLTFLoader();
loader.load(
  '/assets/models/smartwatch.glb',
  (gltf) => {
    const model = gltf.scene;
    model.scale.set(1.2, 1.2, 1.2);
    scene.add(model);
  },
  undefined,
  (error) => {
    console.error('Failed to load model:', error);
  }
);


function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
