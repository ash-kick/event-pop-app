import "./App.css";
import { createBrowserRouter, createRoutesFromElements, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

import { EventOptionsProvider } from "./contexts/EventOptionsContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AlreadyAuthed from "./components/AlreadyAuthed";
import Landing from "./pages/landing/Landing";
import Home from "./pages/home/Home";
import Events from "./pages/events/Events";
import Preferences from "./pages/preferences/Preferences";
import LogIn from "./pages/log-in/LogIn";
import Register from "./pages/register/Register";

const router = createBrowserRouter(createRoutesFromElements(<Route element={<RootLayout />}></Route>));

function App() {
     return (
          <EventOptionsProvider>
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
                                             <Events />
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
          </EventOptionsProvider>
     );
}

export default App;
