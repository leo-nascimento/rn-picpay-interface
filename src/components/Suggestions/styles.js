import styled from "styled-components/native";

export const Wrapper = styled.View`
  border-color: #ccc;
  border-bottom-width: 2px;
`;

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: "center",
    paddingLeft: 4,
  },
}))`
  background: #fff;
  height: 130px;
`;
