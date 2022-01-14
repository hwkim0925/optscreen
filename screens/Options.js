import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
  Linking,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { RowSeparator, RowItem } from "../components/RowItem";

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    color: "#f837f7",
    paddingHorizontal: 20,
    margin: 20,
  },
  separator: {
    backgroundColor: "#101010",
    height: StyleSheet.hairlineWidth,
    marginHorizontal: 20,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
  },
});

const openURL = (url) => {
  Linking.openURL(url).catch(() => alert("There was an error!"));
};

export default () => {
  return (
    <SafeAreaView>
      <RowItem
        title="Example 1"
        onPress={() => openURL("https://github.com/hwkim0925/converter")}
        icon={<AntDesign name="caretright" size={24} color="black" />}
      />

      <RowSeparator />

      <RowItem
        title="Example 2"
        onPress={() => openURL("https://hwkim0925.github.io/")}
        icon={<AntDesign name="right" size={24} color="black" />}
      />

      <RowSeparator />

      <RowItem
        title="Example 3"
        onPress={() => openURL("https://github.com/hwkim0925/my-app")}
        icon={<Entypo name="chevron-right" size={24} color="black" />}
      />
    </SafeAreaView>
  );
};
