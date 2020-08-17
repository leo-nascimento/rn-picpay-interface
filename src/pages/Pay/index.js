import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";

import { TabView, SceneMap } from "react-native-tab-view";

import { MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import PayMain from "../../components/PayMain";
import PayLocale from "../../components/PayLocale";
import PayStore from "../../components/PayStore";
import PayTabs from "../../components/PayTabs";
import { Container, Header, Search, SearchPlaceholder } from "./styles";

const Pay = ({ navigation }) => {
  useEffect(() => {
    navigation.addListener("focus", () => {
      StatusBar.setBackgroundColor("#f2f2f2");
    });
  }, []);

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: "main", title: "Principais" },
    { key: "locale", title: "Locais" },
    { key: "store", title: "Lojas" },
  ]);

  const renderScene = SceneMap({
    main: PayMain,
    locale: PayLocale,
    store: PayStore,
  });

  return (
    <Container>
      <Header>
        <MaterialCommunityIcons
          name="qrcode-scan"
          size={20}
          color={"#10c86e"}
        />
        <Search activeOpacity={0.8}>
          <Fontisto name="search" size={15} color={"#3e474c"} />
          <SearchPlaceholder>Quem você quer pagar?</SearchPlaceholder>
        </Search>
      </Header>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={PayTabs}
      />
    </Container>
  );
};

export default Pay;
