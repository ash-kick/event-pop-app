import EventSearchDisplay from "../../components/EventsSearchDisplay";
import { EventOptionsContext } from "../../contexts/EventOptionsContext";
import { useState, useContext, useEffect } from "react";
import axios from "axios";

export default function Home() {
     const userName = localStorage.getItem("userName");
     const userCity = localStorage.getItem("userCity");

     return (
          <div className="home-content-box">
               <div className="home-welcome-message">
                    <h1>Hi, {userName}!</h1>
               </div>
               <div className="upcoming-event-feed">
                    <h2>Upcoming Events In Your Area</h2>
               </div>
          </div>
     );
}
