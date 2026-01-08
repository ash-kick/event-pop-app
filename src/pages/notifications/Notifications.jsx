import { useEffect, useContext, useState } from "react";
import { NotificationsContext } from "../../contexts/NotificationsContext";
import axios from "axios";

export default function Notifications() {
     // fetch all notifications for user
     const { unreadCount, notifications, fetchNotifications } = useContext(NotificationsContext);

     useEffect(() => {
          fetchNotifications();
     }, [fetchNotifications]);
     // surface and dispaly unread notifications first
     // list read notifications after unread
     // allow for clicking on an unread notification to make it as read
     // allow for saving events on your my events page from notifications page -- this might need to be it's own component... it will need to happen many places
     return (
          <div>
               <h2>Notifications</h2>
               <div className="unread-notification-display-container">
                    {unreadCount === 1 ? (
                         <p className="unread-count-message">You have {unreadCount} unread notification.</p>
                    ) : (
                         <p className="unread-count-message">You have {unreadCount} unread notifications.</p>
                    )}
                    <div>NOTIFICATION DISPLAY GOES HERE.</div>
               </div>
          </div>
     );
}
