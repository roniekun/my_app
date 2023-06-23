import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styled from "styled-components";
import image1 from "./res/images/1.jpg";
import image2 from "./res/images/2.jpg";
import image3 from "./res/images/3.jpg";

const StyledSliderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const StyledSlide = styled.div`
  display: grid;
  place-items: center;
  height: 400px;
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;


const slideData = [
  { id: 1, image: image1 },
  { id: 2, image: image2 },
  { id: 3, image: image3 },
];

const Autoslider = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <StyledSliderContainer>
      <div>
      <div ref={sliderRef} className="keen-slider">
        {slideData.map((slide) => (
          <StyledSlide
            key={slide.id}
            className={`keen-slider__slide number-slide${slide.id}`}
          >
            <StyledImage src={slide.image} alt={`Slide ${slide.id}`} />
          </StyledSlide>
        ))}
      </div>
      </div>
    </StyledSliderContainer>
  );
};

export default Autoslider;