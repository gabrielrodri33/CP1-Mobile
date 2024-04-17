import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";

import Card from "../../components/Devs/card";
import Incard from "../../components/Devs/incard";

export default function Devs() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
