import { useState, useEffect } from "react";
import { getErrorMessage } from "../../utils/errorHandler";
import axios from "axios";

export default function LogIn() {
     const [isSubmitting, setIsSubmitting] = useState(false);
     const [error, setError] = useState(null);
     const [success, setSuccess] = useState(false);
     const [demo, setDemo] = useState(false);
     const successMessage = "Login successful!";

     // useEffect for "waking up" db for demo
     useEffect(() => {
          async function wakeUp() {
               try {
                    await axios.get("/api/health/wake-up");
               } catch (err) {
                    console.log(err);
               }
          }
          wakeUp();
     }, []);
     // for handling demo logins
     async function handleDemoClick(e) {
          e.preventDefault();
          console.log("You clicked demo!");
          setDemo(true);
          // clearing any old error or success status
          setError(null);
          setSuccess(false);
          // start of submit process
          setIsSubmitting(true);
          try {
               const response = await axios.post("/api/user/login", {
                    userRole: "demo",
               });
               localStorage.setItem("token", response.data.token);
               localStorage.setItem("userName", response.data.userName);
               localStorage.setItem("userCity", response.data.userCity);
               localStorage.setItem("userRole", response.data.userRole);
               setSuccess(true);
               setTimeout(() => {
                    window.location.href = "/home";
               }, 500);
          } catch (err) {
               setError(getErrorMessage(err));
               setDemo(false);
               setIsSubmitting(false);
          }
     }
     // for handling user logins
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
                    window.location.href = "/home";
               }, 500);
          } catch (err) {
               setError(getErrorMessage(err));
          } finally {
               setIsSubmitting(false);
          }
     }
     return (
          <div className="login-register-container">
               <div className="login-container">
                    <h2 className="login-header">Log In</h2>
                    {error && <div>{error}</div>}
                    {success && <div>{successMessage}</div>}
                    <form onSubmit={onSubmit}>
                         <label
                              htmlFor="username"
                              className="login-label">
                              username<br></br>
                         </label>
                         <input
                              type="text"
                              id="username"
                              name="username"
                              className="login-input"></input>
                         <br></br>
                         <label
                              htmlFor="password"
                              className="login-label">
                              password<br></br>
                         </label>
                         <input
                              type="password"
                              id="password"
                              name="password"
                              className="login-input"></input>
                         <br></br>
                         <input
                              type="submit"
                              value="Log In"
                              className="login-button"
                              disabled={isSubmitting}></input>
                    </form>
                    <div className="or-divider">
                         <hr></hr>
                         <span>or</span>
                         <hr></hr>
                    </div>
                    {demo && isSubmitting ? (
                         <div className="demo-loading-message">
                              <p>Launching demo environment…</p>
                              <p>First load may take ~30 seconds</p>
                         </div>
                    ) : (
                         <button
                              onClick={handleDemoClick}
                              className="demo-login-button">
                              Continue as Demo
                         </button>
                    )}
                    <p className="demo-message">Explore EventPop instantly - no account required</p>
               </div>
               <div className="register-note-container">
                    <p className="register-note-text">
                         Don't have an account? Register{" "}
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
