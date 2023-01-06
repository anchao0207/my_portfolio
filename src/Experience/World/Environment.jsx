import * as THREE from "three";
import Experience from "../Experience";

export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.setSunlight();
  }

  setSunlight() {
    this.sunLight = new THREE.DirectionalLight("#ffffff", 3);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.camera.far = 20;
    this.sunLight.shadow.mapSize.set(2480, 2480);
    this.sunLight.shadow.normalBias = 0.05;
    this.sunLight.position.set(10, 7, 3);
    this.scene.add(this.sunLight);

    this.ambientLight = new THREE.AmbientLight('#FFFFFF',1);
    this.scene.add(this.ambientLight)
  }

  resize() {}

  update() {}
}
