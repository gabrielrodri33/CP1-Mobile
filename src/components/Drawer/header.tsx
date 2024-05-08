import { StyleSheet, View, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity>
          <MaterialIcons name="person" size={40} color="black" />
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialIcons
            name="menu"
            size={40}
            color="black"
            style={styles.menu}
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row"
  },
  menu: {
    // alignSelf: "flex-end",
    // paddingTop: height * 0.004,
    // padding: width * 0.02,
  },
  person: {
    // paddingTop: height * 0.004,
    // padding: width * 0.02,
  },
});
