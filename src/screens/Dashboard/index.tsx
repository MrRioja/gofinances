import React from "react";

import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
  LogoutButton,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "positive",
      title: "Website development",
      amount: "R$ 12.000,00",
      category: {
        name: "sales",
        icon: "dollar-sign",
      },
      date: "13/04/2021",
    },
    {
      id: "2",
      type: "negative",
      title: "Pizzy hamburger",
      amount: "R$ 59,00",
      category: {
        name: "food",
        icon: "coffee",
      },
      date: "10/04/2021",
    },
    {
      id: "3",
      type: "negative",
      title: "Apartment rent",
      amount: "R$ 1.200,00",
      category: {
        name: "house",
        icon: "shopping-bag",
      },
      date: "10/04/2021",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/55336456?v=4",
              }}
            />
            <User>
              <UserGreeting>Hello,</UserGreeting>
              <UserName>Luiz Rioja</UserName>
            </User>
          </UserInfo>

          <LogoutButton onPress={() => {}}>
            <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title={"Income"}
          amount={"R$ 17.400,00"}
          lastTransaction={"Last income on April 13th"}
        />
        <HighlightCard
          type="down"
          title={"Outcome"}
          amount={"R$ 1.259,00"}
          lastTransaction={"Last outcome on April 3th"}
        />
        <HighlightCard
          type="total"
          title={"Total"}
          amount={"R$ 16.141,00"}
          lastTransaction={"April 1st to 16th"}
        />
      </HighlightCards>

      <Transactions>
        <Title>Listing</Title>

        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
