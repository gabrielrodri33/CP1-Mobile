import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  useColorScheme
} from "react-native";

import { Routes } from "./src/routes/index";

import { ThemeProvider } from "styled-components";

import Theme from "./src/Theme";

export default function Apl() {
  //dark, light, null, undefined
  const deviceTheme = useColorScheme();

  const theme = Theme[deviceTheme] || Theme.dark

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.viewSafeAndroid}>
        <Routes />
      </SafeAreaView>
    </ThemeProvider>
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
