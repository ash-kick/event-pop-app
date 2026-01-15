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
               <div className="upcoming-event-feed">
                    <h2>Upcoming Events In {userCity}</h2>
                    {loading ? (
                         <Loading message="Loading upcoming events ..."></Loading>
                    ) : (
                         <ul>
                              {upcomingEvents?.map((upcomingEvent) => (
                                   <li
                                        key={upcomingEvent._id}
                                        className="event-list-item">
                                        <img
                                             src={upcomingEvent.eventImageUrl}
                                             alt="image of event"
                                             className="display-event-image"
                                        />
                                        <div className="display-event-name">{upcomingEvent.eventName}</div>
                                        {upcomingEvent.eventTypeName && upcomingEvent.eventTypeName !== "Undefined" ? (
                                             <div className="display-event-genre-sub-genre">
                                                  {upcomingEvent.eventTypeName} {upcomingEvent.genreName ? `• ${upcomingEvent.genreName}` : null}{" "}
                                                  {upcomingEvent.subGenreName ? `• ${upcomingEvent.subGenreName}` : null}
                                             </div>
                                        ) : null}
                                        <div className="display-event-city-venue">
                                             {upcomingEvent.cityName} • {upcomingEvent.venueName}
                                        </div>
                                        <div className="display-event-date-time">
                                             {dayjs(upcomingEvent.startDateTime).format("ddd, MMM D • h:mm A")}
                                        </div>
                                        {upcomingEvent.ticketMasterUrl ? (
                                             <button
                                                  onClick={() => window.open(upcomingEvent.ticketMasterUrl, "_blank")}
                                                  className="get-tickets-button">
                                                  Get tickets!
                                             </button>
                                        ) : (
                                             <div className="display-event-tickets-unavailable">
                                                  Tickets currently unavailable ... event {upcomingEvent.eventStatusCode}
                                             </div>
                                        )}
                                        <SaveEventButton eventId={upcomingEvent._id} />
                                   </li>
                              ))}
                         </ul>
                    )}
               </div>
          </div>
     );
}
