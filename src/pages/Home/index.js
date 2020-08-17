import React, { useState, useEffect } from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { StatusBar } from "react-native";

import { TabView, SceneMap } from "react-native-tab-view";
import Suggestions from "../../components/Suggestions";
import AllActivities from "../../components/AllActivities";
import MyActivities from "../../components/MyActivities";
import SuggestionTabs from "../../components/SuggestionTabs";
import ActivityTabs from "../../components/ActivityTabs";
import {
  Wrapper,
  Container,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
  IconsRight,
  Body,
  ActivitiesText,
} from "./styles";

const Home = ({ navigation }) => {
  useEffect(() => {
    navigation.addListener("focus", () => {
      StatusBar.setBackgroundColor("#fff");
    });
  }, []);

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: "suggestion", title: "Sugestões" },
    { key: "favorites", title: "Favoritos" },
  ]);

  const renderScene = SceneMap({
    suggestion: Suggestions,
    favorites: Suggestions,
  });

  const [index2, setIndex2] = useState(0);

  const [routes2] = useState([
    { key: "all", title: "Todos" },
    { key: "mys", title: "Minhas" },
  ]);

  const renderScene2 = ({ route }) => {
    switch (route.key) {
      case "all":
        return AllActivities({ isActiveTab: index2 === 0 });
      case "mys":
        return MyActivities({ isActiveTab: index2 === 1 });
    }
  };

  return (
    <Container>
      <Wrapper>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={20}
            color={"#10c86e"}
          />

          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$ 342,00</Balance>
          </BalanceContainer>

          <IconsRight>
            <AntDesign name="gift" size={20} color={"#10c86e"} />
            <MaterialCommunityIcons
              name="percent"
              size={20}
              color={"#10c86e"}
              style={{ marginLeft: 15 }}
            />
          </IconsRight>
        </Header>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={SuggestionTabs}
        />
        <Body>
          <TabView
            navigationState={{ index: index2, routes: routes2 }}
            renderScene={renderScene2}
            onIndexChange={setIndex2}
            renderTabBar={ActivityTabs}
          />
          {/* <ActivitiesText>Atividades</ActivitiesText> */}
        </Body>
      </Wrapper>
    </Container>
  );
};

export default Home;
