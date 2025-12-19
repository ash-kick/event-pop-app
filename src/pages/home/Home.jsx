// need to add back in test data once in db

export default function Home() {
     const userName = localStorage.getItem("userName");
     return (
          <div className="home-container">
               <div className="home-content-box">
                    <div className="home-welcome-message">
                         <h1>Welcome back {userName}!</h1>
                    </div>
                    <div className="home-feeds-container">
                         <div className="saved-event-feed">
                              <h2>View Your Saved Events</h2>
                         </div>
                         <div className="upcoming-event-feed">
                              <h2>Upcoming Events in Your Area</h2>
                         </div>
                    </div>
               </div>
          </div>
     );
}
