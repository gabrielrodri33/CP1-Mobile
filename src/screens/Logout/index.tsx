import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LogOut({ navigation }) {

  async function localUser() {
    let answer = await AsyncStorage.getItem("Local");
    let local = JSON.parse(answer);
    return local
  }

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  async function logOut() {
    if ((await AsyncStorage.getItem("Local")) !== null) {
      await AsyncStorage.setItem("Local", JSON.stringify(user));
      console.log(localUser())
      alert("LogOut efetuado com êxito")
      navigation.navigate("LogIn");
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={logOut}>
        <Text style={{ color: "white", fontSize: 15 }}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
}

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  btn: {
    borderWidth: 1,
    height: height * 0.065,
    width: width * 0.7,
    borderRadius: 20,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
});
