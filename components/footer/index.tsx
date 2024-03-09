import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from "react-native";
import React from "react";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.text}>Developed by:</Text>
        </View>
        <View>
          <View style={styles.item}>
            <Text>Juan de Godoy</Text>
            <Text>RM: 551408</Text>
          </View>
          <View style={styles.socialMedia}>
            <Image
              style={styles.img}
              height={undefined}
              width={undefined}
              source={require("../../img/github-logo.png")}
            />
            <Image
              style={styles.img}
              height={undefined}
              width={undefined}
              source={require("../../img/linkedin.png")}
            />
          </View>
        </View>
        <View>
          <View style={styles.item}>
            <Text>Gabriel Siqueira</Text>
            <Text>RM: 98626</Text>
          </View>
          <View style={styles.socialMedia}>
            <Image
              style={styles.img}
              height={undefined}
              width={undefined}
              source={require("../../img/github-logo.png")}
            />
            <Image
              style={styles.img}
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
    width: "100%",
    backgroundColor: "powderblue",
    padding: width * 0.03,
    alignItems: "flex-end",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: width * 0.04,
  },
  item: {
    marginTop: width * 0.01,
    alignItems: "center",
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
  text: {
    fontSize: width * 0.05,
  },
});
