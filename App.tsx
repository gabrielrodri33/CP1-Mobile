import { StyleSheet, ScrollView, View, SafeAreaView } from "react-native";
import Home from "./components/Home";

export default function App() {
  return (
    <ScrollView>
      <View>
        <SafeAreaView>
          <Home />
        </SafeAreaView>
      </View>
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
