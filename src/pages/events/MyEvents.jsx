import { useContext } from "react";
import { SavedEventContext } from "../../contexts/SavedEventsContext";

export default function MyEvents() {
     const { savedEvents } = useContext(SavedEventContext);
     return (
          <div className="events-page-container">
               <div className="saved-event-feed">
                    <h2>View Your Saved Events</h2>
                    <ul>
                         {savedEvents?.map((event) => (
                              <li>
                                   <p>Event: {event.eventName}</p>
                                   <p>Date: {event.startDateTime}</p>
                                   <p>Venue: {event.venueName}</p>
                              </li>
                         ))}
                    </ul>
               </div>
          </div>
     );
}
