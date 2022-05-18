/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { dataCatImg } from "../data/slickData";

export default function SlickSlide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div css={container}>
      <Slider {...settings}>
        {dataCatImg.map((item) => (
          <div className='cat-card'>
            <img src={item.imgSrc} alt={item.id} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

const container = css`
  background-color: #d8d8d8;
  font-size: 0;
  margin: 20px 0;

  .slick-slider {
    width: 50%;
    margin: 0 auto;
  }

  .cat-card img {
    width: 100%;
  }
`;
