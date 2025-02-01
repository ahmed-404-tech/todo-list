import { Text, View, StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

export default function TabsLayout() {

    const { theme, toggleTheme, isEnabled } = useContext(ThemeContext);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarStyle: {
          height: 100,
          justifyContent: "center",
          paddingTop: 10,
          backgroundColor: theme.colors.background_200,
          borderTopWidth: 0
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "Home",
          tabBarLabelStyle: {fontSize: 14},
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarLabelStyle: {fontSize: 14},
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons
              name={focused ? "person-sharp" : "person-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          title: "Settings",
          tabBarLabelStyle: {fontSize: 14},
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons
              name={focused ? "settings-sharp" : "settings-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}
