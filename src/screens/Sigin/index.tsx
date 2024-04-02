import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SigIn({ navigation }) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  async function handleSubmit() {
    if (user.username !== "" && user.password !== "") {
      await AsyncStorage.setItem("Local", JSON.stringify(user));
      alert("Cadastro efetuado com êxito");
      navigation.navigate("LogIn");
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>SigIn</Text>
      </View>

      <TextInput
        style={styles.txtInput}
        placeholder="Username"
        value={user.username}
        autoFocus
        onChangeText={(value) => handleChange("username", value)}
      ></TextInput>

      <TextInput
        style={styles.txtInput}
        placeholder="Password"
        value={user.password}
        secureTextEntry
        onChangeText={(value) => handleChange("password", value)}
      ></TextInput>

      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={{ color: "white", fontSize: 15 }}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
        <Text style={{ color: "black", fontSize: 15 }}>
          Já possui um cadastro? Faça Login!
        </Text>
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
  title: {
    fontSize: 30,
  },
  txtInput: {
    width: width * 0.7,
    height: height * 0.075,
    borderColor: "#000000",
    borderWidth: 2,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    paddingLeft: 10,
    fontSize: 20,
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
