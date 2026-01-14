import { Link } from "react-router-dom";

export default function Landing() {
     return (
          <div className="landing-container">
               <div className="landing-hero">
                    <div className="landing-hero-left">
                         <h1 className="landing-header-text">Find events you'll love</h1>
                         <p className="landing-subhead">Personalized picks based on your vibe, location, and schedule.</p>
                         <Link
                              to="/register"
                              className="landing-get-started-button">
                              Get Started
                         </Link>
                    </div>
                    <div className="landing-hero-right">
                         <img
                              src="../../assets/event-pop-landing-photo-concert.webp"
                              alt="Concert crowd"
                              className="landing-hero-image"
                         />
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
