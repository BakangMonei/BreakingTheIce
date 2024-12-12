// src/screens/RegistrationScreen.tsx
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { COLORS } from "../theme/colors";
import { Button } from "../components/Button";

type RootStackParamList = {
  Registration: undefined;
  Login: undefined;
};

type RegistrationScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Registration"
>;

export const RegistrationScreen: React.FC<RegistrationScreenProps> = ({
  navigation,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegistration = () => {
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
    // Implement registration logic
    console.log("Registration attempt", { email, password });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Create Account</Text>

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

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor={COLORS.GRAY}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <Button title="Sign Up" onPress={handleRegistration} />

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <Button
            title="Login"
            variant="secondary"
            onPress={() => navigation.navigate("Login")}
          />
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
  loginContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  loginText: {
    color: COLORS.PRIMARY_BLACK,
    marginBottom: 10,
  },
});
