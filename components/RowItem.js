import React from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

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

export const RowSeparator = () => {
  return <View style={styles.separator} />;
};

export const RowItem = ({ onPress, title, icon }) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.row}>
        <Text style={styles.text}>{title}</Text>
        {icon}
      </View>
    </TouchableHighlight>
  );
};
