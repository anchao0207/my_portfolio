import * as THREE from "three";
import Experience from "../Experience";
import GSAP from "gsap";

export default class Room {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.room = this.resources.items.room;
    this.actualRoom = this.room.scene;
    this.roomChildren = {};

    this.lerp = {
      current: 0,
      target: 0,
      ease: 0.1,
    };

    this.setModel();
    this.setAnimation();
    this.onMouseMove();
  }

  setModel() {
    console.log(this.actualRoom.children);
    this.actualRoom.children.forEach((child) => {
      child.castShadow = true;
      child.receiveShadow = true;

      if (child instanceof THREE.Group) {
        child.children.forEach((groupchild) => {
          groupchild.castShadow = true;
          groupchild.receiveShadow = true;
        });
      }

      if (child.name === "screen1") {
        child.material = new THREE.MeshBasicMaterial({
          map: this.resources.items.screen1,
        });
      }
      if (child.name === "screen2") {
        child.material = new THREE.MeshBasicMaterial({
          map: this.resources.items.screen2,
        });
      }
      if (child.name === "glass1" || child.name === "glass2") {
        child.material = new THREE.MeshPhysicalMaterial();
        child.material.roughness = 0;
        child.material.color.set(0x555555);
        child.material.ior = 3;
        child.material.transmission = 1;
        child.material.opacity = 1;
      }
      if (child.name === "bounds" || child.name === "emiiter") {
        console.log("yes");
        child.material = new THREE.MeshPhysicalMaterial();
        child.material.roughness = 0;
        child.material.color.set(0x549dd2);
        child.material.ior = 3;
        child.material.transmission = 1;
        child.material.opacity = 1;
      }
      if (child.name === "lampglass") {
        console.log(child.position)
        child.material = new THREE.MeshPhysicalMaterial();
        child.material.roughness = 0;
        child.material.color.set(0x549dd2);
        child.material.ior = 3;
        child.material.transmission = 1;
        child.material.opacity = 1;
      }
      if (
        [
          "Sphere004",
          "Sphere005",
          "Sphere006",
          "Sphere007",
          "Sphere008",
          "Sphere009",
          "Sphere010",
          "Sphere011",
          "Sphere012",
          "Sphere013",
          "Sphere014",
        ].includes(child.name)
      ) {
        child.material = new THREE.MeshPhongMaterial();
        child.material.roughness = 0;
        child.material.color.set(0xff1100);
        child.material.specular.set(0xfafafa);
      }

      this.roomChildren[child.name.toLowerCase()] = child;
    });

    const light = new THREE.PointLight(0xff1100, 1, 1);
    light.position.set(0.436536, 1.16978, 0.958114);
    light.shadow = true;
    this.actualRoom.add(light);

    this.roomChildren["pointLight"] = light;

    const sphereSize = 0.1;
    const pointLightHelper = new THREE.PointLightHelper(light, sphereSize);
    this.scene.add(pointLightHelper);

    this.scene.add(this.actualRoom);
  }

  setAnimation() {
    this.mixer = new THREE.AnimationMixer(this.actualRoom);
    this.room.animations.forEach((item) => {
      this.mixer.clipAction(item).play();
    });
  }

  onMouseMove() {
    window.addEventListener("mousemove", (e) => {
      this.rotation =
        ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
      this.lerp.target = this.rotation * 0.05;
    });
  }

  resize() {}

  update() {
    this.lerp.current = GSAP.utils.interpolate(
      this.lerp.current,
      this.lerp.target,
      this.lerp.ease
    );

    this.actualRoom.rotation.y = this.lerp.current;

    this.mixer.update(this.time.delta * 0.0009);
  }
}
