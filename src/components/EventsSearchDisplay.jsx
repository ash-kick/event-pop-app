import SaveEventButton from "../components/SaveEventButton";
import dayjs from "dayjs";

export default function EventSearchDisplay({ currentSearchResponse, searchError, handleNextPage, handlePreviousPage, currentPage }) {
     if (searchError) {
          return (
               <div>
                    <p>{searchError}</p>
               </div>
          );
     }
     if (currentSearchResponse?.foundEvents) {
          return (
               <div className="search-events-display">
                    <ul className="search-events-list">
                         {currentSearchResponse.foundEvents.map((foundEvent) => (
                              <li key={foundEvent._id}>
                                   <div className="display-event-image-container">
                                        <img
                                             className="diplay-event-image"
                                             alt="image advertising event"
                                             src={foundEvent.eventImageUrl}
                                        />
                                   </div>
                                   <div className="display-event-name">{foundEvent.eventName}</div>
                                   {foundEvent.eventTypeName && foundEvent.eventTypeName !== "Undefined" ? (
                                        <div className="diplay-event-genre-sub-genre">
                                             {foundEvent.eventTypeName} {foundEvent.genreName ? `• ${foundEvent.genreName}` : null}{" "}
                                             {foundEvent.subGenreName ? `• ${foundEvent.subGenreName}` : null}
                                        </div>
                                   ) : null}
                                   <div className="diplay-event-city-venue">
                                        {foundEvent.cityName} • {foundEvent.venueName}
                                   </div>
                                   <div className="diplay-event-date-time">{dayjs(foundEvent.startDateTime).format("ddd, MMM D • h:mm A")}</div>
                                   {foundEvent.ticketMasterUrl ? (
                                        <a
                                             href={foundEvent.ticketMasterUrl}
                                             target="_blank"
                                             className="diplay-event-tickets-link">
                                             Get tickets!{" "}
                                        </a>
                                   ) : (
                                        <div className="diplay-event-tickets-unavailable">
                                             Tickets currently unavailable ... event {foundEvent.eventStatusCode}
                                        </div>
                                   )}
                                   <SaveEventButton eventId={foundEvent._id} />
                              </li>
                         ))}
                    </ul>
                    {currentPage > 1 ? (
                         <button
                              onClick={handlePreviousPage}
                              className="previous-button">
                              Previous
                         </button>
                    ) : (
                         <></>
                    )}
                    {currentSearchResponse.hasMore ? (
                         <button
                              onClick={handleNextPage}
                              className="next-button">
                              Next
                         </button>
                    ) : (
                         <div className="end-results-message">End of search results ...</div>
                    )}
               </div>
          );
     }
     return;
}
