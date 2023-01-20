import * as THREE from "three";
import Experience from "../Experience";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default class Controls {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.camera = this.experience.camera;
    this.room = this.experience.world.room.actualRoom;
    gsap.registerPlugin(ScrollTrigger);

    this.setPath();
  }

  setPath() {
    console.log(this.sizes.width)
    this.timeline = new gsap.timeline();
    this.timeline.to(this.room.position, {
      x: () => {
        return this.sizes.width * 0.002;
      },
      scrollTrigger:{
        trigger:".first-move",
        markers: true,
        start:"top top",
        end:"bottom bottom",
        scrub:0.7,
        invalidateOnRefresh: true
      }
    });
  }

  resize() {}

  update() {}
}
