import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import { CountryPicker } from "react-native-country-codes-picker";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import Input from "./Input";
import { CountryList } from "react-native-country-codes-picker";

export default function TestScreen({ route }) {
  console.log(route);
  return (
    <View style={styles.container}>
      <Text>{route.params.data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  view: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    width: Dimensions.get("screen").width / 2,
    justifyContent: "center",
    backgroundColor: "red",
    paddingVertical: 10,
  },
  text: {
    textAlign: "center",
    color: "white",
  },
  display: {
    width: Dimensions.get("screen").width,
  },
});
