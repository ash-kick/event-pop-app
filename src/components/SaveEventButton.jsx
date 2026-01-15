import axios from "axios";
import { SavedEventContext } from "../contexts/SavedEventsContext";
import { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function SaveEventButton({ eventId }) {
     const { savedEvents, fetchSavedEvents } = useContext(SavedEventContext);
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
               await fetchSavedEvents();
          } catch (err) {
               console.log(eventId);
               console.log("Unable to save event", err);
          }
     }
     return (
          <div className="saved-event-button-container">
               {savedEvents.filter((event) => event._id === eventId).length === 0 ? (
                    <FaRegHeart
                         className="save-event-button"
                         onClick={handleClick}
                    />
               ) : (
                    <FaHeart className="saved-event-icon" />
               )}
          </div>
     );
}
