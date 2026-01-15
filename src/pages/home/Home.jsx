import { useState, useEffect } from "react";
import axios from "axios";
import SaveEventButton from "../../components/SaveEventButton";
import Loading from "../../components/Loading";
import dayjs from "dayjs";

export default function Home() {
     const [upcomingEvents, setUpcomingEvents] = useState([]);
     const userName = localStorage.getItem("userName");
     const userCity = localStorage.getItem("userCity");
     const token = localStorage.getItem("token");
     const [loading, setLoading] = useState(true);

     useEffect(() => {
          const getUpcomingEvents = async () => {
               try {
                    const response = await axios.get("/api/events/upcoming", {
                         params: {
                              userCity: userCity,
                         },
                         headers: {
                              Authorization: `Bearer ${token}`,
                         },
                    });
                    setUpcomingEvents(response.data.upcomingEvents);
                    setLoading(false);
               } catch (err) {
                    console.log(err.message);
                    setLoading(false);
               }
          };
          getUpcomingEvents();
     }, []);

     return (
          <div className="home-container">
               <div className="home-welcome-message">
                    <h2>Hi, {userName}!</h2>
               </div>
               <div className="upcoming-event-container">
                    <h2>Upcoming Events In {userCity}</h2>
                    {loading ? (
                         <Loading message="Loading upcoming events ..."></Loading>
                    ) : (
                         <ul className="upcoming-event-list">
                              {upcomingEvents?.map((upcomingEvent) => (
                                   <li
                                        key={upcomingEvent._id}
                                        className="upcoming-event-list-item">
                                        <div className="upcoming-event-image-save-container">
                                             <img
                                                  src={upcomingEvent.eventImageUrl}
                                                  alt="image of event"
                                                  className="upcoming-event-image"
                                             />
                                             <SaveEventButton
                                                  eventId={upcomingEvent._id}
                                                  className="upcoming-event-save-button"
                                             />
                                        </div>
                                        <div className="upcoming-event-name">{upcomingEvent.eventName}</div>
                                        {upcomingEvent.eventTypeName && upcomingEvent.eventTypeName !== "Undefined" ? (
                                             <div className="upcoming-event-genre-sub-genre">
                                                  {upcomingEvent.eventTypeName} {upcomingEvent.genreName ? `• ${upcomingEvent.genreName}` : null}{" "}
                                                  {upcomingEvent.subGenreName ? `• ${upcomingEvent.subGenreName}` : null}
                                             </div>
                                        ) : null}
                                        <div className="upcoming-event-city-venue">
                                             {upcomingEvent.cityName} • {upcomingEvent.venueName}
                                        </div>
                                        <div className="upcoming-event-date-time">
                                             {dayjs(upcomingEvent.startDateTime).format("ddd, MMM D • h:mm A")}
                                        </div>
                                        {upcomingEvent.ticketMasterUrl ? (
                                             <button
                                                  onClick={() => window.open(upcomingEvent.ticketMasterUrl, "_blank")}
                                                  className="get-tickets-button">
                                                  Get tickets!
                                             </button>
                                        ) : (
                                             <div className="upcoming-event-tickets-unavailable">
                                                  Tickets currently unavailable ... event {upcomingEvent.eventStatusCode}
                                             </div>
                                        )}
                                   </li>
                              ))}
                         </ul>
                    )}
               </div>
          </div>
     );
}
