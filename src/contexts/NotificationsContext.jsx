/* @refresh reset */

import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const NotificationsContext = createContext();

export function NotificationsProvider({ children }) {
     const [notifications, setNotifications] = useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

     // calculate unread count from notifications
     const unreadCount = notifications.filter((notification) => !notification.read).length;

     // fetching notifications
     const fetchNotifications = async () => {
          try {
               // double checking token existence for safety before fetching
               const token = localStorage.getItem("token");
               if (!token) {
                    setNotifications([]);
                    setLoading(false);
                    return;
               }
               const response = await axios.get("/api/notifications", {
                    headers: {
                         Authorization: `Bearer ${token}`,
                    },
               });
               setNotifications(response.data.notifications || []);
               setLoading(false);
               setError(null);
          } catch (err) {
               console.log("Error fetching notifications");
               setError(err.message);
               setLoading(false);
          }
     };
     // mark a single notification as read
     const markNotificationRead = async (notificationId) => {
          try {
               // get
               const token = localStorage.getItem("token");
               await axios.patch(
                    `/api/notifications/${notificationId}/read`,
                    {},
                    {
                         headers: {
                              Authorization: `Bearer ${token}`,
                         },
                    }
               );
               // set local state of notifications for user after marking this one as read
               setNotifications((prev) =>
                    prev.map((notification) => (notification._id === notificationId ? { ...notification, read: true } : notification))
               );
          } catch (err) {
               console.log("Error marking notification as read");
               throw err;
          }
     };

     // mark all notifications as read
     const markAllNotificationsRead = async () => {
          try {
               // get token and call api to read all notifications
               const token = localStorage.getItem("token");
               await axios.patch(
                    `/api/notifications/read-all`,
                    {},
                    {
                         headers: {
                              Authorization: `Bearer ${token}`,
                         },
                    }
               );
               // set local state of notifications for user
               setNotifications((prev) => prev.map((notification) => ({ ...notification, read: true })));
          } catch (err) {
               console.log("Error marking all notifications as read");
               throw err;
          }
     };

     // fetch notifications on mount using use effect
     useEffect(() => {
          const token = localStorage.getItem("token");
          if (token) {
               fetchNotifications();
          } else {
               setNotifications([]);
               setLoading(false);
          }
     }, []);
     return (
          <NotificationsContext.Provider
               value={{
                    notifications,
                    unreadCount,
                    loading,
                    error,
                    fetchNotifications,
                    markNotificationRead,
                    markAllNotificationsRead,
               }}>
               {children}
          </NotificationsContext.Provider>
     );
}
