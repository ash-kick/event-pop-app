import { useContext } from "react";
import { SavedEventContext } from "../../contexts/SavedEventsContext";
import axios from "axios";
import Loading from "../../components/Loading";
import dayjs from "dayjs";

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
                                             <div className="saved-event-name">{savedEvent.eventName}</div>
                                             <div className="saved-event-date-time">
                                                  {dayjs(savedEvent.startDateTime).format("ddd, MMM D • h:mm A")}
                                             </div>
                                             <div className="saved-event-venue">{savedEvent.venueName}</div>
                                             <button
                                                  onClick={() => handleClick(savedEvent)}
                                                  className="remove-event-button">
                                                  Remove
                                             </button>
                                        </div>
                                   </li>
                              ))}
                         </ul>
                    )}
               </div>
          </div>
     );
}
