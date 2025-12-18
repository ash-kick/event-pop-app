/* @refresh reset */

import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const EventOptionsContext = createContext();

export function EventOptionsProvider({ children }) {
     const [eventOptions, setEventOptions] = useState({
          locations: [],
          types: [],
          genres: [],
          subGenres: [],
     });
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

     useEffect(() => {
          const fetchEventOptions = async () => {
               try {
                    const response = await axios.get("/api/event-preferences/options");
                    console.log(response.data);
                    setEventOptions(response.data);
                    setLoading(false);
               } catch (err) {
                    console.log("Error fetching event options");
                    setError(err.message);
                    setLoading(false);
               }
          };
          fetchEventOptions();
     }, []);
     return <EventOptionsContext.Provider value={{ eventOptions, loading, error }}>{children}</EventOptionsContext.Provider>;
}
