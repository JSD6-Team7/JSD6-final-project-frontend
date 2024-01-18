import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ActivityCard from "./Pages/Activity.jsx/ActivityCard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ActivityCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
