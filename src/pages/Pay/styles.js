import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 15px 10px;
`;

export const Search = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background: #e5e5e5;
  width: 300px;
  height: 40px;
  border-radius: 30px;
  text-align: center;
  justify-content: center;
`;

export const SearchPlaceholder = styled.Text`
  font-size: 15px;
  color: #3c464a;
  margin-left: 10px;
  font-weight: 600;
`;
