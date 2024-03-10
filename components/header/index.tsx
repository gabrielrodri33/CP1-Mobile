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

const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "powderblue",
    borderColor: "powderblue",
    borderRadius: 40,
  },
  container: {
    margin: 15,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBar: {
    width: 250,
    height: 30,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "black",
    backgroundColor: "white",
    justifyContent: "center",
  },
  searchBarText: {
    marginLeft: 10
  },
  userIcon: {
    width: 40,
    height: 40,
  },
  shopCarIcon: {
    width: 30,
    height: 30,
  }
});
