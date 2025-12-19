export default function Landing() {
     return (
          <div className="landing-container">
               <div className="landing-content-box">
                    <div className="welcome">
                         <div className="welcome-text-container">
                              <h1 className="welcome-to-header-text">Find events you'll actually love</h1>
                              <p className="welcome-subhead">Personalized picks based on your vibe, location, and schedule.</p>
                         </div>
                         <img
                              src="../assets/event-pop-logo-cropped.png"
                              alt="event pop logo"
                              className="event-pop-logo"
                         />
                    </div>
                    <div className="landing-image-container">
                         <img
                              src="../../assets/event-pop-landing-photo-concert.webp"
                              className="landing-photo"
                         />
                         <img
                              src="../../assets/event-pop-landing-photo-team-labs.webp"
                              className="landing-photo"
                         />
                         <img
                              src="../../assets/event-pop-landing-photo-colored-glass.webp"
                              className="landing-photo"
                         />
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
                              <p className="feature-card-blurb">Invite friends to share your plans instantly.</p>
                         </div>
                    </div>
               </div>
          </div>
     );
}
