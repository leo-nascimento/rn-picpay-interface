import styled from "styled-components/native";

export const Container = styled.View`
  background: #f0f8ff;
  margin: 5px 10px;
  border-radius: 5px;
  height: 120px;
  flex-direction: row;
  padding: 5px 15px;
  align-items: center;
`;

export const Img = styled.Image``;

export const Details = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 16px;
`;

export const Description = styled.Text`
  color: #000;
  font-size: 13px;
  margin-top: 10px;
  font-weight: 500;
`;
