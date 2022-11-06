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
import { useNavigation } from "@react-navigation/native";
import { CountryList } from "react-native-country-codes-picker";

export default function Base() {
  const [show, setShow] = useState(true);
  const [countryCode, setCountryCode] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigation();

  const showToast = () => {
    Toast.show({
      type: "error",
      text1: "⛔️ Oops... Something went wrong",
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  const handlePress = () => {
    showToast();
    navigate.navigate("NewScreen", {
      data: "hello",
    });
  };

  return (
    <>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <Input display={{ width: Dimensions.get("screen").width / 2 }} />
        <CountryPicker
          show={false}
          // when picker button press you will get the country object with dial code
          pickerButtonOnPress={(item) => {
            console.log(item);
            setCountryCode(item.dial_code);
            setShow(false);
          }}
        />
      </View>
      <View style={styles.view}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.text}>
            {loading ? (
              <ActivityIndicator color={"#fff"} size={25} />
            ) : (
              "Click Me!"
            )}
          </Text>
        </TouchableOpacity>
      </View>
      <Toast />
    </>
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
