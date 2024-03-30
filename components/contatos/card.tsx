import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

export default (props) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text>{props.profilePic}</Text>
        </View>
        <View>
          <Text>{props.nome}</Text>
          <Text>{props.rm}</Text>
        </View>
        <View>
          <Text>{props.turma}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
