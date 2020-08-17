import React, { useEffect } from "react";
import { StatusBar } from "react-native";

import { NOTIFICATIONS as notifications } from "../../constants/notifications";
import {
  Container,
  Navbar,
  Title,
  ConfigNotify,
  Item,
  ItemText,
  ItemTime,
  ItemsList,
  ConfigText,
} from "./styles";

const Notifications = ({ navigation }) => {
  useEffect(() => {
    navigation.addListener("focus", () => {
      StatusBar.setBackgroundColor("#f2f2f2");
    });
  }, []);

  return (
    <Container>
      <Navbar>
        <Title>Notificações</Title>
        <ConfigNotify activeOpacity={0.6}>
          <ConfigText>Configurar</ConfigText>
        </ConfigNotify>
      </Navbar>
      <ItemsList>
        {notifications.map((item) => {
          return (
            <Item read={item.read} key={item.key} activeOpacity={0.6}>
              <ItemText>{item.description}</ItemText>
              <ItemTime>{item.time}</ItemTime>
            </Item>
          );
        })}
      </ItemsList>
    </Container>
  );
};

export default Notifications;
