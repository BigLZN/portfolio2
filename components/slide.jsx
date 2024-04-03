import { useState } from "react";

function Slide() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const plusSlides = (delta) => {
    setCurrentSlide((prevSlide) => (prevSlide + delta) % 3);
  };

  return (
    <section>
      <div className="slideshow-container">
        <div
          className={
            currentSlide === 0 ? "mySlides fade" : "mySlides fade hidden"
          }
        >
          <img
            src="../iMG/apropos.png"
            style={{ width: "100%" }}
            alt="Slide 1"
            className="slideimg"
          />
        </div>

        <div
          className={
            currentSlide === 1 ? "mySlides fade" : "mySlides fade hidden"
          }
        >
          <img
            src="../iMG/skills.png"
            style={{ width: "100%" }}
            alt="Slide 2"
            className="slideimg"
          />
        </div>

        <div
          className={
            currentSlide === 2 ? "mySlides fade" : "mySlides fade hidden"
          }
        >
          <img
            src="../iMG/contact.png"
            style={{ width: "100%" }}
            alt="Slide 3"
            className="slideimg"
          />
        </div>

        <a className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </a>
      </div>
    </section>
  );
}

export default Slide;
