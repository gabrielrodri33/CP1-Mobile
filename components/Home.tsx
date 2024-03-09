import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Items from "./Items";
import ps4Image from "../img/ps4.png";
import controlImage from "../img/controle_ps4.png";
import ps5Image from "../img/ps5.png";
import controlps5Image from "../img/controle_ps5.png";
import volanteImage from "../img/volante.png";
import cameraImage from  "../img/camera.png";

export default function Home() {
  return (
    <View style={style.container}>

      <Items
        item_image={ps5Image}
        price = "R$3.500,00"
        title = "Playstation 5"
        desc = "Gráficos incríveis, velocidade surpreendente e uma experiência única. Adquira o seu agora e entre na próxima geração de diversão!"
      />

      <Items
        item_image={controlps5Image}
        price = "R$350,00"
        title = "Controle PS5 DUALSENSE"
        desc = "Design inovador, feedback tátil e gatilhos adaptáveis. Mergulhe na próxima geração do gaming. Adquira o seu agora!"
      />

      <Items
        item_image={ps4Image}
        price = "R$2.000,00"
        title = "Playstation 4 PRO"
        desc = "Explore o poder do gaming com o PS4 Pro novo! Gráficos impressionantes e desempenho excepcional. Não perca, adquira já o seu!"
      />

      <Items
          item_image={controlImage}
        price = "R$299,00"
        title = "Controle DUALSHOCK 4"
        desc = "Domine o jogo com o DualShock 4 para PS4! Design ergonômico, resposta precisa e recursos inovadores. Adquira o seu agora e eleve sua experiência de jogo!"
      />

      <Items
        item_image={volanteImage}
        price = "R$1.799,00"
        title = "Volante Logitech g920"
        desc = "Domine o jogo com o DualShock 4 para PS4! Design ergonômico, resposta precisa e recursos inovadores. Adquira o seu agora e eleve sua experiência de jogo!"
      />

      <Items
        item_image={cameraImage}
        price = "R$400,00"
        title = "Câmera HD - PS5"
        desc = "Câmera para PS5: qualidade nítida, fácil de usar. Capture cada momento com estilo. Adquira a sua agora"
      />
    </View>
  );
}

const { width } = Dimensions.get("window");

const style = StyleSheet.create({
  container: {
    marginTop: 5,
    marginHorizontal: width * 0.01,
    paddingHorizontal: 8,
  },
});
