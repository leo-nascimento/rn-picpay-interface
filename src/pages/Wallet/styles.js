import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  background: #f2f2f2;
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  height: 300px;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  margin-top: 5px;
`;

export const BalanceContainer = styled.View`
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  color: #fff;
  font-size: 38px;
  font-weight: 100;
`;

export const Bold = styled.Text`
  font-weight: bold;
  font-size: 40px;
`;

export const Info = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 13px;
  font-weight: 400;
`;

export const EyeButton = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const Actions = styled.View`
  flex-direction: row;
  margin-top: 40px;
  padding-bottom: 30px;
`;

export const UsedBalance = styled.View`
  background: #fff;
  height: 60px;
  flex-direction: row;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
`;

export const UsedBalanceTitle = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: 500;
`;

export const PaymentMethods = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;

export const PaymentMethodsTitle = styled.Text`
  color: #868693;
  font-size: 16px;
`;

export const Card = styled.View`
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  margin: 10px 15px;
`;

export const CardDetails = styled.View`
  flex: 1;
  margin-right: 20px;
`;

export const CardTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #000;
`;

export const CardInfo = styled.Text`
  font-size: 12px;
  color: #000;
  margin-top: 10px;
`;

export const Img = styled.Image`
  width: 100px;
`;

export const CardBody = styled.View`
  flex-direction: row;
`;

export const AddContainer = styled.View`
  flex-direction: row;
  margin-top: 25px;
  align-items: center;
`;

export const AddLabel = styled.Text`
  color: #000;
  font-size: 15px;
  font-weight: bold;
  margin-left: 15px;
  color: #4ec491;
`;

export const UseTicketButton = styled.TouchableOpacity`
  flex-direction: row;
`;

export const UseTicketContainer = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const UseTicketLabel = styled.Text`
  color: #5bce99;
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
  text-decoration-line: underline;
`;

export const ChartIcon = styled.View`
  position: absolute;
  border-width: 0.6px;
  border-color: #fff;
  right: 12px;
  top: 12px;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;
