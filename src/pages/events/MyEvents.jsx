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
                         <ul className="my-events-list">
                              {savedEvents?.map((savedEvent) => (
                                   <li
                                        key={savedEvent._id}
                                        className="my-events-list-item">
                                        <div className="saved-event-image-container">
                                             <img
                                                  src={savedEvent.eventImageUrl}
                                                  alt="image of event"
                                                  className="saved-event-image"
                                             />
                                        </div>
                                        <div className="saved-event-details-container">
                                             <p>{savedEvent.eventName}</p>
                                             <p>{savedEvent.startDateTime}</p>
                                             <p>{savedEvent.venueName}</p>
                                        </div>
                                        <button onClick={() => handleClick(savedEvent)}>Remove</button>
                                   </li>
                              ))}
                         </ul>
                    )}
               </div>
          </div>
     );
}
