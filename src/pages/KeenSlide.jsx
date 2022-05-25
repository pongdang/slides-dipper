/** @jsxImportSource @emotion/react */

import React from "react";
import "keen-slider/keen-slider.min.css";
// import KeenSlider from "keen-slider";
import { useKeenSlider } from "keen-slider/react";
import { css } from "@emotion/react";
import { useEffect } from "react";

const animation = { duration: 1000 };

export default function KeenSlide() {
  // @see https://keen-slider.io/docs
  const [refCallback, slider] = useKeenSlider({
    loop: true,
    created(s) {
      s.moveToIdx(1, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
  });

  useEffect(() => {
    setTimeout(() => {
      slider.current.moveToIdx(1, true, animation);
    }, 1000);
  }, [slider]);

  return (
    <section css={container}>
      <div ref={refCallback} className='keen-slider'>
        <div className='keen-slider__slide'>1</div>
        <div className='keen-slider__slide'>2</div>
        <div className='keen-slider__slide'>3</div>
      </div>
    </section>
  );
}

const container = css`
  .keen-slider__slide {
    border: 1px solid black;
    height: 300px;
  }
`;
