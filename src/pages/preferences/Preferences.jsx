import axios from "axios";
import { useState, useEffect, useContext } from "react";
import dayjs from "dayjs";
import { EventOptionsContext } from "../../contexts/EventOptionsContext";

export default function Preferences() {
     const [preferences, setPreferences] = useState(null);
     const [alertsOn, setAlertsOn] = useState(null);
     const [location, setLocation] = useState(null);
     const [eventsThrough, setEventsThrough] = useState(dayjs().add(3, "month").format("YYYY-MM-DD"));
     const token = localStorage.getItem("token");
     // will use event options context to populate drop down options for each field in the form
     const { eventOptions, loading } = useContext(EventOptionsContext);

     useEffect(() => {
          // on page load, get preferences for a particular user, set those as the defaults for the form
          const getPreferences = async () => {
               try {
                    const response = await axios.get("/api/event-preferences", {
                         headers: {
                              Authorization: `Bearer ${token}`,
                         },
                    });
                    setPreferences(response.data);
                    setAlertsOn(response.data?.alertsOn);
                    setLocation(response.data?.location);
                    console.log("Retrieved preferences!");
               } catch (err) {
                    console.log(err.message);
               }
          };
          getPreferences();
     }, []);
     return (
          <div className="preferences-container">
               <h2>Preferences</h2>
               <form className="preferences-form">
                    <label htmlFor="alerts-on">Alerts On</label>
                    <select
                         name="alerts-on"
                         id="alerts-on"
                         value={alertsOn === null ? "" : alertsOn.toString()}
                         onChange={(e) => {
                              // if the target value is true set alerts on to true (otherwise it will set alerts on to false)
                              setAlertsOn(e.target.value === "true");
                         }}>
                         <option value="true">True</option>
                         <option value="false">False</option>
                    </select>
                    <label htmlFor="location">Location</label>
                    <select
                         name="location"
                         id="location"
                         value={location === null ? "" : location}
                         onChange={(e) => {
                              setLocation(e.target.value);
                         }}>
                         {eventOptions.locations.map((loc) => (
                              <option key={loc}>{loc}</option>
                         ))}
                    </select>
                    <label htmlFor="events-through">Events Through</label>
                    <input
                         type="date"
                         id="events-through"
                         name="events-through"
                         value={eventsThrough}
                         onChange={(e) => {
                              setEventsThrough(e.target.value);
                         }}
                    />
               </form>
          </div>
     );
}
