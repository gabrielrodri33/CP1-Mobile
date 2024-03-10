import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.text}>Developed by:</Text>
        </View>
        <View style={styles.item}>
          <Text>Juan de Godoy</Text>
          <Text>RM: 551408</Text>

          <View style={styles.socialMedia}>
            <Image
              style={[styles.img, styles.github]}
              height={undefined}
              width={undefined}
              source={require("../../img/github-logo.png")}
            />
            <Image
              style={[styles.img, styles.linkedin]}
              height={undefined}
              width={undefined}
              source={require("../../img/linkedin.png")}
            />
          </View>
        </View>
        <View style={styles.item}>
          <Text>Gabriel Siqueira</Text>
          <Text>RM: 98626</Text>

          <View style={styles.socialMedia}>
            <Image
              style={[styles.img, styles.github]}
              height={undefined}
              width={undefined}
              source={require("../../img/github-logo.png")}
            />
            <Image
              style={[styles.img, styles.linkedin]}
              height={undefined}
              width={undefined}
              source={require("../../img/linkedin.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  footer: {
    paddingVertical: width * 0.04,
    width: width,
    backgroundColor: "#6495ed",
    // padding: width * 0.03,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: width * 0.04,
    width: width,
  },
  item: {
    alignItems: "center",
    alignContent: "center",
    width: width * 0.3
  },
  img: {
    aspectRatio: 1,
    width: width * 0.05,
  },
  socialMedia: {
    flexDirection: "row",
    justifyContent: "center",
    gap: width * 0.03,
  },
  github:{
    borderRadius: width * 0.1,
    backgroundColor: 'white',
  },
  linkedin:{
    borderRadius: width * 0.01,
    backgroundColor: 'white',
  },
  text: {
    fontSize: width * 0.04,
  },
});