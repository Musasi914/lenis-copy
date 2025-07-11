import { useGSAP } from "@gsap/react";
import { Button } from "./ui/button";
import gsap from "gsap";
import { useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.from(".hero-title-text", {
      yPercent: 100,
      clipPath: "inset(0 0 100% 0)",
      duration: 1,
      ease: "power2.inOut",
    });
  }, [heroRef]);
  return (
    <section ref={heroRef} className="hero" role="banner" aria-labelledby="hero-title">
      <div className="h-screen container hero-container grid grid-rows-[auto_1fr_auto] py-6">
        <div className="hero-title relative w-full contain-paint">
          <h1 id="hero-title" className="notable text-primary text-[22vw] text-center">
            lorem
          </h1>
          <p className="hero-title-text uppercase text-right font-black text-2xl md:text-6xl">dolor sit amet</p>
        </div>
        <div className="hero-content row-3 flex flex-col gap-4 md:flex-row">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi veritatis asperiores aperiam dolorum ratione consectetur quaerat
            blanditiis ab dignissimos dolorem porro iure accusamus.
          </p>
          <Button aria-label="ドキュメントを開く">Documentation</Button>
          <Button aria-label="スポンサーになる">Sponsor</Button>
        </div>
      </div>
    </section>
  );
}
