export default function Landing() {
     return (
          <div className="landing-container">
               <div className="landing-content-box">
                    <div className="welcome">
                         <h1 className="welcome-to-header-text">Welcome to ...</h1>
                         <img
                              src="../assets/event-pop-logo-cropped.png"
                              alt="event pop logo"
                              className="event-pop-logo"
                         />
                    </div>
                    <p className="landing-blurb">Here to help you find events you'll love! Always have something fun to look forward to 😎.</p>
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
