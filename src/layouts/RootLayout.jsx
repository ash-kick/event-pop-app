import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { FaBell } from "react-icons/fa";
import { NotificationsContext } from "../contexts/NotificationsContext";

const logInButton = (
     <NavLink
          to="login"
          id="log-in-button">
          Log in
     </NavLink>
);

export default function RootLayout() {
     const { unreadCount, notifications } = useContext(NotificationsContext);

     const [isAuthenticated, setIsAuthenticated] = useState(false);
     const [userName, setUserName] = useState(null);
     const navigate = useNavigate();
     // using this to retrigger auth check
     const location = useLocation();
     useEffect(() => {
          const token = localStorage.getItem("token");
          const storedUserName = localStorage.getItem("userName");
          if (token) {
               setIsAuthenticated(true);
               setUserName(storedUserName);
          } else {
               setIsAuthenticated(false);
               setUserName(null);
          }
     }, [location]);

     const handleLogout = () => {
          localStorage.removeItem("token");
          localStorage.removeItem("userName");
          localStorage.removeItem("userCity");
          setIsAuthenticated(false);
          setUserName(null);

          navigate("/login");
     };

     const firstLetterUser = userName ? userName[0].toUpperCase() : "?";

     const handleNotificationClick = () => {
          navigate("/notifications");
     };

     const firstLetterLogoutButton = (
          <div className="first-letter-logout-container">
               <div className="first-letter">{firstLetterUser}</div>
               <div className="notification-bell-container">
                    <FaBell
                         size={28}
                         className="notification-bell"
                         onClick={handleNotificationClick}
                    />
                    <div className="notification-unread-count">{unreadCount}</div>
               </div>
               <button
                    onClick={handleLogout}
                    id="log-out-button">
                    Log out
               </button>
          </div>
     );
     return (
          <div className="root-layout">
               <header>
                    <nav>
                         <div className="nav-links-main">
                              <NavLink to="/">
                                   <img src="../assets/event-pop-icon-small.png" />
                              </NavLink>
                              <NavLink to="home">Home</NavLink>
                              <NavLink to="search">Search</NavLink>
                              <NavLink to="events">My Events</NavLink>
                              <NavLink to="preferences">Preferences</NavLink>
                         </div>
                         {isAuthenticated ? firstLetterLogoutButton : logInButton}
                    </nav>
               </header>
               <main>
                    <Outlet />
               </main>
               <footer>Powered by ticketmaster API - Made with ❤️ using React.</footer>
          </div>
     );
}
