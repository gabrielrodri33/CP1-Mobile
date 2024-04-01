import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";

export default (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.dados}>
        <View style={styles.nome}>
          <Text style={styles.textNome}>{props.nome}</Text>
        </View>
        <View style={styles.turma}>
          <Text style={styles.textTurma}>
            {props.turma} - RM: {props.rm}
          </Text>
        </View>
        <View style={styles.socialMedia}>
          <Image
            style={styles.icon}
            source={require("../../img/github-logo.png")}
          />
          <Image
            style={styles.icon}
            source={require("../../img/linkedin.png")}
          />
        </View>
      </View>
      <View style={styles.cardFoto}>
        <Image source={props.profilePic} style={styles.Foto} />
      </View>
    </View>
  );
};

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    width: width * 0.85,
    margin: height * 0.02,
  },
  cardFoto: {
    marginLeft: width * 0.02
  },
  Foto: {
    borderRadius: 30,
    width: width * 0.25,
    height: height * 0.2,
  },
  dados: {
    marginTop: 10,
  },
  nome: {
    width: width * 0.55,
    alignItems: "flex-end",
  },
  textNome: {
    fontSize: 23,
  },
  turma: {
    width: width * 0.55,
    alignItems: "flex-end",
  },
  textTurma: {
    fontSize: 15,
  },
  icon: {
    borderRadius: 30,
    width: 50,
    height: 50,
  },
  socialMedia: {
    marginTop: height * 0.07,
    flexDirection: "row",
    alignSelf: "flex-start",
    gap: width * 0.02,
  },
});
