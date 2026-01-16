import EventSearchDisplay from "../../components/EventsSearchDisplay";
import { EventOptionsContext } from "../../contexts/EventOptionsContext";
import { useState, useContext, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

export default function Search() {
     // search bar related consts
     const [currentSearchBarValue, setCurrentSearchBarValue] = useState("");
     const [submittedSearchTerm, setSubmittedSearchTerm] = useState("");
     const [currentSearchResponse, setCurrentSearchResponse] = useState([]);
     const [currentPage, setCurrentPage] = useState(1);
     const [searchError, setSearchError] = useState(null);
     const { eventOptions, loading } = useContext(EventOptionsContext);
     const userCity = localStorage.getItem("userCity");
     const [submittedCity, setSubmittedCity] = useState(userCity || "");

     // checking that user city exists in options list
     const validCity = eventOptions?.locations?.includes(userCity) ? userCity : null;
     useEffect(() => {
          if (!loading && validCity && !submittedCity) {
               setSubmittedCity(validCity);
          }
     }, [loading, validCity, submittedCity]);

     async function handleSubmit(e) {
          e.preventDefault();
          try {
               const formData = new FormData(e.target);
               setSubmittedSearchTerm(currentSearchBarValue);
               setCurrentPage(1);
               setSearchError(null);
               const token = localStorage.getItem("token");
               const response = await axios.get("/api/events/search", {
                    params: {
                         searchValue: currentSearchBarValue,
                         cityNameValue: submittedCity,
                         page: 1,
                    },

                    headers: {
                         Authorization: `Bearer ${token}`,
                    },
               });
               setCurrentSearchResponse(response.data);
          } catch (err) {
               if (err.response?.status === 404) {
                    setCurrentSearchResponse(null);
                    setSearchError(err.response.data.message || "No events found for this search.");
               } else {
                    console.log(err);
                    setSearchError("An error occurred while searching. Please try again.");
               }
          }
     }

     async function handleNextPage() {
          try {
               setSearchError(null);
               const token = localStorage.getItem("token");
               const response = await axios.get("/api/events/search", {
                    params: {
                         searchValue: submittedSearchTerm,
                         cityNameValue: submittedCity,
                         page: currentPage + 1,
                    },

                    headers: {
                         Authorization: `Bearer ${token}`,
                    },
               });
               setCurrentPage(currentPage + 1);
               setCurrentSearchResponse(response.data);
               window.scrollTo(0, 0);
          } catch (err) {
               if (err.response?.status === 404) {
                    setCurrentSearchResponse(null);
                    setSearchError(err.response.data.message || "No events found for this search.");
               } else {
                    console.log(err);
                    setSearchError("An error occurred while searching. Please try again.");
               }
          }
     }

     async function handlePreviousPage() {
          try {
               setSearchError(null);
               const token = localStorage.getItem("token");
               const response = await axios.get("/api/events/search", {
                    params: {
                         searchValue: submittedSearchTerm,
                         cityNameValue: submittedCity,
                         page: currentPage - 1,
                    },

                    headers: {
                         Authorization: `Bearer ${token}`,
                    },
               });
               setCurrentPage(currentPage - 1);
               setCurrentSearchResponse(response.data);
               window.scrollTo(0, 0);
          } catch (err) {
               if (err.response?.status === 404) {
                    setCurrentSearchResponse(null);
                    setSearchError(err.response.data.message || "No events found for this search.");
               } else {
                    console.log(err);
                    setSearchError("An error occurred while searching. Please try again.");
               }
          }
     }

     return (
          <div className="search-container">
               <div className="search-bar-display">
                    <h2 className="search-header">Search for Events</h2>
                    <form
                         onSubmit={handleSubmit}
                         className="search-bar">
                         <label>location: </label>
                         <select
                              className="search-bar-select"
                              type="text"
                              name="usercity"
                              value={submittedCity || ""}
                              onChange={(event) => setSubmittedCity(event.target.value)}
                              required>
                              {loading ? (
                                   <option> Loading cities ...</option>
                              ) : (
                                   eventOptions?.locations.map((city) => (
                                        <option
                                             key={city}
                                             value={city}>
                                             {city}
                                        </option>
                                   ))
                              )}
                         </select>
                         <div className="search-bar-seperator"></div>
                         <input
                              type="search"
                              placeholder="Artist, Venue, Keyword"
                              className="search-bar-input"
                              value={currentSearchBarValue}
                              onChange={(event) => setCurrentSearchBarValue(event.target.value)}></input>
                         <button
                              type="submit"
                              className="search-bar-button">
                              <FaSearch className="search-icon" />
                         </button>
                    </form>
                    <EventSearchDisplay
                         currentSearchResponse={currentSearchResponse}
                         searchError={searchError}
                         handleNextPage={handleNextPage}
                         handlePreviousPage={handlePreviousPage}
                         currentPage={currentPage}
                    />
               </div>
          </div>
     );
}
