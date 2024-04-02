import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  StatusBar,
  Platform,
  Text
} from "react-native";

import { Routes } from "./src/routes/index";

export default function Apl() {
  return (
    <SafeAreaView style={styles.viewSafeAndroid}>
      <Routes/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewSafeAndroid: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight * 0.2 : 0,
  },
  container: {
    flex: 1,
    // backgroundColor: "#272727",
    alignItems: "center",
    justifyContent: "center",
  },
});