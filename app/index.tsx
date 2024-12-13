import { Image, StyleSheet, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "@/app/navigation/AppNavigator";
import { AppProvider } from "@/app/statemanagement/AppContext";
import { ThemeProvider } from "@/app/statemanagement/ThemeContext"; // Adjust the import path as per your project structure

export default function HomeScreen() {
  return (
    <ThemeProvider>
      <AppProvider>
        <AppNavigator />
      </AppProvider>
    </ThemeProvider>
  );
}