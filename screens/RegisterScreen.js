// import React, { useState } from "react";
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import { KeyboardAvoidingView } from "react-native";
// import { Button, Input } from "react-native-elements";

// const RegisterScreen = ({ navigation }) => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirm, setConfirm] = useState("");

//   const SignUp = () => {};
//   return (
//     <View>
//       <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
//         <StatusBar style="light"></StatusBar>
//         <Text style={styles.logo}>Signal</Text>

//         <View>
//           <View style={styles.redirectButton}>
//             <Text
//               style={styles.text}
//               onPress={() => navigation.navigate("Login")}
//             >
//               SignIn
//             </Text>
//             <Text style={styles.text}>|</Text>
//             <Text style={styles.textSignUp}>SignUp</Text>
//           </View>
//         </View>
//         <View style={styles.inputContainer}>
//           <Input
//             placeholder="Username"
//             autoFocus
//             type="username"
//             value={username}
//             onChangeText={(text) => setUsername(text)}
//           />
//           <Input
//             placeholder="Email"
//             type="email"
//             value={email}
//             onChangeText={(text) => setEmail(text)}
//           />
//           <Input
//             placeholder="Phone"
//             type="number"
//             value={phone}
//             onChangeText={(text) => setPhone(text)}
//           />
//           <Input
//             placeholder="Password"
//             type="password"
//             value={password}
//             onChangeText={(text) => setPassword(text)}
//           />
//           <Input
//             placeholder="Confirm Password"
//             type="password"
//             value={confirm}
//             onChangeText={(text) => setConfirm(text)}
//           />
//         </View>
//         <Button
//           title="Register"
//           onPress={SignUp}
//           containerStyle={styles.button}
//         ></Button>
//       </KeyboardAvoidingView>
//     </View>
//   );
// };

// export default RegisterScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 10,
//     backgroundColor: "white",
//   },
//   logo: { fontSize: 50, color: "#34b4eb" },
//   redirectButton: { display: "flex", flexDirection: "row", flexWrap: "wrap" },
//   text: {
//     fontSize: 20,
//     color: "#0c445c",
//     marginRight: "10px",
//     fontWeight: "500",
//     marginTop: 20,
//   },
//   textSignUp: {
//     fontSize: 20,
//     color: "#00bfff",
//     marginRight: "10px",
//     fontWeight: "500",
//     marginTop: 20,
//   },
//   inputContainer: { marginTop: 30, width: 300 },
//   button: {
//     width: 200,
//     marginTop: 30,
//     backgroundColor: "#34b4eb",
//     color: "white",
//   },
// });

import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView } from "react-native";

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const signUp = () => {};

  console.log(username);

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
      <View>
        <View style={styles.redirectButton}>
          <Text
            style={styles.text}
            onPress={() => navigation.navigate("Login")}
          >
            SignIn
          </Text>
          <Text style={styles.text}>|</Text>
          <Text style={styles.textSignUp}>SignUp</Text>
        </View>
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
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Phone"
          type="number"
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Confirm Password"
          type="password"
          value={confirm}
          onChangeText={(text) => setConfirm(text)}
        />
      </View>

      <Button
        title="Register"
        onPress={signUp}
        containerStyle={styles.button}
      ></Button>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: { marginTop: 30, width: 300 },
  button: {
    width: 200,
    marginTop: 20,
    backgroundColor: "#34b4eb",
    color: "white",
  },
  logo: { fontSize: 50, color: "#34b4eb" },
  redirectButton: { display: "flex", flexDirection: "row", flexWrap: "wrap" },
  text: {
    fontSize: 20,
    color: "#0c445c",
    marginRight: 10,
    marginTop: 20,
  },
  textSignUp: {
    fontSize: 20,
    color: "#00bfff",
    marginRight: 10,
    marginTop: 20,
  },
});
