import * as THREE from "three";
import Experience from "../Experience";
import gsap from "gsap";
import gui from "lil-gui";

export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    // this.gui = new gui({container:document.querySelector(".hero-main")});
    this.obj = {
      colorObj: { r: 0, g: 0, b: 0 },
      intensity: 3,
    };

    this.setSunlight();
    // this.setGUI();
  }

  setGUI() {
    this.gui.addColor(this.obj, "colorObj").onChange(() => {
      this.sunLight.color.copy(this.obj.colorObj);
      this.ambientLight.color.copy(this.obj.colorObj);
      console.log(this.obj.colorObj);
    });
    this.gui.add(this.obj, "intensity", 0, 10).onChange(() => {
      this.sunLight.intensity = this.obj.intensity;
      this.ambientLight.intensity = this.obj.intensity;
    });
  }

  setSunlight() {
    this.sunLight = new THREE.DirectionalLight("#ffffff", 3);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.camera.far = 20;
    this.sunLight.shadow.mapSize.set(2480, 2480);
    this.sunLight.shadow.normalBias = 0.05;
    // const helper = new THREE.CameraHelper(this.sunLight.shadow.camera);
    // this.scene.add(helper);
    this.sunLight.position.set(-2.0, 7, 3);
    this.scene.add(this.sunLight);
    this.ambientLight = new THREE.AmbientLight("#FFFFFF", 1);
    this.scene.add(this.ambientLight);
  }

  switchTheme(theme) {
    if (theme === "dark") {
      gsap.to(this.sunLight.color, {
        r: 0.13725490196078433,
        g: 0.12941176470588237,
        b: 0.27058823529411763,
      });
      gsap.to(this.ambientLight.color, {
        r: 0.13725490196078433,
        g: 0.12941176470588237,
        b: 0.27058823529411763,
      });
      gsap.to(this.sunLight, {
        intensity: 1.58,
      });
      gsap.to(this.ambientLight, {
        intensity: 1.58,
      });
    } else {
      gsap.to(this.sunLight.color, {
        g: 1,
        b: 1,
        r: 1,
      });
      gsap.to(this.ambientLight.color, {
        g: 1,
        b: 1,
        r: 1,
      });
      gsap.to(this.sunLight, {
        intensity: 3,
      });
      gsap.to(this.ambientLight, {
        intensity: 1,
      });
    }
  }

  resize() {}

  update() {}
}
