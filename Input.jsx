import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { useEffect, useState } from "react";
import { CountryPicker } from "react-native-country-codes-picker";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { CountryList } from "react-native-country-codes-picker";

export default function Input({ display }) {
  return (
    <>
      <TextInput
        style={[styles.input, display]}
        placeholder="Hello"
      ></TextInput>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    width: Dimensions.get("screen").width / 2,
    backgroundColor: "green",
  },
});
