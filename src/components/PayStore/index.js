import React from "react";

import {
  STORES,
  TVS,
  DONATIONS_CENTER,
  GAMES,
  MUSICS,
} from "../../constants/stores";
import ItemOptionPay from "../ItemOptionPay";
import ItemPayStore from "../ItemPayStore";
import { Container, Item, TitleItem, ViewAll, ViewAllText } from "./styles";

const PayLocale = () => {
  return (
    <Container>
      <ItemPayStore title={"Central de Doações"} />
      {DONATIONS_CENTER.map((item) => {
        return <ItemOptionPay key={item.key} option={item} />;
      })}

      <ItemPayStore title={"Lojas"} />
      {STORES.map((item) => {
        return <ItemOptionPay key={item.key} option={item} />;
      })}

      <ItemPayStore title={"Games"} />
      {GAMES.map((item) => {
        return <ItemOptionPay key={item.key} option={item} />;
      })}

      <ItemPayStore title={"Música"} />
      {MUSICS.map((item) => {
        return <ItemOptionPay key={item.key} option={item} />;
      })}

      <ItemPayStore title={"TVs"} />
      {TVS.map((item) => {
        return <ItemOptionPay key={item.key} option={item} />;
      })}
    </Container>
  );
};

export default PayLocale;
