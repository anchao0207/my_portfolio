import * as THREE from "three";
import Experience from "../Experience";
import GSAP from "gsap";


export default class Room {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.room = this.resources.items.room;
    this.actualRoom = this.room.scene;

    this.lerp = {
      current: 0,
      target: 0,
      ease: 0.1,
    };

    this.setModel();
    this.onMouseMove();
  }

  setModel() {
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
    });

    this.scene.add(this.actualRoom);
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

    this.actualRoom.rotation.y = this.lerp.current
  }
}
