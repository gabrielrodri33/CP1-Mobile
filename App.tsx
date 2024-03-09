import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Home from "./components/home/index";
import Footer from "./components/footer/index";
import Header from "./components/header/index";

export default function App() {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <Header />
          <Home />
          <Footer />
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
