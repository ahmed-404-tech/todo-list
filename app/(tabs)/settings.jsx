import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const settings = () => {
  const { theme, toggleTheme, isEnabled } = useContext(ThemeContext);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { backgroundColor: theme.colors.background },
        ]}
      >
        <Text style={styles.headerText}>Settings</Text>
        <View
          style={[
            styles.switchView,
            { borderColor: theme.colors.background_300 },
          ]}
        >
          <Text style={[styles.settingText, { color: theme.colors.text }]}>
            Dark Mode
          </Text>
          <Switch onChange={toggleTheme} value={isEnabled} />
        </View>
        <View
          style={[
            styles.switchView,
            { borderColor: theme.colors.background_300 },
          ]}
        >
          <Text style={[styles.settingText, { color: theme.colors.text }]}>
            Noffications
          </Text>
          <Switch onChange={toggleTheme} value={isEnabled} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
  },
  switchView: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  settingText: {
    fontSize: 20,
  },
});
