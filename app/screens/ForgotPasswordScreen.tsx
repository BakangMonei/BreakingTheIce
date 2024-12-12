// src/screens/ForgotPasswordScreen.tsx
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { COLORS } from "../theme/colors";
import { Button } from "../components/Button";

type RootStackParamList = {
  ForgotPassword: undefined;
  Login: undefined;
};

type ForgotPasswordScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "ForgotPassword"
>;

export const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({
  navigation,
}) => {
  const [email, setEmail] = useState("");

  const handlePasswordReset = () => {
    // Implement password reset logic
    console.log("Password reset attempt", { email });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Reset Password</Text>
        <Text style={styles.subtitle}>
          Enter the email associated with your account
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={COLORS.GRAY}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Button title="Send Reset Link" onPress={handlePasswordReset} />

        <View style={styles.loginContainer}>
          <Button
            title="Back to Login"
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
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.GRAY,
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
});
