import {
    View,
    StyleSheet,
    Dimensions
  } from "react-native";
  import React from "react";
  import Items from "../../components/produtos/item";
  
  export default function Produtos() {
    return (
      <View style={style.container}>
  
        <Items
          item_image={require("../../img/ps5.png")}
          price = "R$3.500,00"
          title = "Playstation 5"
          desc = "Gráficos incríveis, velocidade surpreendente e uma experiência única. Adquira o seu agora e entre na próxima geração de diversão!"
        />
  
        <Items
          item_image={require("../../img/controle_ps5.png")}
          price = "R$350,00"
          title = "Controle PS5 DUALSENSE"
          desc = "Design inovador, feedback tátil e gatilhos adaptáveis. Mergulhe na próxima geração do gaming. Adquira o seu agora!"
        />
  
        <Items
          item_image={require("../../img/ps4.png")}
          price = "R$2.000,00"
          title = "Playstation 4 PRO"
          desc = "Explore o poder do gaming com o PS4 Pro novo! Gráficos impressionantes e desempenho excepcional. Não perca, adquira já o seu!"
        />
  
        <Items
            item_image={require("../../img/controle_ps4.png")}
          price = "R$299,00"
          title = "Controle DUALSHOCK 4"
          desc = "Domine o jogo com o DualShock 4 para PS4! Design ergonômico, resposta precisa e recursos inovadores. Adquira o seu agora e eleve sua experiência de jogo!"
        />
  
        <Items
          item_image={require("../../img/volante.png")}
          price = "R$1.799,00"
          title = "Volante Logitech g920"
          desc = "Domine o jogo com o DualShock 4 para PS4! Design ergonômico, resposta precisa e recursos inovadores. Adquira o seu agora e eleve sua experiência de jogo!"
        />
  
        <Items
          item_image={require("../../img/camera.png")}
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
      marginTop: width * 0.02,
      marginHorizontal: width * 0.01,
      paddingHorizontal: width * 0.01,
    },
  });