import "./App.css";
import { createBrowserRouter, createRoutesFromElements, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

import { EventOptionsProvider } from "./contexts/EventOptionsContext";
import { NotificationsProvider } from "./contexts/NotificationsContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AlreadyAuthed from "./components/AlreadyAuthed";
import Landing from "./pages/landing/Landing";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import MyEvents from "./pages/events/MyEvents";
import Preferences from "./pages/preferences/Preferences";
import LogIn from "./pages/log-in/LogIn";
import Register from "./pages/register/Register";
import Notifications from "./pages/notifications/Notifications";

const router = createBrowserRouter(createRoutesFromElements(<Route element={<RootLayout />}></Route>));

function App() {
     return (
          <EventOptionsProvider>
               <NotificationsProvider>
                    <div className="App">
                         <header className="App-header"></header>
                         <Routes>
                              <Route
                                   element={<RootLayout />}
                                   path="/">
                                   <Route
                                        index
                                        element={<Landing />}></Route>
                                   <Route
                                        element={
                                             <ProtectedRoute>
                                                  <Home />
                                             </ProtectedRoute>
                                        }
                                        path="/home"></Route>
                                   <Route
                                        element={
                                             <ProtectedRoute>
                                                  <Search />
                                             </ProtectedRoute>
                                        }
                                        path="/search"></Route>
                                   <Route
                                        element={
                                             <ProtectedRoute>
                                                  <MyEvents />
                                             </ProtectedRoute>
                                        }
                                        path="/events"></Route>
                                   <Route
                                        element={
                                             <ProtectedRoute>
                                                  <Preferences />
                                             </ProtectedRoute>
                                        }
                                        path="/preferences"></Route>
                                   <Route
                                        element={
                                             <ProtectedRoute>
                                                  <Notifications />
                                             </ProtectedRoute>
                                        }
                                        path="/notifications"></Route>
                                   <Route
                                        element={
                                             <AlreadyAuthed>
                                                  <LogIn />
                                             </AlreadyAuthed>
                                        }
                                        path="/login"></Route>
                                   <Route
                                        element={
                                             <AlreadyAuthed>
                                                  <Register />
                                             </AlreadyAuthed>
                                        }
                                        path="/register"></Route>
                              </Route>
                         </Routes>
                    </div>
               </NotificationsProvider>
          </EventOptionsProvider>
     );
}

export default App;
