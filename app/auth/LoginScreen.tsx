import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import { auth, db } from "../database/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";

const LoginScreen: React.FC = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmission = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      const userQuery = query(collection(db, "users"), where("uid", "==", user.uid));
      const querySnapshot = await getDocs(userQuery);
  
      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        const role = userData.role;
  
        if (role === "SuperAdmin") {
          navigation.navigate("SAdminHomeScreen");
        } else if (role === "Admin") {
          navigation.navigate("AdminHomeScreen");
        } else {
          navigation.navigate("Main");
        }
      } else {
        Alert.alert("Error", "User data not found. Please contact support.");
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  const handleSocialLogin = (platform: string) => {
    // TODO: Implement social login logic for each platform
    Alert.alert("Social Login", `Logging in with ${platform}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#888"
        style={styles.input}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#888"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("ForgotPassword")}
        style={styles.forgotPassword}
      >
        <Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSubmission}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.socialLoginSeparator}>
        <View style={styles.separatorLine} />
        <Text style={styles.socialLoginText}>Or continue with</Text>
        <View style={styles.separatorLine} />
      </View>

      <View style={styles.socialLoginContainer}>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => handleSocialLogin("Google")}
        >
          <Image
            source={{
              uri: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
            }}
            style={styles.socialIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => handleSocialLogin("Twitter")}
        >
          <Image
            source={{
              uri: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.jpg",
            }}
            style={styles.socialIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => handleSocialLogin("Facebook")}
        >
          <Image
            source={{
              uri: "https://img.freepik.com/premium-vector/art-illustration_929495-41.jpg?semt=ais_hybrid",
            }}
            style={styles.socialIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => handleSocialLogin("GitHub")}
        >
          <Image
            source={{
              uri: "https://download.logo.wine/logo/GitHub/GitHub-Logo.wine.png",
            }}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("RegistrationPage")}
        style={styles.signUp}
      >
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#000000",
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
  forgotPassword: {
    alignSelf: "flex-end",
    marginRight: 10,
  },
  signUp: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  socialLoginSeparator: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#ffffff",
  },
  socialLoginText: {
    marginHorizontal: 10,
    color: "#ffffff",
  },
  socialLoginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  socialButton: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 5,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
});

export default LoginScreen;
