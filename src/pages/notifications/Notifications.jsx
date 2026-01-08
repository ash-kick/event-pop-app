import { useEffect, useContext, useState } from "react";
import { NotificationsContext } from "../../contexts/NotificationsContext";
import axios from "axios";

export default function Notifications() {
     // fetch all notifications for user
     const { unreadCount, notifications, fetchNotifications } = useContext(NotificationsContext);
     console.log(notifications[0]);

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
                    <div className="unread-notification-display">
                         {notifications.length > 0
                              ? notifications
                                     .filter((notification) => notification.read === false)
                                     .map((notification) => <div key={notification._id}>{notification.event?.eventName}</div>)
                              : null}
                    </div>
               </div>
          </div>
     );
}
