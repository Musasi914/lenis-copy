import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { featureList } from "../constants/features";

gsap.registerPlugin(ScrollTrigger);

export default function FeatureList() {
  const wrapperRef = useRef(null);

  useGSAP(() => {
    gsap.from(".feature-item:not(:first-child)", {
      y: `+=${window.innerHeight / 3}`,
      x: `+=${window.innerWidth / 3}`,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      stagger: 1,
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: `+=${window.innerHeight * 8}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });
  }, [wrapperRef]);

  return (
    <div
      ref={wrapperRef}
      className="feature-list-wrapper h-screen relative grid grid-cols-12 contain-paint"
      role="region"
      aria-labelledby="feature-title"
    >
      <h2 id="feature-title" className="feature-title notable absolute top-0 col-8 text-4xl pt-10">
        lorem ipsum
      </h2>
      <ol className="feature-list max-h-screen p-10 top-0 col-span-full grid grid-cols-12 grid-rows-12">
        {featureList.map((item) => (
          <li
            key={item.number}
            className={`feature-item bg-white/50 border col-span-4 row-span-4 p-2 flex flex-col justify-between backdrop-blur-sm ${
              item.number === "01"
                ? "col-start-1 row-start-1"
                : item.number === "02"
                ? "col-start-2 row-start-2"
                : item.number === "03"
                ? "col-start-3 row-start-3"
                : item.number === "04"
                ? "col-start-4 row-start-4"
                : item.number === "05"
                ? "col-start-5 row-start-5"
                : item.number === "06"
                ? "col-start-6 row-start-6"
                : item.number === "07"
                ? "col-start-7 row-start-7"
                : item.number === "08"
                ? "col-start-8 row-start-8"
                : "col-start-9 row-start-9"
            }`}
          >
            <span className="feature-item-number text-4xl text-primary font-black notable">{item.number}</span>
            <p className="feature-item-text notable">{item.title}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
