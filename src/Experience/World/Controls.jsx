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

    this.setScrollTrigger();
  }

  setScrollTrigger() {
    ScrollTrigger.matchMedia({
      //Desktop
      "(min-width: 969px)": () => {
        console.log("desktop");

        //first section ----------------------------------------------------------
        this.firstMoveTimeline = new gsap.timeline({
          scrollTrigger: {
            trigger: ".first-move",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });
        this.firstMoveTimeline.to(this.room.position, {
          x: () => {
            return this.sizes.width * 0.002;
          },
        });

        //second section ----------------------------------------------------------
        this.secondMoveTimeline = new gsap.timeline({
          scrollTrigger: {
            trigger: ".second-move",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });
        this.secondMoveTimeline
          .to(this.room.position, {
            x: () => {
              return 1;
            },
            z: () => {
              return this.sizes.height * 0.01;
            },
          },"same")
          .to(this.room.scale, {
            x: 4,
            y: 4,
            z: 4,
          },"same");

        //third section ----------------------------------------------------------
        // this.thirdMoveTimeline = new gsap.timeline({
        //   scrollTrigger: {
        //     trigger: ".third-move",
        //     start: "top top",
        //     end: "bottom bottom",
        //     scrub: 0.8,
        //     invalidateOnRefresh: true,
        //   },
        // });
        // this.thirdMoveTimeline
        //   .to(this.room.position, {
        //     x: () => {
        //       return 1;
        //     },
        //     z: () => {
        //       return this.sizes.height * 0.01;
        //     },
        //   },"same")
        //   .to(this.room.scale, {
        //     x: 4,
        //     y: 4,
        //     z: 4,
        //   },"same");
      },
      //Mobile
      "(max-width: 968px)": () => {
        console.log("mobile");
      },
    });
  }

  resize() {}

  update() {}
}
