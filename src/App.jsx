import { useState } from "react";
import "./App.css";

function App() {
     const [count, setCount] = useState(0);

     return (
          <div className="App">
               <header className="App-header">
                    <h1>🎉 Welcome to EventPop!</h1>
                    <p>Your event discovery app is ready to go!</p>
               </header>
          </div>
     );
}

export default App;
