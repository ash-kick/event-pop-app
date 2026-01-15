import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { FaBell } from "react-icons/fa";

import { IoMenu } from "react-icons/io5";
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
     const [menuOpen, setMenuOpen] = useState(false);
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

          window.location.href = "/login";
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
                    {unreadCount > 0 ? <div className="notification-unread-count">{unreadCount}</div> : null}
               </div>
               <button
                    onClick={handleLogout}
                    id="log-out-button">
                    Log out
               </button>
          </div>
     );

     const navLinks = (menuStyle) => {
          return (
               <div className={`nav-links-main-${menuStyle}`}>
                    <NavLink to="home">Home</NavLink>
                    <NavLink to="search">Search</NavLink>
                    <NavLink to="events">My Events</NavLink>
                    <NavLink to="preferences">Preferences</NavLink>
               </div>
          );
     };
     return (
          <div className="root-layout">
               <header>
                    <nav>
                         <NavLink to="/">
                              <img src="../assets/event-pop-icon-small.png" />
                         </NavLink>
                         <button
                              className="drop-down-menu-button"
                              onClick={() => {
                                   setMenuOpen(!menuOpen);
                              }}>
                              <IoMenu className="io-menu-icon"></IoMenu>
                         </button>
                         {menuOpen ? <div className="nav-links-small-screen">{navLinks("small-screen")}</div> : null}
                         <div className="nav-links-large-screen">{navLinks("large-screen")}</div>
                         {isAuthenticated ? firstLetterLogoutButton : logInButton}
                    </nav>
               </header>
               <main className="root-layout-main">
                    <Outlet />
               </main>
               <footer>Powered by ticketmaster API - Made with ❤️ using React.</footer>
          </div>
     );
}
