import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { postDataRequestAsync } from "../../store/postData/action";
import { RootState } from "../../store/store";
import { CardModalContent } from "./CardModalConent/CardModalContent";
import { CardModalError } from "./CardModalError";

export interface ICardModal {
  data: {
    price: number;
    title: string;
    seen: boolean;
    createdAt: string;
    about: string;
    address: string;
  };
}

const Container = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
  margin: 0 auto;
  padding: 100px;
  max-width: 1500px;

  @media (max-width: 1024px) {
    padding: 70px 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 50px 10px;
  }
`;

const BackBtn = styled(Link)`
  position: absolute;
  top: 50px;
  left: 100px;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 1024px) {
    top: 30px;
    left: 20px;
  }

  @media (max-width: 768px) {
    top: 20px;
    left: 10px;
  }
`;

export function CardModal({ data }: ICardModal) {
  const loadingError = useSelector<RootState>((state) => state.postData.error);

  const id = document.location.pathname.substring(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postDataRequestAsync(id));
  }, []);

  const node = document.getElementById("modal-root");
  if (!node) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <Container>
        <BackBtn to="/">Назад</BackBtn>
        {loadingError ? <CardModalError /> : <CardModalContent data={data} />}
      </Container>
    </>,
    node
  );
}
