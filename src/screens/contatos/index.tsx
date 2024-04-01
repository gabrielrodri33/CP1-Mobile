import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";

import Card from "../../components/contatos/card";
import Incard from "../../components/contatos/incard";

export default function Contatos() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.container}>
          <Card
            profilePic={require("../../../img/gabriel-author.jpg")}
            nome="Gabriel Siqueira Rodrigues"
            rm="98626"
            turma="2TDSPF"
          />
          <Incard
            profilePic={require("../../../img/juan-author.jpg")}
            nome="Juan de Godoy"
            rm="551408"
            turma="2TDSPF"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight * 0.5 : 0,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
