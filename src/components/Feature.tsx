import { forwardRef } from "react";
import FeatureList from "./FeatureList";
import Footer from "./Footer";

const Feature = forwardRef<HTMLDivElement>((_props, ref) => {
  console.log("Feature");
  return (
    <section
      ref={ref}
      className="feature relative text-black min-h-screen after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-16 after:bg-gradient-to-b after:from-white after:to-transparent"
    >
      <div className="container pt-30 mb-30">
        <div className="feature-text text-xl md:text-[4vw] font-black">
          Lorem ipsum dolor sit amet consectetur <span className="text-primary">adipisicing elit.</span> Distinctio quo nostrum provident,
          placeat tempora animi officia recusandae saepe! Totam fugit eum perspiciatis consectetur quia blanditiis temporibus corporis
          minima accusantium amet.
        </div>
      </div>
      <FeatureList />
      <Footer />
    </section>
  );
});

Feature.displayName = "Feature";

export default Feature;
