export default function EventSearchDisplay({ currentSearchResponse, searchError, handleNextPage, handlePreviousPage, currentPage, handleSaveEvent }) {
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
                                   <div>Event: {foundEvent.eventName}</div>
                                   <div>City: {foundEvent.cityName}</div>
                                   <div>Venue: {foundEvent.venueName}</div>
                                   <div>Date: {foundEvent.startDateTime}</div>
                                   {foundEvent.eventTypeName && foundEvent.eventTypeName !== "Undefined" ? (
                                        <div>Event Type: {foundEvent.eventTypeName}</div>
                                   ) : (
                                        <></>
                                   )}
                                   {foundEvent.eventTypeName === "Music" ? (
                                        <div>
                                             <div>
                                                  Genre: {foundEvent.genreName} - {foundEvent.subGenreName}
                                             </div>
                                        </div>
                                   ) : (
                                        <></>
                                   )}
                                   {foundEvent.ticketMasterUrl ? (
                                        <a
                                             href={foundEvent.ticketMasterUrl}
                                             target="_blank">
                                             Get tickets!{" "}
                                        </a>
                                   ) : (
                                        <div>Tickets currently unavailable ... event {foundEvent.eventStatusCode}</div>
                                   )}
                                   <button onClick={() => handleSaveEvent(foundEvent._id)}>Save</button>
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
