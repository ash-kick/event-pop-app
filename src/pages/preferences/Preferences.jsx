import axios from "axios";
import { useState, useEffect } from "react";

export default function Preferences() {
     const [preferences, setPreferences] = useState(null);
     const [alertsOn, setAlertsOn] = useState(null);
     const token = localStorage.getItem("token");

     useEffect(() => {
          const getPreferences = async () => {
               try {
                    const response = await axios.get("/api/event-preferences", {
                         headers: {
                              Authorization: `Bearer ${token}`,
                         },
                    });
                    setPreferences(response.data);
                    setAlertsOn(response.data?.alertsOn);
                    console.log("Retrieved preferences!");
               } catch (err) {
                    console.log(err.message);
               }
          };
          getPreferences();
     }, []);

     // LEFT OFF HERE NEED TO FINISH FORM
     return (
          <div className="preferences-container">
               <h2>Preferences</h2>
               <form>
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
                    <label>Location</label>
               </form>
          </div>
     );
}
