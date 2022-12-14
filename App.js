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
import Base from "./base";
import { CountryPicker } from "react-native-country-codes-picker";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import TestScreen from "./NewScreen";
import Input from "./Input";
import { CountryList } from "react-native-country-codes-picker";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Base" component={Base} />
        <Stack.Screen name="NewScreen" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
