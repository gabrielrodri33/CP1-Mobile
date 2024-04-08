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
    width: ${width * 0.35};
    alignItems: center;
    justifyContent: center;
    gap: ${width * 0.04}px;
`

export const Price = styled.Text`
    fontSize: ${width * 0.055}px;
    color: ${props => props.theme.color};
`

export const ImageTam = styled.Image`
    marginTop: 5px;
    width: ${width * 0.25}px;
    height: ${width * 0.25}px;
`

export const TextContainer =  styled.View`
    alignItems: center;
    flex: 1;
    marginLeft: 6;
`
// const style = StyleSheet.create({
//   title_item: {
//     fontSize: 17,
//     color: "white",
//   },
//   text_container: {
//     alignItems: 'center',
//     flex: 1,
//     marginLeft: 6,
//   },
//   price: {
//     fontSize: 23,
//     color: "white",
//   },
//   desc: {
//     fontSize: 13,
//     marginRight: 3,
//     color: "white",
//   },
//   container_item: {
//     width: width * 0.93,
//     height: width * 0.45,
//     marginVertical: 10,
//     borderRadius: 6,**
//     alignItems: 'center',
//     padding: 3,**
//     flexDirection: "row",
//     backgroundColor: "#1d1d1d",
//   },
//   image_price:{
//     width: width * 0.35,
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: width * 0.04,
//   },
//   tam_image: {
//     marginTop: 5,
//     width: width * 0.25,
//     height: width * 0.25,
//   },
//   tam_stars: {
//     marginVertical: 10,
//     aspectRatio: 5,
//     height: width * 0.04,
//   },
//   container: {
//     marginTop: 5,
//     marginHorizontal: width * 0.01,
//     paddingHorizontal: width * 0.1,
//   },
// }
// );
