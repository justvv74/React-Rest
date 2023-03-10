import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  padding: 50px 0;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
`;

const Descr = styled.p`
  text-align: center;
`;

export function CardModalError() {
  return (
    <Container>
      <Title>Во время загрузки произошла ошибка</Title>
      <Descr>
        Попоробуйте выключить блокировщик рекламы, скорее всего это из-за него
      </Descr>
    </Container>
  );
}
