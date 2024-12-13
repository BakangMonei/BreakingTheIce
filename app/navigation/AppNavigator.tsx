// AppNavigator.tsx
import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "@/app/screens/SplashScreen";
import MainNavigator from "./MainNavigator"; // You may need to adjust this import based on your folder structure
import LoginScreen from "@/app/auth/LoginScreen";
import RegistrationScreen from "@/app/auth/RegistrationScreen";
import ForgotPasswordScreen from "@/app/auth/ForgotPassword";
import { AppContext } from "@/app/statemanagement/AppContext";

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  const { state } = useContext(AppContext);

  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      {state.isLoggedIn ? (
        <Stack.Screen
          name="MainNavigator" // Change this to "MainNavigator" or any other appropriate name
          component={MainNavigator}
          options={{ headerShown: false }}
        />
      ) : (
        <>
    
        </>
      )}
      <Stack.Screen
            name="LoginPage"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegistrationPage"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Main"
            component={MainNavigator}
            options={{ headerShown: false }}
          />

    </Stack.Navigator>
  );
};

export default AppNavigator;