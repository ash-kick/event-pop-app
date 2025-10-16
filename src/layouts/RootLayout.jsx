import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
     return (
          <div className="root-layout">
               <header>
                    <nav>
                         <NavLink to="/">
                              <img src="../assets/event-pop-icon-small.png" />
                         </NavLink>
                         <NavLink to="home">Home</NavLink>
                         <NavLink to="events">Events</NavLink>
                         <NavLink to="preferences">Preferences</NavLink>
                    </nav>
               </header>
               <main>
                    <Outlet />
               </main>
               <footer></footer>
          </div>
     );
}
