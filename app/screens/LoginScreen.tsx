// src/screens/LoginScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { COLORS } from "../theme/colors";
import { Button } from "../components/Button";

type RootStackParamList = {
  Login: undefined;
  Registration: undefined;
  ForgotPassword: undefined;
};

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "Login">;

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement login logic
    console.log("Login attempt", { email, password });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome Back</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={COLORS.GRAY}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={COLORS.GRAY}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <Button title="Login" onPress={handleLogin} />

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
            <Text style={styles.signupLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.PRIMARY_BLACK,
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    backgroundColor: COLORS.WHITE,
    borderWidth: 1,
    borderColor: COLORS.GRAY,
    borderRadius: 8,
    padding: 12,
    marginVertical: 10,
    color: COLORS.PRIMARY_BLACK,
  },
  forgotPassword: {
    color: COLORS.PRIMARY_RED,
    textAlign: "right",
    marginBottom: 20,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signupText: {
    color: COLORS.PRIMARY_BLACK,
  },
  signupLink: {
    color: COLORS.PRIMARY_RED,
    fontWeight: "bold",
  },
});
