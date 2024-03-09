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
            style={styles.userIcon}
            width={undefined}
            height={undefined}
            source={require("../../img/user.png")}
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
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "powderblue",
    borderColor: "powderblue",
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
    height: width * 0.08,
    borderWidth: width * 0.004,
    borderRadius: width * 0.04,
    borderColor: "black",
    backgroundColor: "white",
    justifyContent: "center",
  },
  searchBarText: {
    marginLeft: width * 0.04,
  },
  userIcon: {
    aspectRatio: 1,
    width: width * 0.1,
  },
  shopCarIcon: {
    aspectRatio: 1,
    width: width * 0.09,
  }
});
