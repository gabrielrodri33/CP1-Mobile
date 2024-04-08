import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";

import {
  ContainerItem,
  ImagePrice,
  Price,
  ImageTam,
  TextContainer,
  TitleItem,
  ImageStar,
  TextDesc
} from "./style";

export default (props) => {
  return (
    <ContainerItem>
      <ImagePrice>
        <ImageTam source={props.item_image}></ImageTam>
        <Price>{props.price}</Price>
      </ImagePrice>
      <TextContainer>
        <TitleItem>{props.title}</TitleItem>
        <TextDesc>{props.desc}</TextDesc>
        <ImageStar source={require("../../../img/five_stars.png")}></ImageStar>
      </TextContainer>
    </ContainerItem>
  );
};
