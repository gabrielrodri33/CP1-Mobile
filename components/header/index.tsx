import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  Image,
} from "react-native";

export default function Header() {
  return (
    <ScrollView>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <Text> Text </Text>
        </View>

        <Image
          style={styles.img}
          width={undefined}
          height={undefined}
          source={require("../../img/carrinho.png")}
        />

        <Image
          style={styles.img}
          width={undefined}
          height={undefined}
          source={require("../../img/user.png")}
        />
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingTop: 25,
    flex: 1,
    width: "100%",
    height: 80,
    flexDirection: "row",
    backgroundColor: "powderblue",
    justifyContent: "space-evenly",
    borderColor: "powderblue",
    borderRadius: 20,
  },
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBar: {
    width: 250,
    height: 30,
    borderColor: "black",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
  },
  img: {
    width: 25,
    height: 25,
  },
});
