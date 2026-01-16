import axios from "axios";
import { useState, useEffect, useContext } from "react";
import dayjs from "dayjs";
import { EventOptionsContext } from "../../contexts/EventOptionsContext";
import Loading from "../../components/Loading";

export default function Preferences() {
     const [preferences, setPreferences] = useState(null);
     const [preferencesLoading, setPreferencesLoading] = useState(true);
     const [alertsOn, setAlertsOn] = useState(null);
     const [location, setLocation] = useState(null);
     const [eventsThrough, setEventsThrough] = useState(dayjs().add(3, "month").format("YYYY-MM-DD"));
     const [types, setTypes] = useState(null);
     const [genres, setGenres] = useState(null);
     const [successMessage, setSuccessMessage] = useState(null);
     const [errors, setErrors] = useState({});
     const token = localStorage.getItem("token");
     const minDate = dayjs().format("YYYY-MM-DD");
     const maxDate = dayjs().add(1, "year").format("YYYY-MM-DD");

     // will use event options context to populate drop down options for each field in the form
     const { eventOptions, loading } = useContext(EventOptionsContext);

     useEffect(() => {
          // on page load, get preferences for a particular user, set those as the defaults for the form
          const getPreferences = async () => {
               try {
                    const response = await axios.get("/api/event-preferences", {
                         headers: {
                              Authorization: `Bearer ${token}`,
                         },
                    });
                    setPreferences(response.data);
                    setAlertsOn(response.data?.alertsOn);
                    setLocation(response.data?.eventLocationPreference);
                    setTypes(response.data?.eventTypePreference);
                    setGenres(response.data?.eventTypeGenrePreference);
                    setSuccessMessage(null);
                    setErrors({});
                    console.log("Retrieved preferences!");
                    setPreferencesLoading(false);
               } catch (err) {
                    console.log(err.message);
                    setPreferencesLoading(false);
               }
          };
          getPreferences();
     }, []);
     // creating validation form function for catching errors with preferences form
     function validateForm() {
          const newErrors = {};
          if (eventsThrough) {
               const selectedDate = dayjs(eventsThrough);
               const today = dayjs();
               const oneYearFromNow = dayjs().add(1, "year");

               if (selectedDate.isBefore(today, "day")) {
                    newErrors.eventsThrough = "Events through date cannot be in the past.";
               }
               if (selectedDate.isAfter(oneYearFromNow, "day")) {
                    newErrors.eventsThrough = "Events through date cannot exceed one year from today";
               }
          } else {
               newErrors.eventsThrough = "Events through date is required";
          }
          if (!location || location === "") {
               newErrors.location = "Please select a location.";
          }
          if (alertsOn === null) {
               newErrors.alertsOn = "Please select an alerts setting.";
          }

          setErrors(newErrors);
          // return false if there are errors and true if there are none
          return Object.keys(newErrors).length === 0;
     }

     async function handleOnSubmit(e) {
          e.preventDefault();
          setSuccessMessage(null);

          // adding validation check at submit
          if (!validateForm()) {
               window.scrollTo({ top: 0, behavior: "smooth" });
               return;
          }
          const newPreferences = {
               eventTypePreference: types,
               eventTypeGenrePreference: genres,
               eventLocationPreference: location,
               eventThroughPreference: new Date(eventsThrough),
               alertsOn: alertsOn,
          };
          try {
               await axios.patch("/api/event-preferences", newPreferences, {
                    headers: {
                         Authorization: `Bearer ${token}`,
                    },
               });
               console.log("Preferences updated successfully!");
               setSuccessMessage("Successfully saved preferences!");
               setErrors({});
               window.scrollTo({ top: 0, behavior: "smooth" });
          } catch (err) {
               console.log("Error updating preferences:", err.message);
               setErrors({ submit: "Failed to save preferences." });
          }
     }

     return (
          <div className="preferences-container">
               <h2 className="preferences-header">Your Preferences</h2>
               {successMessage ? <p className="preference-save-success-message">{successMessage}</p> : null}
               {errors.submit ? <p className="preference-error-message">{errors.submit}</p> : null}
               <p>Update and set preferences for alerts using the form below.</p>
               {loading || preferencesLoading ? (
                    <Loading message="Preferences loading ..."></Loading>
               ) : (
                    <form
                         className="preferences-form"
                         onSubmit={handleOnSubmit}>
                         {/* ALERTS */}
                         <label
                              htmlFor="alerts-on"
                              className="preference-name">
                              Alerts On
                         </label>
                         <select
                              name="alerts-on"
                              id="alerts-on"
                              value={alertsOn === null ? "" : alertsOn.toString()}
                              className="preference-select"
                              onChange={(e) => {
                                   // if the target value is true set alerts on to true (otherwise it will set alerts on to false)
                                   setAlertsOn(e.target.value === "true");
                                   if (errors.alertsOn) {
                                        setErrors({ ...errors, alertsOn: null });
                                   }
                              }}>
                              <option value="true">True</option>
                              <option value="false">False</option>
                         </select>
                         {errors.alertsOn && <p className="preference-field-error">{errors.alertsOn}</p>}
                         {/* LOCATIONS */}
                         <label
                              htmlFor="location"
                              className="preference-name">
                              Location
                         </label>
                         <select
                              name="location"
                              id="location"
                              value={location === null ? "" : location}
                              className="preference-select"
                              onChange={(e) => {
                                   setLocation(e.target.value);
                                   if (errors.location) {
                                        setErrors({ ...errors, location: null });
                                   }
                              }}>
                              {eventOptions.locations.map((loc) => (
                                   <option key={loc}>{loc}</option>
                              ))}
                         </select>
                         {errors.location && <p className="preference-field-error">{errors.location}</p>}
                         {/* EVENTS THROUGH DATE */}
                         <label
                              htmlFor="events-through"
                              className="preference-name">
                              Events Through
                         </label>
                         <input
                              type="date"
                              id="events-through"
                              name="events-through"
                              className="preference-input"
                              min={minDate}
                              max={maxDate}
                              value={eventsThrough}
                              onChange={(e) => {
                                   setEventsThrough(e.target.value);
                                   if (errors.eventsThrough) {
                                        setErrors({ ...errors, eventsThrough: null });
                                   }
                              }}
                         />
                         {errors.eventsThrough && <p className="preference-field-error">{errors.eventsThrough}</p>}
                         {/* EVENT TYPES */}
                         <fieldset className="preference-checkbox-boxes">
                              <legend
                                   htmlFor="types"
                                   className="preference-name">
                                   Select Your Favorite Event Types:
                              </legend>
                              {eventOptions.types
                                   .filter((type) => type !== "Undefined")
                                   .map((type) => (
                                        <div key={type}>
                                             <input
                                                  type="checkbox"
                                                  id={type}
                                                  name="types"
                                                  value={type}
                                                  className="preference-input-checkbox"
                                                  checked={types?.includes(type) || false}
                                                  onChange={(e) => {
                                                       const type = e.target.value;
                                                       const isChecked = e.target.checked;

                                                       // if the checkbox for the type is checked, check if it exists in the list and add it if not
                                                       if (isChecked) {
                                                            setTypes((previousTypes) =>
                                                                 previousTypes?.includes(type) ? previousTypes : [...(previousTypes || []), type]
                                                            );
                                                       }
                                                       // if the checkbox is unchecked make sure the type is removed from the list
                                                       else setTypes((previousTypes) => (previousTypes || []).filter((oldType) => oldType !== type));
                                                  }}
                                             />
                                             <label htmlFor={type}>{type}</label>
                                        </div>
                                   ))}
                         </fieldset>
                         {/* GENRES */}
                         <fieldset className="preference-checkbox-boxes">
                              <legend
                                   htmlFor="genres"
                                   className="preference-name">
                                   Select Your Favorite Genres:
                              </legend>
                              {eventOptions.genres
                                   .filter((genre) => genre !== "Undefined")
                                   .map((genre) => (
                                        <div key={genre}>
                                             <input
                                                  type="checkbox"
                                                  id={genre}
                                                  name="genres"
                                                  value={genre}
                                                  checked={genres?.includes(genre) || false}
                                                  className="preference-input-checkbox"
                                                  onChange={(e) => {
                                                       const genre = e.target.value;
                                                       const isChecked = e.target.checked;

                                                       // if the checkbox for the genre is checked, check if it exists in the list and add it if not
                                                       if (isChecked) {
                                                            setGenres((previousGenres) =>
                                                                 previousGenres?.includes(genre) ? previousGenres : [...(previousGenres || []), genre]
                                                            );
                                                       }
                                                       // if the checkbox is unchecked make sure the genre is removed from the list
                                                       else
                                                            setGenres((previousGenres) =>
                                                                 (previousGenres || []).filter((oldGenre) => oldGenre !== genre)
                                                            );
                                                  }}
                                             />

                                             <label
                                                  htmlFor={genre}
                                                  className="preference-genre-name">
                                                  {genre}
                                             </label>
                                        </div>
                                   ))}
                         </fieldset>
                         {/* SUBMIT BUTTON */}
                         <button
                              type="submit"
                              className="save-preferences-button">
                              Save Preferences
                         </button>
                    </form>
               )}
          </div>
     );
}
