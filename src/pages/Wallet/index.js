import React, { useState, useEffect } from "react";
import { Switch } from "react-native";
import { StatusBar } from "react-native";

import { Feather, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import ActionsWallet from "../../components/ActionsWallet";
import img from "../../images/credit-card.png";

import {
  Container,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  UsedBalance,
  UsedBalanceTitle,
  PaymentMethods,
  Img,
  ChartIcon,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  AddContainer,
  AddLabel,
  UseTicketButton,
  UseTicketLabel,
  UseTicketContainer,
} from "./styles";

const Wallet = ({ navigation }) => {
  const [visible, setVisible] = useState(true);

  const [useBalance, setUseBalance] = useState(true);

  function handleToggleVisibility() {
    setVisible((prevState) => !prevState);
  }

  function handleToggleUseBalance() {
    setUseBalance((prevState) => !prevState);
  }

  useEffect(() => {
    navigation.addListener("focus", () => {
      StatusBar.setBackgroundColor("#4ee07e");
    });
  }, []);

  useEffect(() => {
    const color = useBalance ? "#4ee07e" : "#A9A9A9";

    StatusBar.setBackgroundColor(color);
    navigation.addListener("focus", () => {
      StatusBar.setBackgroundColor(color);
    });
  }, [useBalance]);

  return (
    <Container>
      <Header
        start={[1, 0.5]}
        colors={useBalance ? ["#4ee07e", "#12ba62"] : ["#A9A9A9", "#696969"]}
      >
        <HeaderContainer>
          <Title>Saldo PicPay</Title>
          <ChartIcon>
            <Feather name="bar-chart" size={20} color={"#fff"} />
          </ChartIcon>

          <BalanceContainer>
            <Value>
              R$ <Bold>{visible ? "342,00" : "-------"}</Bold>
            </Value>

            <EyeButton onPress={handleToggleVisibility}>
              <Feather
                name={visible ? "eye" : "eye-off"}
                size={28}
                color={"#fff"}
              />
            </EyeButton>
          </BalanceContainer>
          <Info>Seu saldo está rendendo 100% do CDI</Info>
          <Actions>
            <ActionsWallet icon={"cash"} label={"Adicionar"} />
            <ActionsWallet icon={"bank"} label={"Retirar"} />
          </Actions>
        </HeaderContainer>

        <UsedBalance>
          <UsedBalanceTitle>Usar saldo ao pagar</UsedBalanceTitle>
          <Switch
            value={useBalance}
            trackColor={{ true: "#0fc46d", false: "grey" }}
            onValueChange={handleToggleUseBalance}
          />
        </UsedBalance>
      </Header>

      <PaymentMethods>
        <PaymentMethodsTitle>Formas de Pagamento</PaymentMethodsTitle>
      </PaymentMethods>

      <Card>
        <CardBody>
          <CardDetails>
            <CardTitle>Cadastre seu cartão de crédito</CardTitle>
            <CardInfo>
              Cadastre seu cartão de crédito para poder fazer pagamentos mesmo
              quando não tiver saldo em seu PicPay
            </CardInfo>
          </CardDetails>
          <Img source={img} resizeMode="contain" />
        </CardBody>

        <AddContainer>
          <AntDesign name="pluscircleo" size={25} color={"#4ec491"} />
          <AddLabel>Adicionar cartão de crédito</AddLabel>
        </AddContainer>
      </Card>

      <UseTicketContainer>
        <UseTicketButton activeOpacity={0.7}>
          <MaterialCommunityIcons
            name="bank-outline"
            size={20}
            color={"#5bce99"}
          />
          <UseTicketLabel>Usar código promocional</UseTicketLabel>
        </UseTicketButton>
      </UseTicketContainer>
    </Container>
  );
};

export default Wallet;
