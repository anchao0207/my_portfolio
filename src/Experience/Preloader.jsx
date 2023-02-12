import { EventEmitter } from "events";
import Experience from "./Experience";
import gsap from "gsap";
import convert from "./Utils/convertDivsToSpans";

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
    convert(document.querySelector(".intro-text"));
    convert(document.querySelector(".hero-main-title"));
    convert(document.querySelector(".hero-main-desc"));
    convert(document.querySelector(".first-sub"));
    convert(document.querySelector(".second-sub"));
    this.room = this.experience.world.room.actualRoom;
    this.roomChildren = this.experience.world.room.roomChildren;
    console.log(this.roomChildren);
  }

  firstIntro() {
    return new Promise((resolve) => {
      this.timeline = new gsap.timeline();
      // this.timeline.set(".animatedis", { y: 0, yPercent: 100 });
      this.timeline.set(".animatedis", {y:0,yPercent:100});
      this.timeline
      .to(".preloader", {
        opacity: 0,
        delay: 1,
        onComplete: ()=> {
          document.querySelector(".preloader").classList.add("hidden")
        }
      })

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
            x: -2,
            ease: "power1.out",
            duration: 0.7,
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
            z: -2,
            ease: "power1.out",
            duration: 0.7,
          });
      }
      this.timeline.to(".intro-text .animatedis", {
        yPercent: 0,
        stagger: 0.05,
        ease: "back.out(1.7)",
        onComplete: resolve,
      }).to(".scroll-svg-wrapper", {
        opacity: 1,
      },"fadein").to(".toggle-bar", {
        opacity: 1,
      },"fadein");
    });
  }

  secondIntro() {
    return new Promise((resolve) => {
      this.secondTimeline = new gsap.timeline();

      // if (this.device === "desktop") {
      this.secondTimeline
        .to(".intro-text .animatedis", {
          yPercent: 100,
          stagger: 0.05,
          ease: "back.in(1.7)",
        },"fadeout").to(".scroll-svg-wrapper", {
          opacity: 0,
        },"fadeout")
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
        .to(
          this.roomChildren.cube.scale,
          {
            x: 0,
            y: 0,
            z: 0,
          },
          "same1"
        )
        .to(
          ".hero-main-title .animatedis",
          {
            yPercent: 0,
            stagger: 0.07,
            ease: "back.in(1.7)",
          },
          "same1"
        )
        .to(
          ".hero-main-desc .animatedis",
          {
            yPercent: 0,
            stagger: 0.07,
            ease: "back.in(1.7)",
          },
          "same1"
        )
        .to(
          ".first-sub .animatedis",
          {
            yPercent: 0,
            stagger: 0.07,
            ease: "back.in(1.7)",
          },
          "same1"
        )
        .to(
          ".second-sub .animatedis",
          {
            yPercent: 0,
            stagger: 0.07,
            ease: "back.in(1.7)",
          },
          "same1"
        );

      Object.keys(this.roomChildren).forEach((key) => {
        if (key !== "cube") {
          this.secondTimeline.to(
            this.roomChildren[key].scale,
            {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(2.2)",
              duration: 1,
            },
            "same2"
          );
        }
      });
      this.secondTimeline.to(
        this.roomChildren.chair.rotation,
        {
          y: 5.4 * Math.PI,
          ease: "power2.out",
          duration: 1.5,
        },
        "same2"
      ).to(this.roomChildren.pointLight,{
        intensity:1,
      },"same2").to(".scroll-svg-wrapper", {
        opacity: 1,
        onComplete: resolve,
      })
    });
  }

  onScroll(e) {
    if (e.deltaY > 0) {
      this.removeEventListeners();
      this.playSecondIntro();
    }
  }

  onTouch(e) {
    this.initalY = e.touches[0].clientY;
  }

  onTouchMove(e) {
    let currentY = e.touches[0].clientY;
    let difference = this.initalY - currentY;
    if (difference > 0) {
      console.log("swipped up");
      this.removeEventListeners();
      this.playSecondIntro();
    }
    this.initalY = null;
  }

  removeEventListeners() {
    window.removeEventListener("wheel", this.scrollOnceEvent);
    window.removeEventListener("touchstart", this.touchStart);
    window.removeEventListener("touchmove", this.touchMove);
  }

  async playIntro() {
    await this.firstIntro();
    this.moveFlag = true;
    this.scrollOnceEvent = this.onScroll.bind(this);
    this.touchStart = this.onTouch.bind(this);
    this.touchMove = this.onTouchMove.bind(this);
    window.addEventListener("wheel", this.scrollOnceEvent);
    window.addEventListener("touchstart", this.touchStart);
    window.addEventListener("touchmove", this.touchMove);
  }

  async playSecondIntro() {
    this.moveFlag = false;
    this.scaleFlag = true;
    await this.secondIntro();
    this.scaleFlag = false;
    this.emit("enablecontrols");
  }

  move() {
    if (this.device === "desktop") {
      this.room.position.set(-2, 0, 0);
    } else {
      this.room.position.set(0, 0, -2);
    }
  }

  scale() {
    if (this.device === "desktop") {
      this.room.scale.set(1, 1, 1);
    } else {
      this.room.scale.set(1, 1, 1);
    }
  }

  update() {
    if (this.moveFlag) {
      this.move();
    }
    if (this.scaleFlag) {
      this.scale();
    }
  }
}
