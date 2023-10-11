import { useRef } from "react";

function Hero() {
  const scrollToSection = useRef<HTMLDivElement>(null);

  return (
    <div>
      <h1>You need it? We've got it!</h1>
      <p>
        Welcome to our online-shop with all kinds of goodies and gadgets!
        Explore our many items and enjoy our sweet prices!
      </p>
      <div onClick={() => scrollDown(scrollToSection)}>
        <img src={image} alt="scroll icon" className={styles.scroll} />
      </div>
      <div ref={scrollToSection}></div>
    </div>
  );
}
export default Hero;
