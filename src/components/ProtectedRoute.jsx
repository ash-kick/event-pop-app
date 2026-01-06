import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

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
     try {
          const decodedToken = jwtDecode(token);
          if (decodedToken.exp < Date.now() / 1000) {
               localStorage.removeItem("token");
               localStorage.removeItem("userName");
               localStorage.removeItem("userCity");
               return (
                    <Navigate
                         to="/login"
                         // adding replace to prevent redirect loops
                         replace
                    />
               );
          }
     } catch (err) {
          localStorage.removeItem("token");
          localStorage.removeItem("userName");
          localStorage.removeItem("userCity");
          return (
               <Navigate
                    to="/login"
                    replace
               />
          );
     }

     return children;
}
