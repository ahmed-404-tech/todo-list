import { Link } from "expo-router";
import { useContext } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { ThemeContext } from "./contexts/ThemeContext";

export default function Index() {
  
  const { theme } = useContext(ThemeContext);

  return (
    <View
    style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text style={{color: theme.colors.text}}>Edit app/index.tsx to edit this screen.</Text>
     <Link href="/(tabs)/settings">Go to settings</Link>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});