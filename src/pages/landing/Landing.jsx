import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default function Landing() {
     const navigate = useNavigate();
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
     return (
          <div className="landing-container">
               <div className="landing-hero">
                    <div className="landing-hero-left">
                         <h1 className="landing-header-text">Find events you'll love</h1>
                         <p className="landing-subhead">Personalized picks based on your vibe, location, and schedule.</p>
                         <button
                              onClick={() => navigate("/login")}
                              className="landing-get-started-button">
                              Get Started
                         </button>
                    </div>
                    <div className="landing-hero-right">
                         <div className="landing-hero-image-container">
                              <img
                                   src="/assets/event-card-example.png"
                                   alt="Event card example"
                                   className="event-card-example-image"
                              />
                         </div>
                    </div>
               </div>
               <div className="landing-feature-cards">
                    <div className="feature-card">
                         <h2 className="feature-card-header">Discover</h2>
                         <p className="feature-card-blurb">Explore curated local events tailored to your interests.</p>
                    </div>
                    <div className="feature-card">
                         <h2 className="feature-card-header">Personalize</h2>
                         <p className="feature-card-blurb">Set your preferences and get smart recommendations.</p>
                    </div>
                    <div className="feature-card">
                         <h2 className="feature-card-header">Connect</h2>
                         <p className="feature-card-blurb">Be connected to what's happening in your community.</p>
                    </div>
               </div>
          </div>
     );
}
