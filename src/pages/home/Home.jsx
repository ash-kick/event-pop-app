import EventSearchDisplay from "../../components/EventsSearchDisplay";
import { EventOptionsContext } from "../../contexts/EventOptionsContext";
import { useState, useContext } from "react";

export default function Home() {
     const userName = localStorage.getItem("userName");
     const [currentSearchBarValue, setCurrentSearchBarValue] = useState("");
     const [submittedSearchTerm, setSubmittedSearchTerm] = useState("");
     const [submittedCity, setSubmittedCity] = useState("");
     const { eventOptions, loading } = useContext(EventOptionsContext);
     const userCity = localStorage.getItem("userCity");
     // checking that user city exists in options list
     const validCity = eventOptions?.locations?.includes(userCity) ? userCity : null;

     const handleSubmit = (e) => {
          e.preventDefault();
          setSubmittedSearchTerm(currentSearchBarValue);
     };
     return (
          <div className="home-container">
               <div className="home-content-box">
                    <div className="home-welcome-message">
                         <h1>Welcome back {userName}!</h1>
                    </div>
                    <div className="event-page-display">
                         <div>
                              <form onSubmit={handleSubmit}>
                                   <label>location</label>
                                   <select
                                        type="text"
                                        name="usercity"
                                        defaultValue={validCity || ""}
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
