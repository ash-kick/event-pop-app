import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
     const token = localStorage.getItem("token");
     // check if token exists to ensure they can access route
     if (!token) {
          return (
               <Navigate
                    to="/login"
                    // adding replace to prevent redirect loops
                    replace
               />
          );
     }

     return children;
}
