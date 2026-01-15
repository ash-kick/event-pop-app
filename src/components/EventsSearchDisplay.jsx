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
               <div>
                    <ul>
                         {currentSearchResponse.foundEvents.map((foundEvent) => (
                              <li key={foundEvent._id}>
                                   <div>
                                        <img src={foundEvent.eventImageUrl} />
                                   </div>
                                   <div>{foundEvent.eventName}</div>
                                   {foundEvent.eventTypeName && foundEvent.eventTypeName !== "Undefined" ? (
                                        <div>
                                             {foundEvent.eventTypeName} {foundEvent.genreName ? `• ${foundEvent.genreName}` : null}{" "}
                                             {foundEvent.subGenreName ? `• ${foundEvent.subGenreName}` : null}
                                        </div>
                                   ) : null}
                                   <div>
                                        {foundEvent.cityName} • {foundEvent.venueName}
                                   </div>
                                   <div>{dayjs(foundEvent.startDateTime).format("ddd, MMM D • h:mm A")}</div>
                                   {foundEvent.ticketMasterUrl ? (
                                        <a
                                             href={foundEvent.ticketMasterUrl}
                                             target="_blank">
                                             Get tickets!{" "}
                                        </a>
                                   ) : (
                                        <div>Tickets currently unavailable ... event {foundEvent.eventStatusCode}</div>
                                   )}
                                   <SaveEventButton eventId={foundEvent._id} />
                              </li>
                         ))}
                    </ul>
                    {currentPage > 1 ? <button onClick={handlePreviousPage}>Previous</button> : <></>}
                    {currentSearchResponse.hasMore ? <button onClick={handleNextPage}>Next</button> : <div>End of search results ...</div>}
               </div>
          );
     }
     return;
}
