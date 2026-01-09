import axios from "axios";
import { useState, useEffect } from "react";

export default function Preferences() {
     const [preferences, setPreferences] = useState(null);
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
               <form>
                    <label htmlFor="alerts-on">Alerts On</label>
                    {preferences?.alertsOn ? (
                         <select
                              name="alerts-on"
                              id="alerts-on">
                              <option
                                   value="true"
                                   selected>
                                   True
                              </option>
                              <option value="false">False</option>
                         </select>
                    ) : (
                         <select
                              name="alerts-on"
                              id="alerts-on">
                              <option value="true">True</option>
                              <option
                                   value="false"
                                   selected>
                                   False
                              </option>
                         </select>
                    )}
                    <label>Location</label>
               </form>
          </div>
     );
}
