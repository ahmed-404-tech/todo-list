// components/SettingItem.js
import { View, Text, Switch, StyleSheet } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const SettingItem = ({ label, value, onValueChange }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={[styles.switchView, { borderColor: theme.colors.background_300 }]}
    >
      <Text style={[styles.settingText, { color: theme.colors.text }]}>
        {label}
      </Text>
      <Switch value={value} onValueChange={onValueChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  switchView: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    paddingVertical: 20,
  },
  settingText: {
    fontSize: 20,
  },
});

export default SettingItem;
