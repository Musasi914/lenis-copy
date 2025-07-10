import Hero from "./components/Hero";
import Why from "./components/Why";
import Rethink from "./components/Rethink";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function App() {
  console.log("App");
  const lenisRef = useRef(null);

  useEffect(() => {
    function update(time: number) {
      // lenisRef.current の型を明示し、lenis プロパティへのアクセスを安全にする
      const lenisInstance = lenisRef.current as { lenis?: { raf: (t: number) => void } } | null;
      lenisInstance?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <>
      <ReactLenis root ref={lenisRef} />
      <div className="scrollbar"></div>
      <div id="smooth-wrapper">
        <div className="main-background"></div>
        <div id="smooth-content" className="min-h-screen">
          <Hero />
          <Why />
          <Rethink />
          <div className="h-screen"></div>
        </div>
      </div>
    </>
  );
}
