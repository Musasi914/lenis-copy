import Hero from "./components/Hero";
import Why from "./components/Why";
import Rethink from "./components/Rethink";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Jumbotron from "./components/Jumbotron";
import Feature from "./components/Feature";

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

  const featureRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log("!ni");
    if (!featureRef.current) return;
    console.log(featureRef.current);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          // Featureセクションが画面に表示されたらdarkクラスを削除
          document.documentElement.classList.remove("dark");
        } else {
          // Featureセクションが画面から外れたらdarkクラスを追加
          document.documentElement.classList.add("dark");
        }
      });
    });

    observer.observe(featureRef.current);

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, [featureRef]);

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
          <Jumbotron />
          <Feature ref={featureRef} />
        </div>
      </div>
    </>
  );
}
