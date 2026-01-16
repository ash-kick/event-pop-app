import { useEffect, useContext, useState } from "react";
import { NotificationsContext } from "../../contexts/NotificationsContext";
import { SavedEventContext } from "../../contexts/SavedEventsContext";
import SaveEventButton from "../../components/SaveEventButton";
import Loading from "../../components/Loading";
import dayjs from "dayjs";

export default function Notifications() {
     // fetch all notifications for user
     const { unreadCount, notifications, markNotificationRead, markAllNotificationsRead, loading } = useContext(NotificationsContext);
     const { savedEvents } = useContext(SavedEventContext);
     // list read notifications after unread
     // allow for clicking on an unread notification to make it as read
     // allow for saving events on your my events page from notifications page -- this might need to be it's own component... it will need to happen many places
     return (
          <div className="notifications-container">
               <h2 className="notification-header">Notifications</h2>
               {loading ? (
                    <Loading message="Loading notifications ..."></Loading>
               ) : (
                    <div className="notification-display-container">
                         <div className="unread-notification-display-container">
                              {unreadCount === 1 ? (
                                   <p className="unread-count-message">You have {unreadCount} unread notification.</p>
                              ) : (
                                   <p className="unread-count-message">You have {unreadCount} unread notifications.</p>
                              )}
                              <button
                                   onClick={() => {
                                        markAllNotificationsRead();
                                   }}
                                   className="mark-all-read-button">
                                   Mark all as read!
                              </button>

                              <h3 className="notification-title">Unread</h3>
                              <ul className="unread-notification-display">
                                   {notifications.length > 0
                                        ? notifications
                                               .filter((notification) => notification.read === false)
                                               .map((notification) => (
                                                    <li
                                                         className="unread-notification"
                                                         key={notification._id}>
                                                         <div className="notification-event-details">
                                                              <div className="notificatoin-event-name-venue">
                                                                   {notification.event?.eventName} @ {notification.event?.venueName}
                                                              </div>
                                                              <break></break>
                                                              <div className="notification-event-date-time">
                                                                   {dayjs(notification.event?.startDateTime).format("ddd, MMM D • h:mm A")}
                                                              </div>
                                                         </div>
                                                         <div className="save-mark-read-container">
                                                              <SaveEventButton eventId={notification.event._id} />
                                                              <button
                                                                   onClick={() => markNotificationRead(notification._id)}
                                                                   className="mark-read-button">
                                                                   Mark Read
                                                              </button>
                                                         </div>
                                                    </li>
                                               ))
                                        : null}
                              </ul>
                         </div>
                         <div className="read-notification-display-container">
                              <h3 className="notification-title">Read</h3>
                              <ul className="read-notification-display">
                                   {notifications.length > 0
                                        ? notifications
                                               .filter((notification) => notification.read === true)
                                               .map((notification) => (
                                                    <li
                                                         className="read-notification"
                                                         key={notification._id}>
                                                         <div className="notification-event-details">
                                                              <div className="notificatoin-event-name-venue">
                                                                   {notification.event?.eventName} @ {notification.event?.venueName}
                                                              </div>
                                                              <break></break>
                                                              <div className="notification-event-date-time">
                                                                   {dayjs(notification.event?.startDateTime).format("ddd, MMM D • h:mm A")}
                                                              </div>
                                                         </div>
                                                         <SaveEventButton eventId={notification.event._id} />
                                                    </li>
                                               ))
                                        : null}
                              </ul>
                         </div>
                    </div>
               )}
          </div>
     );
}
