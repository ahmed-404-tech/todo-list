import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useRandomNotifications = () => {
  const notificationTimes = ["09:00", "12:00", "15:00", "18:00"];

  const getRandomTime = () => {
    const randomIndex = Math.floor(Math.random() * notificationTimes.length);
    const timeString = notificationTimes[randomIndex];
    const [hours, minutes] = timeString.split(":").map(Number);

    const now = new Date();
    const notificationTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      hours,
      minutes
    );

    if (notificationTime < now) {
      notificationTime.setDate(notificationTime.getDate() + 1);
    }

    return notificationTime;
  };

  const scheduleRandomNotification = async () => {
    const notificationTime = getRandomTime();

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Hello",
        body: "this is a test notification",
      },
      trigger: {
        date: notificationTime,
      },
    });
  };

  const scheduleDailyNotifications = async () => {
    await Notifications.cancelAllScheduledNotificationsAsync();

    scheduleRandomNotification();

    setInterval(() => {
      scheduleRandomNotification();
    }, 24 * 60 * 60 * 1000);
  };

  useEffect(() => {
    scheduleDailyNotifications();
  }, []);
};

export default useRandomNotifications;
