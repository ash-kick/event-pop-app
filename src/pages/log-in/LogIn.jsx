import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getErrorMessage } from "../../utils/errorHandler";
import axios from "axios";

export default function LogIn() {
     const [isSubmitting, setIsSubmitting] = useState(false);
     const [error, setError] = useState(null);
     const [success, setSuccess] = useState(false);
     const successMessage = "Login successful!";
     const navigate = useNavigate();
     async function onSubmit(e) {
          e.preventDefault();
          // clearing any old error or success status
          setError(null);
          setSuccess(false);
          // start of submit process
          setIsSubmitting(true);
          try {
               const formData = new FormData(e.target);
               const response = await axios.post("/api/user/login", {
                    userName: formData.get("username"),
                    password: formData.get("password"),
               });
               localStorage.setItem("token", response.data.token);
               localStorage.setItem("userName", response.data.userName);
               localStorage.setItem("userCity", response.data.userCity);
               setSuccess(true);
               setTimeout(() => {
                    navigate("/home");
               }, 1000);
          } catch (err) {
               setError(getErrorMessage(err));
          } finally {
               setIsSubmitting(false);
          }
     }
     return (
          <div className="login-register-container">
               <div className="login-container">
                    <h2>Login</h2>
                    {error && <div>{error}</div>}
                    {success && <div>{successMessage}</div>}
                    <form onSubmit={onSubmit}>
                         <label htmlFor="username">
                              username<br></br>
                         </label>
                         <input
                              type="text"
                              id="username"
                              name="username"></input>
                         <br></br>
                         <label htmlFor="password">
                              password<br></br>
                         </label>
                         <input
                              type="password"
                              id="password"
                              name="password"></input>
                         <br></br>
                         <input
                              type="submit"
                              value="Login"
                              className="login-button"
                              disabled={isSubmitting}></input>
                    </form>
               </div>
               <div className="register-note-container">
                    <p className="register-note-text">
                         If you have not registered please register{" "}
                         <a
                              href="/register"
                              className="link-to-register">
                              here
                         </a>
                    </p>
               </div>
          </div>
     );
}
