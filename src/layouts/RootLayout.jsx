import { Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const logInButton = (
     <NavLink
          to="login"
          id="log-in-button">
          Log in
     </NavLink>
);

const userName = localStorage.getItem("userName");

export default function RootLayout() {
     const [isAuthenticated, setIsAuthenticated] = useState(false);
     useEffect(() => {
          const token = localStorage.getItem("token");
          if (token) {
               setIsAuthenticated(true);
          }
     }, []);
     return (
          <div className="root-layout">
               <header>
                    <nav>
                         <div className="nav-links-main">
                              <NavLink to="/">
                                   <img src="../assets/event-pop-icon-small.png" />
                              </NavLink>
                              <NavLink to="home">Home</NavLink>
                              <NavLink to="events">Events</NavLink>
                              <NavLink to="preferences">Preferences</NavLink>
                         </div>
                         {isAuthenticated ? userName : logInButton}
                    </nav>
               </header>
               <main>
                    <Outlet />
               </main>
               <footer>Powered by ticketmaster API - Made with ❤️ using React.</footer>
          </div>
     );
}
