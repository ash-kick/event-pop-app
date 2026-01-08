import { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";

export const SavedEventContext = createContext();

export function SavedEventProvider({ children }) {
     const [savedEvents, setSavedEvents] = useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

     const token = localStorage.getItem("token");
     // fetch list of saved events
     const fetchSavedEvents = useCallback(async () => {
          try {
               const response = await axios.get("/api/events/saved-event", {
                    headers: {
                         Authorization: `Bearer ${token}`,
                    },
               });
               setSavedEvents(response.data.savedEvents);
               setError(null);
               setLoading(false);
          } catch (err) {
               if (err.response?.status === 404) {
                    setSavedEvents([]);
                    setError(null);
               } else {
                    console.log("Error fetching saved events.");
                    setError(err.message);
               }
               setLoading(false);
          }
     });

     useEffect(() => {
          const token = localStorage.getItem("token");
          if (token) {
               fetchSavedEvents();
          } else {
               setSavedEvents([]);
               setLoading(false);
          }
     }, []);

     return (
          <SavedEventContext.Provider
               value={{
                    savedEvents,
                    loading,
                    error,
                    fetchSavedEvents,
               }}>
               {children}
          </SavedEventContext.Provider>
     );
}
