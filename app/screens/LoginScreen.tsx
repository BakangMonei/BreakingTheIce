import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";

// Shared components and styles
import { styles } from "../styles/AuthStyles";
import SocialImageButton from "../components/SocialImageButton";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleSignIn = () => {
    console.log("Google Sign-In clicked");
  };

  const handleOfficeSignIn = () => {
    console.log("Office Sign-In clicked");
  };

  const handleAppleSignIn = () => {
    console.log("Apple Sign-In clicked");
  };

  const handleLogin = () => {
    // Implement login logic here
    console.log("Login attempted");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <View style={styles.formContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#888"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#888"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.forgotPasswordContainer}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <View style={styles.socialContainer}>
          <SocialImageButton
            source={require("../../assets/images/apple_logo.png")}
            onPress={handleGoogleSignIn}
          />
          <SocialImageButton
            source={require("../../assets/images/apple_logo.png")}
            onPress={handleOfficeSignIn}
          />
          <SocialImageButton
            source={require("../../assets/images/apple_logo.png")}
            onPress={handleAppleSignIn}
          />
        </View>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
            <Text style={styles.registerLinkText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
