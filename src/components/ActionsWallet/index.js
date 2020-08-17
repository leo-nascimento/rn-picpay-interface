import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Container, Label } from "./styles";

const ActionsWallet = ({ label, icon }) => {
  return (
    <Container activeOpacity={0.7}>
      <MaterialCommunityIcons name={icon} size={28} color="#fff" />
      <Label>{label}</Label>
    </Container>
  );
};

export default ActionsWallet;
