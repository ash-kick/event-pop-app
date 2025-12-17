export default function LogIn() {
     return (
          <div className="login-register-container">
               <div className="login-container">
                    <h2>Login</h2>
                    <form
                         action="/api/user/login"
                         method="POST">
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
                              type="text"
                              id="passowrd"
                              name="password"></input>
                         <br></br>
                         <input
                              type="submit"
                              value="Login"
                              className="login-button"></input>
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
