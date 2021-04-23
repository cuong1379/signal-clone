import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView } from "react-native";
import { showMessage, hideMessage } from "react-native-flash-message";
import axios from "axios";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    navigation.navigate("Home");
    // try {
    //   const res = await axios.post("http://localhost:5555/users/login", {
    //     username,
    //     password,
    //   });
    //   if (res.data.status === "ok") {
    //     navigation.navigate("Home");
    //   }

    //   console.log(res.data);
    // } catch (error) {
    //   console.log(error);
    // }
    // fetch("http://localhost:5555/users/login", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     username,
    //     password,
    //   })
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //       return responseJson.movies;
    //     }),
    // });
  };

  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
      <StatusBar style="light" />
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.logo}>Signal</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Username"
          autoFocus
          type="username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button
        title="Login"
        containerStyle={styles.button}
        onPress={signIn}
      ></Button>

      <Button
        title="Register"
        type="outline"
        onPress={() => navigation.navigate("Register")}
        containerStyle={styles.button}
      ></Button>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: { marginTop: 30, width: 300 },
  button: { width: 200, marginTop: 20 },
  logo: { fontSize: 50, color: "#34b4eb" },
});
