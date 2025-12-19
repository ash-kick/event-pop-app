import EventSearchDisplay from "../events/EventsSearchDisplay";
import { useState } from "react";

export default function Home() {
     const userName = localStorage.getItem("userName");
     const [currentSearchBarValue, setCurrentSearchBarValue] = useState("");
     const [submittedSearchTerm, setSubmittedSearchTerm] = useState("");

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
                    <div className="home-feeds-container">
                         <div className="event-page-display">
                              <div>
                                   <form onSubmit={handleSubmit}>
                                        <input
                                             type="search"
                                             placeholder="🔎 Search Events"
                                             value={currentSearchBarValue}
                                             onChange={(event) => setCurrentSearchBarValue(event.target.value)}
                                        />
                                        <button type="submit">Search</button>
                                   </form>
                                   <EventSearchDisplay submittedSearchTerm={submittedSearchTerm} />
                              </div>
                         </div>
                         <div className="upcoming-event-feed">
                              <h2>Upcoming Events in Your Area</h2>
                         </div>
                    </div>
               </div>
          </div>
     );
}
