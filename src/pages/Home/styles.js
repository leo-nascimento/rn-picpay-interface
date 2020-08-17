import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.ScrollView`
  background: #fff;
`;

export const Header = styled.View`
  height: 3%;
  padding: 0 10px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const BalanceContainer = styled.View``;

export const BalanceTitle = styled.Text`
  color: #000;
  font-size: 12px;
  text-align: center;
`;

export const Balance = styled.Text`
  color: #000;
  font-size: 17px;
  text-align: center;
  font-weight: bold;
`;

export const IconsRight = styled.View`
  flex-direction: row;
`;

export const Body = styled.View`
  flex-direction: row;
`;

export const ActivitiesText = styled.Text`
  color: #000;
  font-size: 15px;
  font-weight: 700;
  margin-top: 15px;
`;
