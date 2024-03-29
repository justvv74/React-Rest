import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const CardImage = styled.img`
  display: block;
  margin: 0 auto;
  height: 100%;
  object-fit: cover;
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
`;

export function CardSwiper() {
  return (
    <StyledSwiper
      spaceBetween={20}
      slidesPerView={1}
      pagination={true}
      modules={[Pagination]}
    >
      {[1, 2, 3].map((item) => {
        const random = Math.floor(Math.random() * (100000 - 0) + 0);
        return (
          <SwiperSlide key={random}>
            <CardImage
              src={`https://loremflickr.com/320/260?random=${random}`}
              alt="Item"
            ></CardImage>
          </SwiperSlide>
        );
      })}
    </StyledSwiper>
  );
}
