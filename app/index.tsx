import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { 
  Text, 
  View, 
  TouchableOpacity, 
  TextInput, 
  StyleSheet, 
  Image 
} from "react-native";

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleSignIn = () => {
    console.log("Google Sign-In clicked");
    // Integrate Google authentication logic here
  };

  const handleOfficeSignIn = () => {
    console.log("Office Sign-In clicked");
    // Integrate Office authentication logic here
  };

  const handleAppleSignIn = () => {
    console.log("Apple Sign-In clicked");
    // Integrate Apple authentication logic here
  };

  const handleForgotPassword = () => {
    console.log("Forgot Password clicked");
    // Implement forgot password navigation or modal
  };

  const handleRegister = () => {
    console.log("Register clicked");
    // Implement registration navigation
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
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
          onPress={handleForgotPassword}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <View style={styles.socialContainer}>
          <SocialImageButton 
            source={require('../assets/images/apple_logo.png')} 
            onPress={handleGoogleSignIn} 
          />
          <SocialImageButton 
            source={require('../assets/images/apple_logo.png')} 
            onPress={handleOfficeSignIn} 
          />
          <SocialImageButton 
            source={require('../assets/images/apple_logo.png')} 
            onPress={handleAppleSignIn} 
          />
        </View>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don't have an account? </Text>
          <TouchableOpacity onPress={handleRegister}>
            <Text style={styles.registerLinkText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const SocialImageButton = ({ source, onPress }) => (
  <TouchableOpacity style={styles.socialImageButton} onPress={onPress}>
    <Image source={source} style={styles.socialIcon} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  formContainer: {
    width: '100%',
  },
  input: {
    backgroundColor: '#222',
    color: '#fff',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 15,
  },
  forgotPasswordText: {
    color: '#ff3333',
    fontSize: 12,
  },
  loginButton: {
    backgroundColor: '#ff3333',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialImageButton: {
    backgroundColor: '#222',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    color: '#fff',
  },
  registerLinkText: {
    color: '#ff3333',
    fontWeight: 'bold',
  },
});