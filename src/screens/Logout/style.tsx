import styled from "styled-components/native";

import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


export const ContainerView = styled.View`
    flex: 1;
    alignItems: center;
    justifyContent: center;
    gap: 15px;
`

export const ButtonOpacity = styled.TouchableOpacity`
    borderWidth: 1px;
    height: ${height * 0.065}px;
    width: ${width * 0.7}px;
    borderRadius: 20px;
    backgroundColor: blue;
    justifyContent: center;
    alignItems: center;
`

export const TextLogout = styled.Text`
    color: ${props => props.theme.text};
    fontSize: ${width * 0.06}px;
`