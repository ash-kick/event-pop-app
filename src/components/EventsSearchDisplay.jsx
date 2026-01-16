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
                              <li
                                   key={foundEvent._id}
                                   className="search-event-list-item">
                                   <div className="search-event-image-save">
                                        <img
                                             className="search-event-image"
                                             alt="image of event"
                                             src={foundEvent.eventImageUrl}
                                        />
                                        <SaveEventButton
                                             className="search-event-save-button"
                                             eventId={foundEvent._id}
                                        />
                                   </div>
                                   <div className="search-event-name">{foundEvent.eventName}</div>
                                   {foundEvent.eventTypeName && foundEvent.eventTypeName !== "Undefined" ? (
                                        <div className="search-event-genre-sub-genre">
                                             {foundEvent.eventTypeName}{" "}
                                             {foundEvent.genreName && foundEvent.genreName !== "Undefined" ? `• ${foundEvent.genreName}` : null}{" "}
                                             {foundEvent.subGenreName && foundEvent.subGenreName !== "Undefined"
                                                  ? `• ${foundEvent.subGenreName}`
                                                  : null}
                                        </div>
                                   ) : null}
                                   <div className="search-event-city-venue">
                                        {foundEvent.cityName} • {foundEvent.venueName}
                                   </div>
                                   <div className="search-event-date-time">{dayjs(foundEvent.startDateTime).format("ddd, MMM D • h:mm A")}</div>
                                   {foundEvent.ticketMasterUrl ? (
                                        <button
                                             onClick={() => window.open(foundEvent.ticketMasterUrl, "_blank")}
                                             className="get-tickets-button">
                                             Get tickets!
                                        </button>
                                   ) : (
                                        <div className="serach-event-tickets-unavailable">
                                             Tickets currently unavailable ... event {foundEvent.eventStatusCode}
                                        </div>
                                   )}
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
