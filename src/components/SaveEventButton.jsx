import axios from "axios";
import { SavedEventContext } from "../contexts/SavedEventsContext";
import { useContext } from "react";

export default function SaveEventButton({ eventId }) {
     const { savedEvents } = useContext(SavedEventContext);
     async function handleClick(e) {
          e.preventDefault();
          try {
               const token = localStorage.getItem("token");
               const response = await axios.post(
                    "/api/events/saved-event",
                    {
                         eventId: eventId,
                    },
                    {
                         headers: {
                              Authorization: `Bearer ${token}`,
                         },
                    }
               );
               console.log(response.data.message);
          } catch (err) {
               console.log(eventId);
               console.log("Unable to save event", err);
          }
     }
     return (
          <div className="saved-event-button-container">
               {savedEvents.filter((event) => event._id === eventId).length === 0 ? (
                    <button
                         className="save-event-button"
                         onClick={handleClick}>
                         Save
                    </button>
               ) : null}
          </div>
     );
}

// {savedEvents.filter((event) => event._id === notification.event._id).length === 0 ? (
//     <SaveEventButton eventId={notification.event._id} />
// ) : null}
