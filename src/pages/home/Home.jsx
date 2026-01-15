import { useState, useEffect } from "react";
import axios from "axios";
import SaveEventButton from "../../components/SaveEventButton";
import Loading from "../../components/Loading";

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
                                   <li key={upcomingEvent._id}>
                                        <img
                                             src={upcomingEvent.eventImageUrl}
                                             alt="event-image"
                                             className="upcoming-event-image"
                                        />
                                        <p>{upcomingEvent.eventName}</p>
                                        <p>{upcomingEvent.startDateTime}</p>
                                        <p>{upcomingEvent.venueName}</p>
                                        <SaveEventButton eventId={upcomingEvent._id} />
                                   </li>
                              ))}
                         </ul>
                    )}
               </div>
          </div>
     );
}
