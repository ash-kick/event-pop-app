import axios from "axios";

export default function Register() {
     const currentCities = async () => {
          await axios.get("api/event-preferences/options").then(response);
     };
     return (
          <div>
               <p>this is the register page</p>
               <form
                    action="api/user/register"
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
                         {}
                    </select>
               </form>
          </div>
     );
}
