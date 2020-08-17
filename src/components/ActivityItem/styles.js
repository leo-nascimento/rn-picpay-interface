import styled from "styled-components/native";

export const Card = styled.View`
  background: #fff;
  border-radius: 5px;
  padding: 15px;
  margin: 5px 10px;
  border-width: 1px;
  border-color: #e5e5e5;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 20px;
`;

export const Description = styled.Text`
  color: #444547;
  font-size: 15px;
  margin-left: 15px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const CardFooter = styled.View`
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DateLabel = styled.Text`
  color: #ccc;
  margin-left: 5px;
  font-size: 12px;
  font-weight: 500;
`;

export const Actions = styled.View`
  flex-direction: row;
`;

export const Option = styled.TouchableOpacity`
  margin-left: 15px;
  flex-direction: row;
  width: 30px;
`;

export const OptionLabel = styled.Text`
  color: #dfdfe2;
  font-size: 14px;
  margin-left: 5px;
`;
