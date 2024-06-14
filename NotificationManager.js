import PushNotification from "react-native-push-notification";

class NotificationManager {
  configure() {
    PushNotification.configure({
      onRegister: function (token) {
        console.log("[NotificationManager] TOKEN:", token);
      },
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  }

  showNotification(id, title, message, data = {}, options = {}) {
    PushNotification.localNotification({
      id: id,
      autoCancel: true,
      largeIcon: options.largeIcon || "ic_launcher",
      smallIcon: options.smallIcon || "ic_notification",
      bigText: message || '',
      subText: title || '',
      vibrate: options.vibrate || false,
      vibration: options.vibration || 300,
      priority: options.priority || "high",
      importance: options.importance || "high",
      data: data,
      title: title || "",
      message: message || "",
      playSound: options.playSound || false,
      soundName: options.soundName || 'default',
      userInteraction: false,
    });
  }

  cancelAllLocalNotifications() {
    PushNotification.cancelAllLocalNotifications();
  }

  unregister() {
    PushNotification.unregister();
  }
}

export const notificationManager = new NotificationManager();
