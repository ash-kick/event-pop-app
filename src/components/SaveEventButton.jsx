import axios from "axios";

export default function SaveEventButton({ eventId }) {
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
          <button
               className="save-event-button"
               onClick={handleClick}>
               Save
          </button>
     );
}
