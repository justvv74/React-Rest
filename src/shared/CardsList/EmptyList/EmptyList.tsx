import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 100px auto 230px;
  width: 246px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 17px;
  line-height: 20px;
  font-weight: 500;
  color: var(--blue);
  text-align: center;
`;

const Text = styled.p`
  text-align: center;
`;

export function EmptyList() {
  return (
    <Container>
      <Title>ОБЪЯВЛЕНИЙ НЕ НАЙДЕНО</Title>
      <Text>
        Простите, по вашему запросу товаров сейчас нет. Задайте запрос
        по-другому или измените характеристики
      </Text>
    </Container>
  );
}
