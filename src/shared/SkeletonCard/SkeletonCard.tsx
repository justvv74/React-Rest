import React from "react";
import styled from "styled-components";

const Container = styled.li`
  position: relative;
  border-radius: 12px;
  width: 224px;
  overflow: hidden;
`;

const ImageBox = styled.div`
  position: relative;
  height: 260px;
  background-color: var(--greyEA);
`;

const TextBox = styled.div`
  padding: 10px 12px;
  background-color: var(--greyF8);
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Price = styled.div`
  border-radius: 8px;
  width: 166px;
  height: 25px;
  background-color: var(--greyEA);
`;

const LikeBtn = styled.div`
  border-radius: 8px;
  width: 25px;
  height: 25px;
  background-color: var(--greyEA);
`;

const Title = styled.p`
  margin-bottom: 10px;
  border-radius: 8px;
  width: 100%;
  height: 16px;
  background-color: var(--greyEA);
`;

const AddressRow = styled.p`
  border-radius: 8px;
  width: 100%;
  height: 16px;
  background-color: var(--greyEA);
`;

const Pagination = styled.div`
  z-index: 100;
  position: absolute;
  bottom: 10px;
  left: 50%;
  margin-left: -28px;
  border-radius: 3px;
  width: 56px;
  height: 8px;
  background-color: var(--greyF8);
`;

export function SkeletonCard() {
  return (
    <Container>
      <ImageBox>
        <Pagination />
      </ImageBox>
      <TextBox>
        <PriceRow>
          <Price />
          <LikeBtn />
        </PriceRow>
        <Title />
        <AddressRow />
      </TextBox>
    </Container>
  );
}
