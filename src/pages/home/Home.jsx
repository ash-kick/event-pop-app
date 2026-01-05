import EventSearchDisplay from "../../components/EventsSearchDisplay";
import { EventOptionsContext } from "../../contexts/EventOptionsContext";
import { useState, useContext, useEffect } from "react";
import axios from "axios";

export default function Home() {
     const userName = localStorage.getItem("userName");
     const [currentSearchBarValue, setCurrentSearchBarValue] = useState("");
     const [submittedSearchTerm, setSubmittedSearchTerm] = useState("");
     const { eventOptions, loading } = useContext(EventOptionsContext);
     const userCity = localStorage.getItem("userCity");
     const [submittedCity, setSubmittedCity] = useState(userCity || "");
     // checking that user city exists in options list
     const validCity = eventOptions?.locations?.includes(userCity) ? userCity : null;
     useEffect(() => {
          if (!loading && validCity && !submittedCity) {
               setSubmittedCity(validCity);
          }
     }, [loading, validCity, submittedCity]);

     async function handleSubmit(e) {
          // LEFT OFF HERE, need to add api call to this handle submit for the search values... unsure what this means for event display component
          e.preventDefault();
          try {
               const formData = new FormData(e.target);
               setSubmittedSearchTerm(currentSearchBarValue);
               setSubmittedCity(formData.get("usercity") || ""); // i think this is wrong
               const token = localStorage.getItem("token");
               console.log("Token exists:", !!token);
               console.log("Token length:", token?.length);
               console.log("Token preview:", token ? `${token.substring(0, 20)}...` : "null");
               const response = await axios.get("/api/events/search", {
                    params: {
                         searchValue: currentSearchBarValue,
                         cityNameValue: formData.get("usercity"), // changing this later
                    },

                    headers: {
                         Authorization: `Bearer ${token}`,
                    },
               });
               console.log(response);
          } catch (err) {
               console.log(err);
          }
     }
     return (
          <div className="home-container">
               <div className="home-content-box">
                    <div className="home-welcome-message">
                         <h1>Hi, {userName}!</h1>
                    </div>
                    <div className="event-page-display">
                         <div>
                              <form onSubmit={handleSubmit}>
                                   <label>location</label>
                                   <select
                                        type="text"
                                        name="usercity"
                                        value={validCity || ""}
                                        onChange={(event) => setSubmittedCity(event.target.value)}
                                        required>
                                        {loading ? (
                                             <option> Loading cities ...</option>
                                        ) : (
                                             eventOptions?.locations.map((city) => (
                                                  <option
                                                       key={city}
                                                       value={city}>
                                                       {city}
                                                  </option>
                                             ))
                                        )}
                                   </select>
                                   <input
                                        type="search"
                                        placeholder="Artist, Venue, Keyword"
                                        value={currentSearchBarValue}
                                        onChange={(event) => setCurrentSearchBarValue(event.target.value)}></input>
                                   <button type="submit">Search</button>
                              </form>
                              <EventSearchDisplay
                                   submittedSearchTerm={submittedSearchTerm}
                                   submittedCity={submittedCity}
                              />
                         </div>
                    </div>
                    <div className="upcoming-event-feed">
                         <h2>Upcoming Events in Your Area</h2>
                    </div>
               </div>
          </div>
     );
}
