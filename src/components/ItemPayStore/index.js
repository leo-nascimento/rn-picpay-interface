import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { Container, ViewAll, TitleItem, ViewAllText } from "./styles";

const ItemPayStore = ({ title }) => {
  return (
    <Container>
      <TitleItem>{title}</TitleItem>
      <ViewAll activeOpacity={0.7}>
        <ViewAllText>Ver todos</ViewAllText>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={26}
          style={{ marginTop: 2 }}
          color={"#25a95d"}
        />
      </ViewAll>
    </Container>
  );
};

export default ItemPayStore;
