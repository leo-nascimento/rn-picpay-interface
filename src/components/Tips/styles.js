import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 16,
  },
}))`
  margin: 7px 0;
`;

export const Option = styled.TouchableOpacity`
  background: ${({ bgColor }) => bgColor};
  width: 150px;
  height: 200px;
  border-radius: 8px;
  padding: 15px;
  margin-right: 16px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;

export const Img = styled.Image`
  margin-top: 25px;
  align-self: center;
`;
