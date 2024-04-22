import { StyleSheet, useColorScheme, View } from "react-native";

import { Routes } from "./src/routes/index";
import { ThemeProvider } from "styled-components";
import { ItensProvider } from "./src/context/ItensContext";

import Theme from "./src/Theme";

export default function Apl() {
  //dark, light, null, undefined
  const deviceTheme = useColorScheme();

  const theme = Theme[deviceTheme] || Theme.dark;

  return (
    <ThemeProvider theme={theme}>
      <ItensProvider>
        <Routes />
      </ItensProvider>
    </ThemeProvider>
  );
}
