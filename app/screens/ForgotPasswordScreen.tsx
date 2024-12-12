import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

// Shared components and styles
import { styles } from "../styles/AuthStyles";
import { validateEmail } from "../utils/Validation";

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleResetPassword = () => {
    // Validate email
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    // Clear any previous errors
    setEmailError("");

    // Implement password reset logic here
    Alert.alert(
      "Password Reset",
      "If an account exists with this email, a reset link will be sent.",
      [{ text: "OK", onPress: () => navigation.goBack() }]
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.formContainer}>
        <Text style={styles.title}>RESET PASSWORD</Text>

        <TextInput
          placeholder="Enter your email"
          placeholderTextColor="#888"
          style={[styles.input, emailError && styles.inputError]}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {emailError && <Text style={styles.errorText}>{emailError}</Text>}

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleResetPassword}
        >
          <Text style={styles.loginButtonText}>RESET PASSWORD</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backToLoginContainer}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backToLoginText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
