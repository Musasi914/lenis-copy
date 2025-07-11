import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "../hooks/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

export default function Why() {
  console.log("Why");
  const isMobile = useIsMobile();
  const whyRef = useRef<HTMLDivElement>(null);
  const whyTitleRef = useRef<HTMLHeadingElement>(null);

  // タイトル固定のためのGSAP
  useGSAP(() => {
    // モバイルの場合はGSAPを使わない
    if (isMobile) return;

    ScrollTrigger.create({
      trigger: whyTitleRef.current,
      start: "center center",
      endTrigger: whyRef.current,
      end: `bottom center+=${whyTitleRef.current?.clientHeight}px`,
      pin: true,
      pinSpacing: false,
    });
  }, [whyRef, isMobile]);

  // テキストアニメーションのGSAP
  useGSAP(() => {
    gsap.from(".why-title", {
      yPercent: 100,
      clipPath: "inset(0 0 100% 0)",
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".why-title",
        start: "top 90%",
      },
    });
  }, [whyRef]);

  return (
    <section ref={whyRef} className="why py-20">
      <div className="container grid grid-cols-12 gap-8 md:gap-0 md:mt-50">
        <h2
          ref={whyTitleRef}
          className="why-title font-black text-[5vw] border-l-4 border-primary pl-4 notable col-span-full pb-2 md:col-[2/8] w-full md:self-start"
        >
          Why Smooth Scroll?
        </h2>
        <div className="why-content col-span-full md:col-[8/12] space-y-20 md:space-y-50">
          <div className="why-content-item">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui adipisci molestiae iure nisi, saepe ab ipsa atque laudantium
              eius, vero quidem mollitia corporis autem, voluptates nesciunt sit distinctio deserunt ducimus?
            </p>
          </div>
          <section className="why-content-item">
            <h3 className="text-2xl font-bold text-primary mb-2">Create More Immersive Interfaces</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad et voluptate quasi eaque tenetur sint? Ut, labore. Quis aliquid
              fuga aut debitis adipisci vitae? Numquam culpa doloremque harum sed corporis.
            </p>
          </section>
          <section className="why-content-item">
            <h3 className="text-2xl font-bold text-primary mb-2">Normalize all your user inputs</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure libero dolorum asperiores sapiente voluptatum, earum aperiam
              quidem molestias similique enim soluta aspernatur praesentium et? Similique error repudiandae assumenda dicta soluta!
            </p>
          </section>
          <section className="why-content-item">
            <h3 className="text-2xl font-bold text-primary mb-2">Make your animations flawless</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quod aspernatur possimus dolor enim, molestias obcaecati quis
              recusandae voluptates at nostrum blanditiis modi eligendi facilis quaerat sapiente necessitatibus, dicta esse.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
