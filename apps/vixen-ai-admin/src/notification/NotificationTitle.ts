import { Notification as TNotification } from "../api/notification/Notification";

export const NOTIFICATION_TITLE_FIELD = "user";

export const NotificationTitle = (record: TNotification): string => {
  return record.user?.toString() || String(record.id);
};
