import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from "react-native";
import React from "react";

import Card from "../../components/contatos/card"

export default function Contatos() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text>Pagina Contatos</Text>
        <Card 
          profilePic = "Foto"
          nome = "Juan"
          rm = "rm551408"
          turma = "2TDSPF"
        />
        <Text>Fim do card</Text>
      </View>
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
