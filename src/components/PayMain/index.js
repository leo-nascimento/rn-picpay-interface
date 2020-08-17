import React from "react";

import { SUGGESTIONS as items } from "../../constants/suggestions";
import { SERVICES, CONTACTS } from "../../constants/mains";
import SuggestionOption from "../SuggestionOption";
import ItemOptionPay from "../ItemOptionPay";
import { Container, TitleItem, SuggestionsContainer } from "./styles";

const PayLocale = () => {
  return (
    <Container>
      <TitleItem>Sugestões para você</TitleItem>
      <SuggestionsContainer>
        {items.map((item) => {
          return <SuggestionOption key={item.key} option={item} />;
        })}
      </SuggestionsContainer>

      <TitleItem>Serviços</TitleItem>
      {SERVICES.map((item) => {
        return <ItemOptionPay key={item.key} option={item} />;
      })}

      <TitleItem>Contatos</TitleItem>
      {CONTACTS.map((item) => {
        return <ItemOptionPay key={item.key} option={item} />;
      })}
    </Container>
  );
};

export default PayLocale;
