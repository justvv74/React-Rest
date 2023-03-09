import React from "react";
import styled from "styled-components";
import { Card } from "../../Card/Card";
import { SkeletonCard } from "../../SkeletonCard";

interface IGenericCardsList {
  list: IItem[];
}

export interface IItem {
  id: string;
  about?: string;
  createdAt?: string;
  seen?: boolean;
  price?: number;
  title?: string;
  address?: string;
}

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  padding: 92px 156px 40px;

  @media (max-width: 1400px) {
    padding: 92px 70px 40px;
  }

  @media (max-width: 1024px) {
    padding: 50px;
  }

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

export function GenericCardsList({ list }: IGenericCardsList) {
  const random = () => Math.random().toString(36).substring(2, 15);

  return (
    <Container>
      {list.map((item) =>
        item.id === "0" ? (
          <SkeletonCard key={random()} />
        ) : (
          <Card key={item.id} data={item} />
        )
      )}
    </Container>
  );
}
