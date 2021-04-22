import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { KeyboardAvoidingView } from "react-native";

const RegisterScreen = () => {
  return (
    <View>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar style="light"></StatusBar>
        <Text h3>hehe</Text>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
