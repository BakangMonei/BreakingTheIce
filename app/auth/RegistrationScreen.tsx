import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { auth, db } from "../database/firebaseConfig"; // Import Firebase instance
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const RegistrationScreen: React.FC = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [physicalAddress, setPhysicalAddress] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleSubmission = async () => {
    if (!email || !password || !rePassword) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
  
    if (password !== rePassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        email,
        firstName,
        lastName,
        phoneNumber,
        physicalAddress,
        gender,
        role: "User", // Default role for registered users
      });
  
      Alert.alert("Success", "Registration complete. Please log in.");
      navigation.navigate("LoginPage");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Register</Text>

        <TextInput
          placeholder="First Name"
          placeholderTextColor="#888"
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
        />

        <TextInput
          placeholder="Last Name"
          placeholderTextColor="#888"
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
        />

        <TextInput
          placeholder="Email"
          placeholderTextColor="#888"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Phone Number"
          placeholderTextColor="#888"
          style={styles.input}
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

        <TextInput
          placeholder="Physical Address"
          placeholderTextColor="#888"
          style={styles.input}
          value={physicalAddress}
          onChangeText={setPhysicalAddress}
        />

        <View style={styles.genderContainer}>
          <TouchableOpacity 
            style={[
              styles.genderButton, 
              gender === 'Male' && styles.selectedGenderButton
            ]}
            onPress={() => setGender('Male')}
          >
            <Text style={styles.genderButtonText}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[
              styles.genderButton, 
              gender === 'Female' && styles.selectedGenderButton
            ]}
            onPress={() => setGender('Female')}
          >
            <Text style={styles.genderButtonText}>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[
              styles.genderButton, 
              gender === 'Other' && styles.selectedGenderButton
            ]}
            onPress={() => setGender('Other')}
          >
            <Text style={styles.genderButtonText}>Other</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          placeholder="Password"
          placeholderTextColor="#888"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          placeholder="Re-enter Password"
          placeholderTextColor="#888"
          style={styles.input}
          secureTextEntry
          value={rePassword}
          onChangeText={setRePassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmission}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("LoginPage")}
          style={styles.loginLink}
        >
          <Text style={styles.linkText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#ffffff",
  },
  input: {
    height: 50,
    borderColor: "#ffffff",
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: "#ffffff",
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  genderButton: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#ffffff",
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 8,
    alignItems: "center",
  },
  selectedGenderButton: {
    backgroundColor: "#ff0000",
  },
  genderButtonText: {
    color: "#ffffff",
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#ff0000",
    paddingVertical: 15,
    marginVertical: 20,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  linkText: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "600",
  },
  loginLink: {
    alignItems: "center",
    marginTop: 10,
  },
});

export default RegistrationScreen;