import { useIsMobile } from "@/hooks/useIsMobile";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const rethinkContent = [
  {
    number: "01",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    number: "02",
    title: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    number: "03",
    title: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    number: "04",
    title: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },

  {
    number: "05",
    title: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function Rethink() {
  const rethinkRef = useRef<HTMLDivElement>(null);
  const rethinkHeaderRef = useRef<HTMLDivElement>(null);
  const rethinkContentWrapperRef = useRef<HTMLDivElement>(null);
  const rethinkContentListRef = useRef<HTMLOListElement>(null);

  const isMobile = useIsMobile();

  useEffect(() => {
    if (rethinkContentListRef.current) {
      const width = rethinkContentListRef.current.offsetWidth;
      if (rethinkContentWrapperRef.current) {
        rethinkContentWrapperRef.current.style.height = `${width}px`;
      }
    }
  }, [rethinkContentListRef]);

  useGSAP(() => {
    if (isMobile) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: rethinkHeaderRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    tl.from(
      ".rethink-subtitle",
      {
        y: 100,
      },
      0
    ).fromTo(
      ".rethink-title",
      {
        paddingTop: 0,
        paddingBottom: 100,
      },
      {
        paddingTop: 100,
        paddingBottom: 20,
      },
      0
    );
  }, [rethinkHeaderRef]);

  useGSAP(() => {
    const listWidth = rethinkContentListRef.current?.offsetWidth ?? 0;
    const wrapperWidth = rethinkContentWrapperRef.current?.offsetWidth ?? 0;
    gsap.to(".rethink-content-item", {
      x: `${-listWidth + wrapperWidth}`,
      ease: "none",
      scrollTrigger: {
        trigger: rethinkContentWrapperRef.current,
        start: "top 70%",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, [rethinkContentWrapperRef]);

  // テキストアニメーションのGSAP
  useGSAP(() => {
    gsap.from(".rethink-title", {
      yPercent: 100,
      clipPath: "inset(0 0 100% 0)",
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".rethink-title",
        start: "top 90%",
      },
    });
  }, [rethinkHeaderRef]);

  return (
    <section ref={rethinkRef} className="rethink py-20" aria-labelledby="rethink-title">
      <div ref={rethinkHeaderRef} className="rethink-header container grid grid-cols-12 gap-8 md:gap-0 md:mt-50 md:items-end mb-40">
        <h2
          id="rethink-title"
          className="rethink-title font-black text-[4vw] border-l-4 border-primary pl-4 notable col-span-full pb-2 md:pb-20 md:col-[2/7] w-full md:self-start"
        >
          Rethinking lorem ipsum
        </h2>
        <p className="rethink-subtitle col-span-full md:col-[8/11]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </p>
      </div>

      <div className="rethink-content contain-paint">
        <div ref={rethinkContentWrapperRef} className="rethink-content-wrapper container">
          <ol ref={rethinkContentListRef} className="rethink-content-list inline-flex gap-20 sticky top-[30vh]">
            {rethinkContent.map((item, index) => (
              <li
                key={index}
                className="rethink-content-item aspect-square w-full xs:w-[50dvh] border border-white relative grid grid-rows-[1fr_auto] md:first:ml-[50vw]"
              >
                <span className="rethink-content-item-number absolute top-4 left-4 notable color-primary text-5xl ">{item.number}</span>
                <p className="rethink-content-item-text font-black text-xl row-2 pb-4 px-4">{item.title}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
