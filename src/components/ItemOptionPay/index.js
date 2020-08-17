import React from "react";

import { SimpleLineIcons } from "@expo/vector-icons";
import {
  Container,
  Img,
  Body,
  Title,
  Desciption,
  IconOpenModal,
} from "./styles";

const ItemOptionPay = ({ option }) => {
  return (
    <Container activeOpacity={0.8}>
      <Img source={option.isObj ? option.image : { uri: option.image }} />
      <Body>
        <Title>{option.title}</Title>
        <Desciption>{option.description}</Desciption>
      </Body>
      <IconOpenModal>
        <SimpleLineIcons name="options-vertical" size={14} />
      </IconOpenModal>
    </Container>
  );
};

export default ItemOptionPay;
