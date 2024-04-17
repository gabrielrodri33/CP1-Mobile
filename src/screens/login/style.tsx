import styled from "styled-components/native";

import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const ContainerView = styled.View`
  flex: 1;
  alignitems: center;
  justifycontent: center;
  gap: ${width * 0.03}px;
`;
export const TextTitle = styled.Text`
  fontsize: ${width * 0.08}px;
  color: ${(props) => props.theme.text};
`;

export const TxtInput = styled.TextInput`
  width: ${width * 0.7}px;
  height: ${height * 0.075}px;
  bordercolor: #000000;
  borderwidth: ${width * 0.01}px;
  backgroundcolor: ${(props) => props.theme.inputBg};
  borderradius: ${width * 0.06}px;
  justifycontent: center;
  paddingleft: ${width * 0.05}px;
  fontsize: ${width * 0.06}px;
`;

export const ButtonOpacity = styled.TouchableOpacity`
  borderwidth: 1px;
  height: ${height * 0.065}px;
  width: ${width * 0.7}px;
  borderradius: ${width * 0.06}px;
  backgroundcolor: blue;
  justifycontent: center;
  alignitems: center;
`;

export const TextLogin = styled.Text`
  color: ${(props) => props.theme.text};
  fontsize: 15px;
`;

export const TextCadastrese = styled.Text`
  color: ${(props) => props.theme.text};
  fontsize: 15px;
`;
