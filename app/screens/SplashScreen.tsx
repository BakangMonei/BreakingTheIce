// src/screens/SplashScreen.tsx
import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { COLORS } from "../theme/colors";

type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
};

type SplashScreenProps = NativeStackScreenProps<RootStackParamList, "Splash">;

export const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Breaking The Ice</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BLACK,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    color: COLORS.WHITE,
    fontSize: 36,
    fontWeight: "bold",
  },
});
