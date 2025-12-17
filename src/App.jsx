import "./App.css";
import { createBrowserRouter, createRoutesFromElements, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

import Landing from "./pages/landing/Landing";
import Home from "./pages/home/Home";
import Events from "./pages/events/Events";
import Preferences from "./pages/preferences/Preferences";
import LogIn from "./pages/log-in/LogIn";
import Register from "./pages/register/Register";

const router = createBrowserRouter(createRoutesFromElements(<Route element={<RootLayout />}></Route>));

function App() {
     return (
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
                              element={<Home />}
                              path="/home"></Route>
                         <Route
                              element={<Events />}
                              path="/events"></Route>
                         <Route
                              element={<Preferences />}
                              path="/preferences"></Route>
                         <Route
                              element={<LogIn />}
                              path="/login"></Route>
                         <Route
                              element={<Register />}
                              path="/register"></Route>
                    </Route>
               </Routes>
          </div>
     );
}

export default App;
