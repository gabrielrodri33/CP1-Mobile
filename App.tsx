<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './components/header';
=======
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  StatusBar
} from "react-native";
import Home from "./components/home/index";
import Footer from "./components/footer/index";
import Header from "./components/header/index";
>>>>>>> ce583c0913c9bb8d684d1ec6b85272be0acf1fcc

export default function App() {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <Header />
          <Home />
          <Footer />
          <StatusBar />
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
