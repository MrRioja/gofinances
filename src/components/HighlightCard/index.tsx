import React from "react";

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from "./styles";

export function HighlightCard() {
  return (
    <Container>
      <Header>
        <Title>Income</Title>
        <Icon name="arrow-up-circle" />
      </Header>

      <Footer>
        <Amount>R$ 17.400,00</Amount>
        <LastTransaction>Last entry on April 13th</LastTransaction>
      </Footer>
    </Container>
  );
}
