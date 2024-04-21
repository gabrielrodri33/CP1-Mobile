import React, { useContext } from "react";
import { useColorScheme, FlatList, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, ListItem } from "@rneui/base";

import ItensContext from "../../context/ItensContext";

export default function Produtos() {
  const colorScheme = useColorScheme();

  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  const theme = colorScheme === "dark" ? "#363636" : "#fff";
  const textColor = colorScheme === "dark" ? "#fff" : "#000";
  // style={{ color: textColor }} Estilização para o texto dependendo do theme

  const { estado } = useContext(ItensContext);

  function getItens({ item }) {
    return (
      <ListItem
        containerStyle={{
          backgroundColor: theme,
          paddingVertical: height * 0.02,
          paddingHorizontal: width * 0.03,
          borderBottomWidth: 1,
          borderBottomColor: textColor,
        }}
      >
        <Avatar source={{ uri: item.image }} size={80} />
        <ListItem.Content>
          <ListItem.Title style={{ color: textColor }}>
            {item.title}
          </ListItem.Title>
          <ListItem.Subtitle style={{ color: textColor }}>
            {item.price}
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Content>
          <ListItem.Subtitle style={{ color: textColor }}>
            {item.desc}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme }}>
      <FlatList
        data={estado.DadosItens}
        renderItem={getItens}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}
