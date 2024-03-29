import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  Image,
  Dimensions
} from "react-native";

export default function Header() {
  return (
    <ScrollView>
      <View style={styles.header}>
        <View style={styles.container}>
          <Image
            style={styles.menuIcon}
            width={undefined}
            height={undefined}
            source={require("../../img/menu.png")}
          />

          <View style={styles.searchBar}>
            <Text style={styles.searchBarText}>Digite aqui</Text>
          </View>

          <Image
            style={styles.shopCarIcon}
            width={undefined}
            height={undefined}
            source={require("../../img/carrinho.png")}
          />
        </View>
      </View>
    </ScrollView>
  );
}
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight * 0.5 : 0,
    backgroundColor: "#6495ed",
    borderColor: "#6495ed",
    borderRadius: width * 0.1,
  },
  container: {
    margin: width * 0.04,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBar: {
    width: width * 0.65,
    height: width * 0.07,
    marginLeft: width * 0.04,
    marginRight: width * 0.02,
    borderWidth: width * 0.004,
    borderRadius: width * 0.04,
    borderColor: "black",
    backgroundColor: "white",
    justifyContent: "center",
  },
  searchBarText: {
    marginLeft: width * 0.04,
  },
  menuIcon: {
    aspectRatio: 1,
    width: width * 0.06,
  },
  shopCarIcon: {
    aspectRatio: 1,
    width: width * 0.09,
  }
});