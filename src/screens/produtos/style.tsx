import styled from "styled-components/native";

import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const ItemView = styled.View`
    marginTop: ${width * 0.02}px;
    marginHorizontal: ${width * 0.01}px;
    paddingHorizontal: ${width * 0.01}px;
`;
