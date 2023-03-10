import * as THREE from "three";
import Experience from "../Experience";

export default class Room {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.setFloor();
    this.setCircles();
  }

  setFloor() {
    this.geometry = new THREE.PlaneGeometry(100, 100);
    this.material = new THREE.MeshStandardMaterial({
      color: 0x98facf,
    });
    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.plane.rotation.x = -Math.PI / 2;
    this.plane.position.y = -0.5;
    this.plane.receiveShadow = true;
    this.scene.add(this.plane);
  }

  setCircles() {
    const geometry = new THREE.CircleGeometry(10, 64);
    const material = new THREE.MeshStandardMaterial({ color: 0x79d8ad });
    const material2 = new THREE.MeshStandardMaterial({ color: 0xd984b1 });
    const material3 = new THREE.MeshStandardMaterial({ color: 0xd99c6f });
    const material4 = new THREE.MeshStandardMaterial({ color: 0x79d8ad });
    this.circleFirst = new THREE.Mesh(geometry, material);
    this.circleSecond = new THREE.Mesh(geometry, material2);
    this.circleThird = new THREE.Mesh(geometry, material3);
    this.circleFourth = new THREE.Mesh(geometry, material4);
    this.circleFirst.position.y=-0.49
    this.circleSecond.position.y=-0.48
    this.circleSecond.position.x=1
    this.circleThird.position.y=-0.47
    this.circleFourth.position.y=-0.46
    this.circleFirst.scale.set(0,0,0)
    this.circleSecond.scale.set(0,0,0)
    this.circleThird.scale.set(0,0,0)
    this.circleFourth.scale.set(0,0,0)
    this.circleFirst.rotation.x = this.circleSecond.rotation.x = this.circleThird.rotation.x = this.circleFourth.rotation.x = -Math.PI/2;
    this.circleFirst.receiveShadow = this.circleSecond.receiveShadow = this.circleThird.receiveShadow = this.circleFourth.receiveShadow = true;

    this.scene.add(this.circleFirst);
    this.scene.add(this.circleSecond);
    this.scene.add(this.circleThird);
    this.scene.add(this.circleFourth);
  }

  resize() {}

  update() {}
}
