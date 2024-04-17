import {
  TouchableOpacity,
  View,
  SafeAreaView,
  useColorScheme,
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  ContainerView,
  TextTitle,
  TxtInput,
  TextLogin,
  ButtonOpacity,
  TextCadastrese,
} from "./style";

export default function Login({ navigation }) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  async function handleSubmit() {
    if ((await AsyncStorage.getItem("Local")) !== null) {
      let answer = await AsyncStorage.getItem("Local");
      let local = JSON.parse(answer);

      if (local.username !== "" && local.password !== "") {
        if (
          local.username === user.username &&
          local.password === user.password
        ) {
          alert("Login efetuado com sucesso!");
          navigation.navigate("Produtos");
        } else {
          alert("Usuario ou senha incorretos!");
        }
      } else {
        alert("Você já fez cadastro?");
      }
    }
  }

  const colorScheme = useColorScheme();

  const theme = colorScheme === "dark" ? "#282928" : "#fff";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme }}>
      <ContainerView>
        <View>
          <TextTitle>Login</TextTitle>
        </View>

        <TxtInput
          placeholder="Username"
          value={user.username}
          autoFocus
          onChangeText={(value) => handleChange("username", value)}
        ></TxtInput>

        <TxtInput
          placeholder="Password"
          value={user.password}
          secureTextEntry
          onChangeText={(value) => handleChange("password", value)}
        ></TxtInput>

        <ButtonOpacity onPress={handleSubmit}>
          <TextLogin>LOGIN</TextLogin>
        </ButtonOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("SigIn")}>
          <TextCadastrese>Não possui um Login? CADASTRE-SE</TextCadastrese>
        </TouchableOpacity>
      </ContainerView>
    </SafeAreaView>
  );
}
