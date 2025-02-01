import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0077C2",
        tabBarInactiveTintColor: "#333333",
        tabBarStyle: {
          height: 100,
          justifyContent: "center",
          paddingTop: 10,
          backgroundColor: "#f5f5f5",
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
