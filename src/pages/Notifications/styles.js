import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const ItemsList = styled.ScrollView``;

export const Navbar = styled.View`
  padding: 15px;
  flex-direction: row;
  align-items: center
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #383e4f;
`;

export const ConfigText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #3bb57f;
`;

export const ConfigNotify = styled.TouchableOpacity``;

export const Item = styled.TouchableOpacity`
  padding: 15px 20px;
  background: ${({ read }) => (read ? "#fff" : "#d3f3de")};
  border-bottom-width: 1px;
  border-color: #c8e5d3;
`;

export const ItemText = styled.Text`
  font-size: 16px;
  font-weight: 100;
  margin-bottom: 10px;
`;

export const ItemTime = styled.Text`
  font-size: 14px;
  color: #a2b0a9;
`;
