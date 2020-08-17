import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs(() => ({
  showsHorizontalScrollIndicator: false,
}))`
  background: #fff;
`;

export const TitleItem = styled.Text`
  margin: 15px;
  color: #373c47;
  font-size: 14px;
  font-weight: 700;
`;

export const SuggestionsContainer = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: "center",
    paddingLeft: 4,
  },
}))`
  background: #fff;
  height: 120px;
`;
