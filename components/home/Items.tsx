import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions
} from "react-native";
import React from "react";

export default props => {
  return (
    <View style={style.container_item}>
      <View style={style.image_price}>
        <Image
          source={props.item_image}
          style={style.tam_image}
        ></Image>
        <Text style={style.price}>{props.price}</Text>
      </View>
      <View style={style.text_container}>
        <Text style={style.title_item}>{props.title}</Text>
        <Text style={style.desc}>
            {props.desc}
        </Text>
        <Image
          source={require("../../img/five_stars.png")}
          style={style.tam_stars}
        ></Image>
      </View>
    </View>
  );
};

const { width } = Dimensions.get("window");

const style = StyleSheet.create({
  title_item: {
    fontSize: 17,
  },
  text_container: {
    alignItems: 'center',
    flex: 1,
    marginLeft: 6,
  },
  price: {
    fontSize: 23,
    // marginVertical: 10,
  },
  desc: {
    fontSize: 13,
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
    backgroundColor: "#F8F8FF",
  },
  image_price:{
    width: width * 0.35,
    alignItems: 'center',
    justifyContent: 'center',
    gap: width * 0.04,
  },
  tam_image: {
    marginTop: 5,
    width: width * 0.25,
    height: width * 0.25,
  },
  tam_stars: {
    marginLeft: width * 0.1,
    marginVertical: 10,
    // width: 'auto',
    aspectRatio: 5,
    height: width * 0.04,
  },
  container: {
    marginTop: 5,
    marginHorizontal: width * 0.01,
    paddingHorizontal: width * 0.1,
  },
});