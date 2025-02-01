// screens/settings.js
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Button,
} from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import SettingItem from "../components/SettingItem";
import useNotifications from "../hooks/useNotifications";

const Settings = () => {
  const { theme, toggleTheme, isEnabled } = useContext(ThemeContext);
  const { notificationEnabled, toggleNotifications } = useNotifications();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { backgroundColor: theme.colors.background },
        ]}
      >
        <Text style={[styles.headerText, { color: theme.colors.text }]}>
          Settings
        </Text>

        <SettingItem
          label="Dark Mode"
          value={isEnabled}
          onValueChange={toggleTheme}
        />

        <SettingItem
          label="Notifications"
          value={notificationEnabled}
          onValueChange={toggleNotifications}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 20,
  },
});

export default Settings;
