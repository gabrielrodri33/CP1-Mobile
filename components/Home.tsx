import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";

export default function Home() {
  return (
    <View style={style.container}>
      <View style={style.container_item}>
        <View>
          <Image
            source={require("../img/produto (1).png")}
            style={style.tam_image}
          ></Image>
          <Text style={style.price}>R$2.000,00</Text>
        </View>
        <View style={style.text_container}>
          <Text style={style.title_item}>Playstation 4 PRO</Text>
          <Text style={style.desc}>
            Explore o poder do gaming com o PS4 Pro novo! Gráficos
            impressionantes e desempenho excepcional. Não perca, adquira já o
            seu!
          </Text>
          <Image
            source={require("../img/five_stars.png")}
            style={style.tam_stars}
          ></Image>
        </View>
      </View>
    </View>
  );
}

const { width } = Dimensions.get("window");

const style = StyleSheet.create({
  title_item: {
    fontSize: 20,
  },
  text_container: {
    flex: 1,
    marginLeft: 6,
  },
  price: {
    fontSize: 23,
  },
  desc: {
    marginRight: 3,
  },
  container_item: {
    width: width * 0.93,
    height: width * 0.45,
    marginVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    padding: 3,
    flexDirection: "row",
    backgroundColor: "#fafaaa",
  },
  tam_image: {
    marginTop: 5,
    width: width * 0.25,
    height: width * 0.25,
  },
  tam_stars: {
    marginVertical: 10,
    // width: 'auto',
    aspectRatio: 5,
    height: width * 0.04,
  },
  container: {
    marginTop: 5,
    marginHorizontal: width * 0.01,
    paddingHorizontal: 8,
  },
});
