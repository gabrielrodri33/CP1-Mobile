import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import Footer from './components/footer';
import Home from "./components/Home";
=======
import Header from './components/header';
>>>>>>> origin/header

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Home />
      <Footer></Footer>
=======
      <Header/>
      <Text>Open up App.js to start working on your app!</Text>
>>>>>>> origin/header
      <StatusBar style="auto" />
    </View>
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
