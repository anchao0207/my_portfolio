import { EventEmitter } from "events";
import Experience from "./Experience";
import gsap from "gsap";

export default class Preloader extends EventEmitter {
  constructor() {
    super();
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.camera = this.experience.camera;
    this.world = this.experience.world;
    this.device = this.sizes.device;

    this.sizes.on("switchdevice", (device) => {
      this.device = device;
    });

    this.world.on("worldready", () => {
      this.setAsset();
      this.playIntro();
    });
  }

  setAsset() {
    this.room = this.experience.world.room.actualRoom;
    this.roomChildren = this.experience.world.room.roomChildren;
    console.log(this.roomChildren);
  }

  firstIntro() {
    return new Promise((resolve) => {
      this.timeline = new gsap.timeline();

      if (this.device === "desktop") {
        this.timeline
          .to(this.roomChildren.cube.scale, {
            x: 2,
            y: 2,
            z: 2,
            ease: "back.out(2.5)",
            duration: 0.7,
          })
          .to(this.room.position, {
            x: -3,
            ease: "power1.out",
            duration: 0.7,
            onComplete: resolve,
          });
      } else {
        this.timeline
          .to(this.roomChildren.cube.scale, {
            x: 3,
            y: 3,
            z: 3,
            ease: "back.out(2.5)",
            duration: 0.7,
          })
          .to(this.room.position, {
            z: -3,
            ease: "power1.out",
            duration: 0.7,
            onComplete: resolve,
          });
      }
    });
  }

  secondIntro() {
    return new Promise((resolve) => {
      this.secondTimeline = new gsap.timeline();

      if (this.device === "desktop") {
        this.secondTimeline
          .to(
            this.room.position,
            {
              x: 0,
              y: 0,
              z: 0,
              ease: "power1.out",
            },
            "same"
          )
          .to(
            this.roomChildren.cube.rotation,
            {
              y: 2 * Math.PI + Math.PI / 4,
            },
            "same"
          )
          .to(
            this.roomChildren.cube.scale,
            {
              x: 13.5,
              y: 13.5,
              z: 13.5,
            },
            "same"
          )
          .to(
            this.camera.orthographicCamera.position,
            {
              y: 7,
            },
            "same"
          )
          .to(
            this.roomChildren.cube.position,
            {
              x: 0,
              y: 1.23,
              z: 0.012,
            },
            "same"
          )
          .set(this.roomChildren.body.scale, {
            x: 1,
            y: 1,
            z: 1,
          })
          .to(this.roomChildren.cube.scale, {
            x: 0,
            y: 0,
            z: 0,
          }).to(this.roomChildren.sphere004.scale,{
            x:1,
            y:1,
            z:1,
          })
          
        Object.keys(this.roomChildren).forEach((key) => {
          if(key!=="cube")
          this.secondTimeline.to(this.roomChildren[key].scale,{
            x:1,
            y:1,
            z:1,
          },"same2").set(this.roomChildren[key], {visible:true})
        });
      } else {
        this.timeline.to(this.room.position, {
          x: 0,
          y: 0,
          z: 0,
          ease: "power1.out",
          duration: 0.7,
        });
      }
    });
  }

  onScroll(e) {
    if (e.deltaY > 0) {
      window.removeEventListener("wheel", this.scrollOnceEvent);
      this.playSecondIntro();
    }
  }

  async playIntro() {
    await this.firstIntro();
    this.scrollOnceEvent = this.onScroll.bind(this);
    window.addEventListener("wheel", this.scrollOnceEvent);
  }

  async playSecondIntro() {
    await this.secondIntro();
    console.log("continue");
  }
}
