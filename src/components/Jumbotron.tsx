import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Jumbotron() {
  const jumbotronRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      ease: "none",
      scrollTrigger: {
        trigger: jumbotronRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.to(
      ".jumbotron-title-top",
      {
        x: -40,
        xPercent: -100,
        y: -40,
        yPercent: -100,
        duration: 1,
      },
      1
    )
      .to(
        ".jumbotron-title-bottom",
        {
          x: 40,
          xPercent: 100,
          y: 40,
          yPercent: 100,
          duration: 1,
        },
        1
      )
      .to(
        ".jumbotron-title-top",
        {
          opacity: 0,
          duration: 1,
        },
        1.2
      )
      .to(
        ".jumbotron-title-bottom",
        {
          opacity: 0,
          duration: 1,
        },
        1.2
      )
      .fromTo(
        ".jumbotron-bigger-text",
        {
          scale: 0,
        },
        {
          scale: 10,
          duration: 5,
          ease: "power1.in",
        },
        0.5
      )
      .fromTo(
        ".jumbotron-bigger-text",
        {
          opacity: 0.4,
        },
        {
          opacity: 1,
          duration: 3,
        },
        0.5
      )
      .set(
        ".jumbotron-bigger-text",
        {
          opacity: 0,
        },
        8.0
      )
      .to(
        ".jumbotron-scroll-bg",
        {
          scaleX: 1,
          duration: 2,
        },
        5.0
      );
  }, [jumbotronRef]);

  return (
    <section ref={jumbotronRef} className="jumbotron">
      <div className="jumbotron-inner relative h-[1000vh] contain-paint">
        <div className="jumbotron-content sticky top-0 h-screen w-full">
          <div className="jumbotron-title w-full h-full relative">
            <h2 className="h-full w-full px-10 py-10 font-black text-[7vw] notable flex flex-col justify-between">
              <span className="jumbotron-title-top">
                So we build <span className="text-primary">lorem ipsum</span>
              </span>
              <span className="jumbotron-title-bottom self-end">dolor sit amet</span>
            </h2>
            <div
              className="jumbotron-bigger-text text-center text-[20vw] text-white font-black notable abs-center transform-[scale(6)] origin-[47.5%_30%] pointer-events-none"
              aria-hidden="true"
            >
              ENTER <br />
              lorem
            </div>
            <div
              className="jumbotron-scroll-bg bg-white h-screen w-full absolute top-0 left-0 transform-[scaleX(0)]"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
