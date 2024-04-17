import styled from "styled-components/native";

import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const ContainerItem = styled.View`
    height: ${width * 0.45}px;
    marginVertical: 10px;
    alignItems: center;
    flexDirection: row;
    borderRadius: ${width * 0.01}px;
    padding: ${width * 0.005}px;
    backgroundColor: ${props => props.theme.background};
`;

export const ImagePrice = styled.View`
    width: ${width * 0.35}px;
    alignItems: center;
    justifyContent: center;
    gap: ${width * 0.04}px;
`

export const Price = styled.Text`
    fontSize: ${width * 0.055}px;
    color: ${props => props.theme.text};
`

export const ImageTam = styled.Image`
    marginTop: 5px;
    width: ${width * 0.25}px;
    height: ${width * 0.25}px;
`

export const TextContainer =  styled.View`
    alignItems: center;
    flex: 1;
    margin: ${width * 0.01}px;
`

export const TitleItem = styled.Text`
    fontSize: ${width * 0.05}px;
    color: white;
`

export const ImageStar = styled.Image`
    marginVertical: ${width * 0.035}px;
    aspectRatio: 5;
    height: ${width * 0.04}px;
`

export const TextDesc = styled.Text`
    fontSize: ${width * 0.034}px;
    marginRight: ${width * 0.01}px;
    color: ${props => props.theme.text};
`