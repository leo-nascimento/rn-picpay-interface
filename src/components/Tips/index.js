import React from "react";

import { Container, Option, Title, Img } from "./styles";
import { TIPS as items } from "../../constants/tips";

const Tips = () => {
  return (
    <Container>
      {items.map((item) => {
        return (
          <Option bgColor={item.bgColor} key={item.key}>
            <Title>{item.label}</Title>
            <Img source={item.img} />
          </Option>
        );
      })}
    </Container>
  );
};

export default Tips;
