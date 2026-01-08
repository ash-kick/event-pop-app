import { useEffect, useContext, useState } from "react";
import { NotificationsContext } from "../../contexts/NotificationsContext";
import axios from "axios";

export default function Notifications() {
     // fetch all notifications for user
     const { unreadCount, notifications, markNotificationRead } = useContext(NotificationsContext);
     // list read notifications after unread
     // allow for clicking on an unread notification to make it as read
     // allow for saving events on your my events page from notifications page -- this might need to be it's own component... it will need to happen many places
     return (
          <div>
               <h2>Notifications</h2>
               <div className="unread-notification-display-container">
                    <h3>Unread</h3>
                    {unreadCount === 1 ? (
                         <p className="unread-count-message">You have {unreadCount} unread notification.</p>
                    ) : (
                         <p className="unread-count-message">You have {unreadCount} unread notifications.</p>
                    )}
                    <div className="unread-notification-display">
                         {notifications.length > 0
                              ? notifications
                                     .filter((notification) => notification.read === false)
                                     .map((notification) => (
                                          <div className="unread-notification">
                                               <button onClick={() => markNotificationRead(notification._id)}>Mark Read</button>
                                               <ul key={notification._id}>
                                                    <li>Event: {notification.event?.eventName}</li>
                                                    <li>Date: {notification.event?.startDateTime}</li>
                                                    <li>Venue: {notification.event?.venueName}</li>
                                               </ul>
                                               <button>Save</button>
                                          </div>
                                     ))
                              : null}
                    </div>
               </div>
               <div className="read-notification-display-container">
                    <h3>Read</h3>
                    <div className="read-notification-display">
                         {notifications.length > 0
                              ? notifications
                                     .filter((notification) => notification.read === true)
                                     .map((notification) => (
                                          <div className="read-notification">
                                               <ul key={notification._id}>
                                                    <li>Event: {notification.event?.eventName}</li>
                                                    <li>Date: {notification.event?.startDateTime}</li>
                                                    <li>Venue: {notification.event?.venueName}</li>
                                               </ul>
                                               <button>Save</button>
                                          </div>
                                     ))
                              : null}
                    </div>
               </div>
          </div>
     );
}
