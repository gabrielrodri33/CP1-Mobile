<<<<<<< HEAD
<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import Footer from './components/footer';
import Home from "./components/Home";
=======
import Header from './components/header';
>>>>>>> d6e7677 (Componentização do Header)

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Home />
      <Footer></Footer>
=======
      <Header/>
      <Text>Open up App.js to start working on your app!</Text>
>>>>>>> d6e7677 (Componentização do Header)
      <StatusBar style="auto" />
    </View>
=======
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Home from "./components/home/index";
import Footer from "./components/footer/index";
import Header from "./components/header/index";

export default function App() {
  return (
=======
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Home from "./components/home/index";
import Footer from "./components/footer/index";
import Header from "./components/header/index";

export default function App() {
  return (
>>>>>>> e35155e6e9a587afa467d0dfd5b03eade5a492c6
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
<<<<<<< HEAD
>>>>>>> d7cc050 (Corrigido todos os bugs de Merge)
=======
>>>>>>> e35155e6e9a587afa467d0dfd5b03eade5a492c6
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
