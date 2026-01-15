import { useContext } from "react";
import { SavedEventContext } from "../../contexts/SavedEventsContext";
import axios from "axios";
import Loading from "../../components/Loading";

export default function MyEvents() {
     const { savedEvents, loading, fetchSavedEvents } = useContext(SavedEventContext);
     const token = localStorage.getItem("token");
     async function handleClick(savedEvent) {
          try {
               const response = await axios.delete("/api/events/saved-event", {
                    data: {
                         eventId: savedEvent._id,
                    },
                    headers: {
                         Authorization: `Bearer ${token}`,
                    },
               });
               console.log(response.data.message);
               await fetchSavedEvents();
          } catch (err) {
               console.log(err.message);
          }
     }

     return (
          <div className="my-events-container">
               <div className="saved-event-feed">
                    <h2>View Your Saved Events</h2>
                    {loading ? (
                         <Loading message="Loading saved events ..."></Loading>
                    ) : (
                         <ul>
                              {savedEvents?.map((savedEvent) => (
                                   <li key={savedEvent._id}>
                                        <p>Event: {savedEvent.eventName}</p>
                                        <p>Date: {savedEvent.startDateTime}</p>
                                        <p>Venue: {savedEvent.venueName}</p>
                                        <button onClick={() => handleClick(savedEvent)}>Remove</button>
                                   </li>
                              ))}
                         </ul>
                    )}
               </div>
          </div>
     );
}
