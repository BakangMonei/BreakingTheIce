import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserHomeScreen from "../screens/roles/user/UserHomeScreen";
import SplashScreen from "../screens/SplashScreen";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const MainNavigator = () => <View></View>;

export default MainNavigator;
