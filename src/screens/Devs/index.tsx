import { Dimensions, useColorScheme, FlatList } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListItem, Avatar } from "@rneui/base";

import ItensContext from "../../context/ItensContext";

export default function Cards() {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? "#363636" : "#fff";
  const textColor = colorScheme === "dark" ? "#fff" : "#000";

  const { group } = useContext(ItensContext);

  function getItens({ item }) {
    return (
      <ListItem
        containerStyle={{
          flex: 1,
          backgroundColor: theme,
          paddingVertical: height * 0.02,
          paddingHorizontal: width * 0.03,
          borderBottomWidth: 1,
          borderBottomColor: textColor,
        }}
      >
        <Avatar source={{ uri: item.image }} size={130} rounded />
        <ListItem.Content>
          <ListItem.Title style={{ color: textColor }}>
            {item.name}
          </ListItem.Title>
          <ListItem.Title style={{ color: textColor }}>
            {item.turma} - RM:{item.rm}
          </ListItem.Title>
        </ListItem.Content>
      </ListItem>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme,
      }}
    >
      <FlatList data={group.DadosDevs} renderItem={getItens} />
    </SafeAreaView>
  );
}
