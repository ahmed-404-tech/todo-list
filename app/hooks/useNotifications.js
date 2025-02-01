// hooks/useNotifications.js
import { useState, useEffect } from "react";
import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useNotifications = () => {
  const [notificationEnabled, setNotificationEnabled] = useState(true);

  useEffect(() => {
    loadNotificationSetting();
    requestPermissions();
  }, []);

  const requestPermissions = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== "granted") {
      alert("يجب منح الإذن لإرسال الإشعارات!");
    }
  };

  const loadNotificationSetting = async () => {
    const savedSetting = await AsyncStorage.getItem("notificationsEnabled");
    setNotificationEnabled(savedSetting !== "false");
  };

  const toggleNotifications = async (value) => {
    setNotificationEnabled(value);
    await AsyncStorage.setItem("notificationsEnabled", value.toString());

    if (!value) {
      await Notifications.cancelAllScheduledNotificationsAsync();
    }
  };


  return {
    notificationEnabled,
    toggleNotifications,
  };
};

export default useNotifications;
