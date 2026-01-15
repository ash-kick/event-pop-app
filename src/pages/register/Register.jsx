import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EventOptionsContext } from "../../contexts/EventOptionsContext";
import { getErrorMessage } from "../../utils/errorHandler";
import axios from "axios";

export default function Register() {
     const { eventOptions, loading } = useContext(EventOptionsContext);
     const [isSubmitting, setIsSubmitting] = useState(false);
     const [error, setError] = useState(null);
     const [success, setSuccess] = useState(false);
     const navigate = useNavigate();
     const successMessage = "You've successfully registered!";
     async function onSubmit(e) {
          e.preventDefault();
          // clearing any old error or success status
          setError(null);
          setSuccess(false);
          // start of submit process
          setIsSubmitting(true);
          try {
               const formData = new FormData(e.target);
               const response = await axios.post("/api/user/register", {
                    userName: formData.get("username"),
                    password: formData.get("password"),
                    email: formData.get("email"),
                    userCity: formData.get("usercity"),
               });
               setSuccess(true);
               console.log(response.data);
               setTimeout(() => {
                    navigate("/login");
               }, 1000);
          } catch (err) {
               setError(getErrorMessage(err));
          } finally {
               setIsSubmitting(false);
          }
     }
     return (
          <div className="register-container">
               <h2>Register</h2>
               {error && <div className="register-error-message">{error}</div>}
               {success && <div className="register-success-message">{successMessage}</div>}
               <form onSubmit={onSubmit}>
                    <label>username</label>
                    <input
                         type="text"
                         name="username"
                         required></input>
                    <label>email</label>
                    <input
                         type="email"
                         name="email"
                         required></input>
                    <label>password</label>
                    <input
                         type="password"
                         name="password"
                         required></input>
                    <label>city</label>
                    <select
                         type="text"
                         name="usercity"
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
                    <input
                         type="submit"
                         value={isSubmitting ? "registering..." : "register"}
                         className="register-button"
                         disabled={isSubmitting}></input>
               </form>
          </div>
     );
}
