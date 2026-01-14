import { useEffect, useContext, useState } from "react";
import { NotificationsContext } from "../../contexts/NotificationsContext";
import { SavedEventContext } from "../../contexts/SavedEventsContext";
import SaveEventButton from "../../components/SaveEventButton";
import axios from "axios";

export default function Notifications() {
     // fetch all notifications for user
     const { unreadCount, notifications, markNotificationRead, markAllNotificationsRead } = useContext(NotificationsContext);
     const { savedEvents } = useContext(SavedEventContext);
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
                    <button
                         onClick={() => {
                              markAllNotificationsRead();
                         }}>
                         Mark all as read!
                    </button>
                    <ul className="unread-notification-display">
                         {notifications.length > 0
                              ? notifications
                                     .filter((notification) => notification.read === false)
                                     .map((notification) => (
                                          <li
                                               className="unread-notification"
                                               key={notification._id}>
                                               <button onClick={() => markNotificationRead(notification._id)}>Mark Read</button>
                                               <p>Event: {notification.event?.eventName}</p>
                                               <p>Date: {notification.event?.startDateTime}</p>
                                               <p>Venue: {notification.event?.venueName}</p>
                                               <SaveEventButton eventId={notification.event._id} />
                                          </li>
                                     ))
                              : null}
                    </ul>
               </div>
               <div className="read-notification-display-container">
                    <h3>Read</h3>
                    <ul className="read-notification-display">
                         {notifications.length > 0
                              ? notifications
                                     .filter((notification) => notification.read === true)
                                     .map((notification) => (
                                          <li
                                               className="read-notification"
                                               key={notification._id}>
                                               <p>Event: {notification.event?.eventName}</p>
                                               <p>Date: {notification.event?.startDateTime}</p>
                                               <p>Venue: {notification.event?.venueName}</p>
                                               <SaveEventButton eventId={notification.event._id} />
                                          </li>
                                     ))
                              : null}
                    </ul>
               </div>
          </div>
     );
}
