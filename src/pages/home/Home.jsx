import EventSearchDisplay from "../../components/EventsSearchDisplay";
import { EventOptionsContext } from "../../contexts/EventOptionsContext";
import { useState, useContext, useEffect } from "react";
import axios from "axios";

export default function Home() {
     const userName = localStorage.getItem("userName");
     const [currentSearchBarValue, setCurrentSearchBarValue] = useState("");
     const [submittedSearchTerm, setSubmittedSearchTerm] = useState("");
     const [currentSearchResponse, setCurrentSearchResponse] = useState([]);
     const [searchError, setSearchError] = useState(null);
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
          e.preventDefault();
          try {
               const formData = new FormData(e.target);
               setSubmittedSearchTerm(currentSearchBarValue);
               setSearchError(null);
               const token = localStorage.getItem("token");
               const response = await axios.get("/api/events/search", {
                    params: {
                         searchValue: currentSearchBarValue,
                         cityNameValue: submittedCity, // changing this later
                    },

                    headers: {
                         Authorization: `Bearer ${token}`,
                    },
               });
               setCurrentSearchResponse(response.data);
          } catch (err) {
               if (err.response?.status === 404) {
                    setCurrentSearchResponse(null);
                    setSearchError(err.response.data.message || "No events found for this search.");
               } else {
                    console.log(err);
                    setSearchError("An error occurred while searching. Please try again.");
               }
          }
     }

     return (
          <div className="home-container">
               <div className="home-content-box">
                    <div className="home-welcome-message">
                         <h1>Hi, {userName}!</h1>
                    </div>
                    <div className="event-page-display">
                         <div className="search-bar-display">
                              <form onSubmit={handleSubmit}>
                                   <h2>Search for events: </h2>
                                   <label>location</label>
                                   <select
                                        type="text"
                                        name="usercity"
                                        value={submittedCity || ""}
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
                                   currentSearchResponse={currentSearchResponse}
                                   searchError={searchError}
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
