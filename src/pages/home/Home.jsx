import { testUser1 } from "../../test-data/TestData";

export default function Home() {
     return (
          <div className="home-container">
               <div className="home-content-box">
                    <div className="home-welcome-message">
                         <h1>Welcome back {testUser1.firstName}, let's see what's happening near you!</h1>
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
