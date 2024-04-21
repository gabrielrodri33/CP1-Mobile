import React, { useContext } from "react";
import { ScrollView, useColorScheme, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Button, Icon, ListItem, Text } from "@rneui/base";
import { Rating } from '@rneui/themed';

import ItensContext from "../../context/ItensContext";

export default function Produtos() {
  const colorScheme = useColorScheme();

  const theme = colorScheme === "dark" ? "#363636" : "#fff";

  const { estado } = useContext(ItensContext);

  function getItens({ item }) {
    return (
      <ListItem>
        <Avatar source={{uri: item.image}}/>
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
          <ListItem.Subtitle>{item.price}</ListItem.Subtitle>
          
        </ListItem.Content>
        <ListItem.Content>
          <ListItem.Subtitle>{item.desc}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme }}>
      <FlatList data={estado.DadosItens} renderItem={getItens} />
    </SafeAreaView>
  );
}
