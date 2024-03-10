import { StyleSheet, Text, View, Image } from "react-native";
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
            <Text>Gabriel Siqueira Rodrigues</Text>
            <Text>RM: 550548</Text>
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

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    backgroundColor: "powderblue",
    padding: 20,
  },
  container: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    gap: 30,
  },
  item: {
    marginTop: 5,
    alignItems: "center",
  },
  img: {
    width: 15,
    height: 15,
  },
  socialMedia: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10
  },
  text: {
    fontSize: 20,
  }

});
