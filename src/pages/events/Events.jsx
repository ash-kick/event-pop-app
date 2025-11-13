import { useState } from "react";
import EventSearchDisplay from "./EventsSearchDisplay";

export default function Events() {
     const [activeTab, setActiveTab] = useState("search");
     console.log(activeTab);
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
                                   <form>
                                        <input
                                             type="search"
                                             placeholder="🔎 Search Events"
                                        />
                                   </form>
                                   <EventSearchDisplay />
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
