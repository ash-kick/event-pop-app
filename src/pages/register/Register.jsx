import { useContext } from "react";
import { EventOptionsContext } from "../../contexts/EventOptionsContext";

export default function Register() {
     const { eventOptions, loading } = useContext(EventOptionsContext);
     return (
          <div>
               <p>this is the register page</p>
               <form
                    action="/api/user/register"
                    method="POST">
                    <label>username</label>
                    <input
                         type="text"
                         name="userName"
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
                         name="userCity"
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
               </form>
          </div>
     );
}
