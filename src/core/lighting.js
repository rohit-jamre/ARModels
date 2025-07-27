// src/core/lighting.js
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

export function addLights(scene) {
  const ambient = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambient);
}
