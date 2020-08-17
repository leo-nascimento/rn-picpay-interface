import React from "react";

import { Container, Img, Label } from "./styles";

const SuggestionOption = ({ option }) => {
  return (
    <Container activeOpacity={0.5}>
      <Img source={option.img} />
      <Label>{option.label}</Label>
    </Container>
  );
};

export default SuggestionOption;
