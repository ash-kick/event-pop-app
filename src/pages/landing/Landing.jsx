export default function Landing() {
     return (
          <div>
               <div className="welcome">
                    <h1>Welcome to ...</h1>
                    <img
                         src="../assets/event-pop-logo.png"
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
          </div>
     );
}
