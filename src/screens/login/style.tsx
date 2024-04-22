import styled from "styled-components/native";

import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const ContainerView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: ${width * 0.03}px;
`;

export const TextTitle = styled.Text`
  color: ${(props) => props.theme.text};
  font-size: 40px;
`;

export const TxtInput = styled.TextInput`
  width: ${width * 0.7}px;
  height: ${height * 0.075}px;
  border-color: #000000;
  border-width: ${width * 0.01}px;
  background-color: ${(props) => props.theme.inputBg};
  border-radius: ${width * 0.06}px;
  justify-content: center;
  padding-left: ${width * 0.05}px;
  font-size: ${width * 0.06}px;
`;

export const ButtonOpacity = styled.TouchableOpacity`
  border-width: 1px;
  height: ${height * 0.065}px;
  width: ${width * 0.7}px;
  border-radius: ${width * 0.06}px;
  background-color: blue;
  justify-content: center;
  align-items: center;
`;

export const TextLogin = styled.Text`
  color: ${(props) => props.theme.text};
  font-size: 15px;
`;

export const TextCadastrese = styled.Text`
  color: ${(props) => props.theme.text};
  font-size: 15px;
`;
