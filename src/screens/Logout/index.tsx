import { StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ButtonOpacity, ContainerView, TextLogout } from "./style";

export default function LogOut({ navigation }) {
  async function localUser() {
    let answer = await AsyncStorage.getItem("Local");
    let local = JSON.parse(answer);
    return local;
  }

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  async function logOut() {
    if ((await AsyncStorage.getItem("Local")) !== null) {
      await AsyncStorage.setItem("Local", JSON.stringify(user));
      console.log(localUser());
      alert("LogOut efetuado com êxito");
      navigation.navigate("LogIn");
    }
  }

  return (
    <ContainerView>
      <ButtonOpacity onPress={logOut}>
        <TextLogout>LOGOUT</TextLogout>
      </ButtonOpacity>
    </ContainerView>
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
