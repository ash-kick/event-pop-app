import { useContext, useState } from "react";
import { EventOptionsContext } from "../../contexts/EventOptionsContext";
import axios from "axios";

export default function Register() {
     const { eventOptions, loading } = useContext(EventOptionsContext);
     const [isSubmitting, setIsSubmitting] = useState(false);
     async function onSubmit(e) {
          e.preventDefault();
          setIsSubmitting(true);
          try {
               const formData = new FormData(e.target);
               const response = await axios.post("/api/user/register", {
                    userName: formData.get("username"),
                    password: formData.get("password"),
                    email: formData.get("email"),
                    userCity: formData.get("usercity"),
               });
          } catch (err) {
               if (err.response) {
                    console.log("Registration unsuccessful!");
               }
          } finally {
               setIsSubmitting(false);
          }
     }
     return (
          <div>
               <h2>Register</h2>
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
                              <>
                                   <option
                                        key="any"
                                        value="any">
                                        Any
                                   </option>
                                   {eventOptions?.locations.map((city) => (
                                        <option
                                             key={city}
                                             value={city}>
                                             {city}
                                        </option>
                                   ))}
                              </>
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
