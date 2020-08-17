import React from "react";

import { Wrapper, Container } from "./styles";
import SuggestionOption from "../SuggestionOption";
import { SUGGESTIONS as items } from "../../constants/suggestions";

const Suggestions = () => {
  return (
    <Wrapper>
      <Container>
        {items.map((item) => {
          return <SuggestionOption key={item.key} option={item} />;
        })}
      </Container>
    </Wrapper>
  );
};

export default Suggestions;
