import React, { useContext, useEffect } from "react";
import { useColorScheme, FlatList, Dimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Rating } from "react-native-elements";

import ItensContext from "../../context/ItensContext";

import {
  ContainerItem,
  ImagePrice,
  Price,
  ImageTam,
  TextContainer,
  TitleItem,
  ImageStar,
  TextDesc,
} from "./style";

import styled from "styled-components/native";

export default function Produtos() {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? "#363636" : "#fff";
  const textColor = colorScheme === "dark" ? "#fff" : "#000";

  const { estado } = useContext(ItensContext);

  const StyledView = styled.View`
    background-color: black;
  `;

  function getItens({ item }) {
    return (
      <ContainerItem>
        <ImagePrice>
          <ImageTam source={item.image}></ImageTam>
          <Price>{item.price}</Price>
        </ImagePrice>
        <TextContainer>
          <TitleItem>{item.title}</TitleItem>
          
          {/* <Rating
            fractions={0.2}
            startingValue={item.rating}
            ratingBackgroundColor= "#363636"
            imageSize={22}
          /> */}
          <ImageStar source={require("../../../img/five_stars.png")}></ImageStar>
          <TextDesc>{item.desc}</TextDesc>
        </TextContainer>
      </ContainerItem>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme }}>
      <FlatList
        data={estado.DadosItens}
        renderItem={getItens}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}
