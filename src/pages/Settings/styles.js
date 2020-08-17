import styled from "styled-components/native";

export const Container = styled.ScrollView`
  background: #f2f2f2;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`;

export const HelpText = styled.Text`
  color: #32bf7c;
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 16px;
  font-weight: bold;
`;

export const ImageProfile = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  border-width: 2px;
  border-color: #e8e8e8;
`;

export const ProfileUsername = styled.Text`
  margin-top: 5px;
  font-size: 22px;
  font-weight: 700;
  color: #676767;
`;

export const ProfileName = styled.Text`
  margin-top: 3px;
  font-size: 15px;
  font-weight: 400;
  color: #bbb;
`;

export const GoToProfile = styled.View`
  flex-direction: row;
`;

export const GoToProfileText = styled.Text`
  margin-top: 3px;
  font-size: 13px;
  font-weight: 600;
  color: #50b388;
`;

export const HeaderOptions = styled.Text`
  margin: 23px 0 12px 20px;
  font-size: 14px;
  font-weight: 700;
  color: #99b9a2;
`;

export const ItemSettings = styled.TouchableOpacity`
  background: #fff;
  padding: 12px 20px;
  border-bottom-width: 1px;
  border-color: #ebebeb;
`;

export const TitleSetting = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: #444;
`;

export const SubtitleSetting = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #a9a9a9;
`;

export const ExitCard = styled.View`
  padding: 15px 20px;
  background: #fff;
  margin-top: 30px;
  border-bottom-width: 3px;
  border-color: #e8e8e8;
`;

export const ExitText = styled.Text`
  color: red;
  font-weight: 600;
`;

export const PicPayVersionContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const PicPayVersion = styled.Text`
  margin: 20px 0 35px 0;
  color: #a9a9a9;
  font-size: 12px;
`;
