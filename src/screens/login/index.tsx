import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";

export default function Login() {
  const [user, setUser] = useState({  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Login</Text>
      </View>

      <TextInput
        style={styles.txtInput}
        placeholder="Username"
        autoFocus
      ></TextInput>
      <TextInput
        style={styles.txtInput}
        placeholder="Password"
        value={user} 
        secureTextEntry
        onChangeText={(value)=>setUser(value)}
      ></TextInput>

      <TouchableOpacity style={styles.btn}>
        <Text style={{ color: "white", fontSize: 15 }}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity></TouchableOpacity>
        <Text style={{ color: "black", fontSize: 15 }}>
          Não possui um Login? CADASTRE-SE
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
