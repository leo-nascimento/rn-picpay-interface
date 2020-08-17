import React, { useEffect } from "react";
import { StatusBar } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { SETTINGS_OPTIONS as options } from "../../constants/settings";
import {
  Container,
  Header,
  HelpText,
  ImageProfile,
  ProfileUsername,
  ProfileName,
  GoToProfile,
  HeaderOptions,
  ItemSettings,
  TitleSetting,
  SubtitleSetting,
  ExitCard,
  ExitText,
  PicPayVersion,
  GoToProfileText,
  PicPayVersionContainer,
} from "./styles";

const Settings = ({ navigation }) => {
  useEffect(() => {
    navigation.addListener("focus", () => {
      StatusBar.setBackgroundColor("#f2f2f2");
    });
  }, []);

  return (
    <Container>
      <Header>
        <HelpText>Ajuda</HelpText>
        <ImageProfile
          source={{
            uri:
              "https://img.vixdata.io/pd/jpg-large/pt/sites/default/files/bdm/celebridades/perfil-de-leonardo-dicaprio.jpg",
          }}
        />
        <ProfileUsername>@leo.nascimento</ProfileUsername>
        <ProfileName>Leonardo Nascimento</ProfileName>
        <GoToProfile>
          <GoToProfileText>Ver meu perfil</GoToProfileText>
          <MaterialIcons
            name={"keyboard-arrow-right"}
            size={20}
            style={{ marginTop: 3 }}
            color={"#50b388"}
          />
        </GoToProfile>
      </Header>

      {options.map((item) => {
        return item.isHeader ? (
          <HeaderOptions key={item.key}>{item.title}</HeaderOptions>
        ) : (
          <ItemSettings key={item.key} activeOpacity={0.5}>
            <TitleSetting>{item.title}</TitleSetting>
            {item.subtitle && (
              <SubtitleSetting>{item.subtitle}</SubtitleSetting>
            )}
          </ItemSettings>
        );
      })}
      <ExitCard activeOpacity={0.5}>
        <ExitText>Sair</ExitText>
      </ExitCard>
      <PicPayVersionContainer>
        <PicPayVersion>Copy: PicPay para android v 10.19.11</PicPayVersion>
      </PicPayVersionContainer>
    </Container>
  );
};

export default Settings;
