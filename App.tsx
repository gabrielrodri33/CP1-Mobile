import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  StatusBar
} from "react-native";
import Produtos from "./screens/produtos/index";
import Header from "./components/header/index";
import Footer from "./components/footer";
import Contatos from "./screens/contatos/index";

export default function App() {
  return (
    <ScrollView>
      <SafeAreaView>
        <View  style={styles.container}>
          <Contatos />
          <StatusBar />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#272727",
    alignItems: "center",
    justifyContent: "center",
  },
});