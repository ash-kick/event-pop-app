import { useState } from "react";
import EventSearchDisplay from "./EventsSearchDisplay";

export default function Events() {
     const [activeTab, setActiveTab] = useState("search");
     const [currentSearchBarValue, setCurrentSearchBarValue] = useState("");
     const [submittedSearchTerm, setSubmittedSearchTerm] = useState("");

     const handleSubmit = (e) => {
          e.preventDefault();
          setSubmittedSearchTerm(currentSearchBarValue);
     };

     return (
          <div className="events-page-container">
               <div className="event-tabs-container">
                    <button
                         className={`events-tab-button ${activeTab === "search" ? "active" : ""}`}
                         onClick={() => {
                              setActiveTab("search");
                         }}>
                         search
                    </button>
                    <button
                         className={`events-tab-button ${activeTab === "saved" ? "active" : ""}`}
                         onClick={() => {
                              setActiveTab("saved");
                         }}>
                         saved
                    </button>
                    <button
                         className={`events-tab-button ${activeTab === "upcoming" ? "active" : ""}`}
                         onClick={() => {
                              setActiveTab("upcoming");
                         }}>
                         upcoming
                    </button>
                    <div className="event-page-display">
                         {activeTab === "search" ? (
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
                         ) : (
                              ""
                         )}
                         {activeTab === "saved" ? "saved events place holder" : ""}
                         {activeTab === "upcoming" ? "upcoming events place holder" : ""}
                    </div>
               </div>
          </div>
     );
}
