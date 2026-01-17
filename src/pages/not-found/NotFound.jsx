import { useNavigate } from "react-router-dom";

export default function NotFound() {
     const navigate = useNavigate();

     return (
          <div className="not-found-container">
               <h1 className="not-found-title">404</h1>
               <h2 className="not-found-subtitle">Page Not Found</h2>
               <p className="not-found-message">The page you're looking for doesn't exist.</p>
               <button
                    onClick={() => navigate("/home")}
                    className="not-found-link">
                    Go Home
               </button>
          </div>
     );
}
