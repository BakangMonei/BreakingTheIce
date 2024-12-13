import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Svg, { Path } from "react-native-svg";

const SplashScreen: React.FC = () => {
  const navigation = useNavigation();
  const bounceValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("LoginPage");
    }, 3000);

    // Start bouncing animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceValue, {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(bounceValue, {
          toValue: 0,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();

    return () => clearTimeout(timer);
  }, [bounceValue, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.iconContainer,
          {
            transform: [
              {
                scale: bounceValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.8, 1.2],
                }),
              },
            ],
          },
        ]}
      >
        <Svg height="100" width="100" viewBox="0 0 100 100">
          {/* Mental health-related icon (heart with a heartbeat line) */}
          <Path
            d="M50 80s10-7.5 20-12c10-4.5 18-10 18-17s-7-12-14-12c-6 0-8 5-8 5s-2-5-8-5c-7 0-14 5-14 12s8 12 18 17c10 4.5 20 12 20 12z"
            fill="none"
            stroke="#FF0000"
            strokeWidth="5"
          />
        </Svg>
      </Animated.View>
      <Text style={styles.title}>Breaking The Ice</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000", // Background color set to black
  },
  iconContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF", // Title text color set to white
  },
});

export default SplashScreen;
