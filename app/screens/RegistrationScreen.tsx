import React, { useState } from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity, 
  TextInput, 
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert
} from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Shared components and styles
import { styles } from '../styles/AuthStyles';
import { validatePassword, validateEmail } from '../utils/Validation';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Register'>;
};

export default function RegistrationScreen({ navigation }: Props) {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    dob: '',
    physicalAddress: '',
    phoneNumber: '',
    gender: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    let validationErrors = {};

    // Email validation
    if (!validateEmail(formData.email)) {
      validationErrors.email = 'Valid email is required';
    }

    // Name validations
    if (!formData.firstName) validationErrors.firstName = 'First name is required';
    // if (!formData.lastName) validationErrors.lastName = 'Last name is required';

    // // DOB validation (basic)
    // if (!formData.dob) validationErrors.dob = 'Date of Birth is required';

    // // Phone number validation
    // if (!formData.phoneNumber || !/^\d{10}$/.test(formData.phoneNumber)) {
    //   validationErrors.phoneNumber = 'Valid 10-digit phone number is required';
    // }

    // // Gender validation
    // if (!formData.gender) validationErrors.gender = 'Gender selection is required';

    // // Password validation
    // if (!formData.password) {
    //   validationErrors.password = 'Password is required';
    // } else if (!validatePassword(formData.password)) {
    //   validationErrors.password = 'Password must be 8+ chars, include special char & number';
    // }

    // // Confirm password validation
    // if (formData.password !== formData.confirmPassword) {
    //   validationErrors.confirmPassword = 'Passwords must match';
    // }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleRegistration = () => {
    if (validateForm()) {
      // Implement registration logic here
      Alert.alert(
        'Registration Successful', 
        'Your account has been created!',
        [{ text: 'OK', onPress: () => navigation.navigate('Login') }]
      );
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>REGISTER</Text>

        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#888"
            style={[styles.input, errors.email && styles.inputError]}
            value={formData.email}
            onChangeText={(value) => handleInputChange('email', value)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}


          <TextInput
            placeholder="FirstName"
            placeholderTextColor="#888"
            style={[styles.input, errors.firstName && styles.inputError]}
            value={formData.firstName}
            onChangeText={(value) => handleInputChange('firstName', value)}
            autoCapitalize="none"
          />
          {errors.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}

          <TouchableOpacity 
            style={styles.loginButton}
            onPress={handleRegistration}
          >
            <Text style={styles.loginButtonText}>REGISTER</Text>
          </TouchableOpacity>

          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.registerLinkText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}