import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const CardImage = styled.img`
  height: 260px;
  width: 100%;
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
      {[1, 2, 3, 4, 5].map((item) => {
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
