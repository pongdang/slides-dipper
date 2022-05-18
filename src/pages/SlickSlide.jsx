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

    // dots: true,  // 슬라이드 밑에 점 보이게
    // infinite: true,  // 무한으로 반복
    // speed: 500,
    // autoplay: true,
    // autoplaySpeed: 2000,  // 넘어가는 속도
    // slidesToShow: 4,  // 4장씩 보이게
    // slidesToScroll: 1,  // 1장씩 뒤로 넘어가게
    // centerMode: true,
    // centerPadding: '0px',  // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
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
