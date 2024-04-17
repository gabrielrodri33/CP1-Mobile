import { StyleSheet, useColorScheme, View } from "react-native";

import { Routes } from "./src/routes/index";

import { ThemeProvider } from "styled-components";

import Theme from "./src/Theme";

export default function Apl() {
  //dark, light, null, undefined
  const deviceTheme = useColorScheme();

  const theme = Theme[deviceTheme] || Theme.dark;

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Routes />
      </View>
    </ThemeProvider>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
