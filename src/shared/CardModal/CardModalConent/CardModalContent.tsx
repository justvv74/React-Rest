import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../store/store";
import { CardSwiper } from "../../Card/CardSwiper";
import { ICardModal } from "../CardModal";

const Box = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const EmptyBox = styled.div`
  height: 260px;
  width: 50%;
  background-color: var(--greyEA);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TextBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PriceRow = styled.p`
  display: flex;
  justify-content: space-between;
  margin-bottom: auto;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Price = styled.span`
  font-size: 22px;
  line-height: 25px;
  font-weight: 700;
`;

const EmptyPrice = styled.span`
  border-radius: 8px;
  height: 22px;
  width: 50%;
  background-color: var(--greyEA);
`;

const Title = styled.p`
  margin-bottom: 10px;
  font-weight: 500;
`;

const EmptyTitle = styled.span`
  margin-bottom: 10px;
  border-radius: 8px;
  height: 20px;
  width: 100%;
  background-color: var(--greyEA);
`;

const Descr = styled.p`
  margin-bottom: 30px;
  font-weight: 400;
`;

const EmptyDescr = styled.span`
  margin-bottom: 30px;
  border-radius: 8px;
  height: 100px;
  width: 100%;
  background-color: var(--greyEA);
`;

const LikeBtn = styled.button`
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

const EmptyLikeBtn = styled.span`
  border-radius: 8px;
  height: 20px;
  width: 20px;
  background-color: var(--greyEA);
`;

const AddressRow = styled.p`
  justify-self: flex-end;
  display: flex;
  justify-content: space-between;
`;

const Address = styled.span`
  color: var(--grey8F);
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
`;

const EmptyAddress = styled.span`
  border-radius: 8px;
  height: 12px;
  width: 70px;
  background-color: var(--greyEA);
`;

const Time = styled.time`
  color: var(--grey8F);
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
`;

const EmptyTime = styled.span`
  border-radius: 8px;
  height: 12px;
  width: 150px;
  background-color: var(--greyEA);
`;

const Spiner = styled.span`
  position: absolute;
  bottom: 30px;
  left: 50%;
  margin-left: -17px;
  width: 34px;
  height: 34px;
  border: 5px solid #abcfd0;
  border-bottom-color: var(--blue);
  border-radius: 50%;
  line-height: 0;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export function CardModalContent({ data }: ICardModal) {
  const loading = useSelector<RootState, boolean>(
    (state) => state.postData.loading
  );

  return (
    <>
      {!loading ? (
        <Box>
          <CardSwiper />
        </Box>
      ) : (
        <EmptyBox />
      )}
      <TextBox>
        {!loading ? <Title>{data.title}</Title> : <EmptyTitle />}
        {!loading ? <Descr>{data.about}</Descr> : <EmptyDescr />}
        <PriceRow>
          {!loading ? <Price>{`${data.price} ₽`}</Price> : <EmptyPrice />}
          {!loading ? (
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
          ) : (
            <EmptyLikeBtn />
          )}
        </PriceRow>
        <AddressRow>
          {!loading ? (
            <Address>{data.address?.replace(/\d/g, "")}</Address>
          ) : (
            <EmptyAddress />
          )}
          {!loading ? (
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
          ) : (
            <EmptyTime />
          )}
        </AddressRow>
      </TextBox>
      {loading && <Spiner></Spiner>}
    </>
  );
}
