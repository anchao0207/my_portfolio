import * as THREE from "three";
import Experience from "../Experience";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ASScroll from "@ashthornton/asscroll";

export default class Controls {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.camera = this.experience.camera;
    this.room = this.experience.world.room.actualRoom;
    this.room.children.forEach((child) => {
      if (child.type === "PointLight") {
        this.pointLight = child;
      }
    });
    this.circleFirst = this.experience.world.floor.circleFirst;
    this.circleSecond = this.experience.world.floor.circleSecond;
    this.circleThird = this.experience.world.floor.circleThird;
    gsap.registerPlugin(ScrollTrigger);

    document.querySelector(".page").style.overflow = "visible"

    this.setSmoothScroll();

    this.setScrollTrigger();
  }

  setupASScroll() {
    // https://github.com/ashthornton/asscroll
    const asscroll = new ASScroll({
      ease: 0.1,
      disableRaf: true,
    });

    gsap.ticker.add(asscroll.update);

    ScrollTrigger.defaults({
      scroller: asscroll.containerElement,
    });

    ScrollTrigger.scrollerProxy(asscroll.containerElement, {
      scrollTop(value) {
        if (arguments.length) {
          asscroll.currentPos = value;
          return;
        }
        return asscroll.currentPos;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      fixedMarkers: true,
    });

    asscroll.on("update", ScrollTrigger.update);
    ScrollTrigger.addEventListener("refresh", asscroll.resize);

    requestAnimationFrame(() => {
      asscroll.enable({
        newScrollElements: document.querySelectorAll(
          ".gsap-marker-start, .gsap-marker-end, [asscroll]"
        ),
      });
    });
    return asscroll;
  }

  setSmoothScroll() {
    this.asscroll = this.setupASScroll();
  }

  setScrollTrigger() {
    ScrollTrigger.matchMedia({
      //Desktop
      "(min-width: 969px)": () => {
        console.log("fired desktop")

        this.room.scale.set(1, 1, 1);
        this.pointLight.distance = 1;

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
          .to(
            this.room.position,
            {
              x: () => {
                return 1;
              },
              z: () => {
                return this.sizes.height * 0.005;
              },
            },
            "same"
          )
          .to(
            this.room.scale,
            {
              x: 3,
              y: 3,
              z: 3,
            },
            "same"
          )
          .to(
            this.pointLight,
            {
              distance: 3,
              intensity: 6,
            },
            "same"
          )
          .to(
            this.pointLight.position,
            {
              x: 0.45,
              y: 1.2,
              z: 1,
            },
            "same"
          );

        // third section ----------------------------------------------------------
        this.thirdMoveTimeline = new gsap.timeline({
          scrollTrigger: {
            trigger: ".third-move",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        }).to(this.camera.orthographicCamera.position, {
          x: 0,
          y: 4,
        });
      },

      //Mobile
      "(max-width: 968px)": () => {
        console.log("fired mobile")
        //reset
        this.room.scale.set(1, 1, 1);
        this.pointLight.distance = 1;

        //first section ----------------------------------------------------------
        this.firstMoveTimeline = new gsap.timeline({
          scrollTrigger: {
            trigger: ".first-move",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        })
          .to(
            this.room.scale,
            {
              x: 1.2,
              y: 1.2,
              z: 1.2,
            },
            "same"
          )
          .to(
            this.pointLight,
            {
              distance: 1.2,
            },
            "same"
          );
        //second section ----------------------------------------------------------
        this.secondMoveTimeline = new gsap.timeline({
          scrollTrigger: {
            trigger: ".second-move",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        })
          .to(
            this.room.scale,
            {
              x: 3,
              y: 3,
              z: 3,
            },
            "same"
          )
          .to(
            this.camera.orthographicCamera.position,
            {
              x: -3.6,
              y: 10,
            },
            "same"
          ).to(
            this.pointLight,
            {
              distance: 3,
              intensity: 6,
            },
            "same"
          );;
        // third section ----------------------------------------------------------
        this.thirdMoveTimeline = new gsap.timeline({
          scrollTrigger: {
            trigger: ".third-move",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        }).to(this.camera.orthographicCamera.position, {
          x: 1.3,
          y: 7,
        });;
      },
      all: () => {
        this.sections = document.querySelectorAll(".section");
        this.sections.forEach((section) => {
          this.progressWrapper = section.querySelector(".progress-wrapper");
          this.progressBar = section.querySelector(".progress-bar");

          if (section.classList.contains("right")) {
            gsap.to(section, {
              borderTopLeftRadius: 50,
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "top top",
                scrub: 0.6,
              },
            });
            gsap.to(section, {
              borderBottomLeftRadius: 500,
              scrollTrigger: {
                trigger: section,
                start: "bottom bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            });
          } else {
            gsap.to(section, {
              borderTopRightRadius: 50,
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "top top",
                scrub: 0.6,
              },
            });
            gsap.to(section, {
              borderBottomRightRadius: 500,
              scrollTrigger: {
                trigger: section,
                start: "bottom bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            });
          }
          gsap.from(this.progressBar, {
            scaleY: 0,
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.4,
              pin: this.progressWrapper,
              pinSpacing: false,
            },
          });
        });

        //Circle animation
        //first section ----------------------------------------------------------
        this.firstMoveTimeline = new gsap.timeline({
          scrollTrigger: {
            trigger: ".first-move",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        }).to(this.circleFirst.scale, {
          x: 3,
          y: 3,
          z: 3,
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
        })
          .to(
            this.circleSecond.scale,
            {
              x: 3,
              y: 3,
              z: 3,
            },
            "same"
          )
          

        // third section ----------------------------------------------------------
        this.thirdMoveTimeline = new gsap.timeline({
          scrollTrigger: {
            trigger: ".third-move",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        })
          .to(this.circleThird.scale, {
            x: 3,
            y: 3,
            z: 3,
          })
          
      },
    });
  }

  resize() {}

  update() {}
}
