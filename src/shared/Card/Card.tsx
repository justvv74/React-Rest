import React from "react";
import { IItem } from "../CardsList/GenericCardsList";
import { CardSwiper } from "./CardSwiper";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ICard {
  data: IItem;
}

const Container = styled.li`
  position: relative;
  border-radius: 12px;
  width: 224px;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

const TextBox = styled.div`
  position: relative;
  padding: 10px 12px;
`;

const Title = styled.p`
  margin-bottom: 10px;
  font-weight: 500;
`;

const PriceRow = styled.p`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Price = styled.span`
  font-size: 22px;
  line-height: 25px;
  font-weight: 700;
`;

const LikeBtn = styled.button`
  z-index: 100;
  position: relative;
  transition: transform 0.1s linear;

  & svg path {
    transition: color 0.1s linear;
  }

  & svg path {
    color: var(--greyC7);
  }

  &:hover {
    transform: scale(1.1);
  }

  &:active svg path {
    color: var(--blue);
  }
`;

const AddressRow = styled.p`
  display: flex;
  justify-content: space-between;
`;

const Address = styled.span`
  color: var(--grey8F);
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
`;

const Time = styled.time`
  color: var(--grey8F);
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
`;

const Seen = styled.div`
  z-index: 100;
  position: absolute;
  top: 12px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`;

const SeenText = styled.p`
  border-radius: 8px;
  padding: 5px 8px;
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
  background-color: var(--white);
`;

const StyledLink = styled(Link)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export function Card({ data }: ICard) {
  return (
    <Container>
      <CardSwiper />
      <TextBox>
        <PriceRow>
          <Price>{`${data.price} ₽`}</Price>
          <LikeBtn>
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.4321 9.21218C18.5975 11.5152 12.8243 16.697 10.0421 19C7.60767 16.8889 2.42577 12.206 1.17376 10.3636C-0.391238 8.06056 -0.391267 4.60649 1.17375 2.3033C2.30214 0.642681 4.3037 0.000281163 5.86877 0C7.64008 -0.000318142 10.0421 2.30302 10.0421 2.30302C10.0421 2.30302 13.6938 -1.15134 17.3455 1.15179C20.2456 2.98093 20.4755 6.33341 19.4321 9.21218Z"
                fill="currentColor"
              />
            </svg>
          </LikeBtn>
        </PriceRow>
        <Title>{data.title}</Title>
        <AddressRow>
          <Address>{data.address?.replace(/\d/g, "")}</Address>
          <Time
            dateTime={
              (data.createdAt?.substring(0, 10),
              data.createdAt?.substring(11, 16))
            }
          >
            {`${data.createdAt
              ?.substring(0, 10)
              .replace(/-/g, ".")}, ${data.createdAt
              ?.substring(11, 16)
              .replace(/:/g, ".")}`}
          </Time>
        </AddressRow>
        <StyledLink to={`/${data.id}`}></StyledLink>
      </TextBox>
      {data.seen && (
        <Seen>
          <SeenText>Просмотрено</SeenText>
        </Seen>
      )}
    </Container>
  );
}
