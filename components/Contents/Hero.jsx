import Image from "next/image";
import React from "react";
import heroImg from "../../public/images/heroimg.png";

const Hero = () => {
  return (
    <section>
      <figure className="image is-3by1">
        <Image
          src={heroImg}
          alt="hero"
          width={1400}
          height={1066}
          style={{ borderRadius: "8px" }}
          priority
        />
      </figure>
    </section>
  );
};

export default Hero;
