import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ActivityList from "./Pages/Activity.jsx/ActivityList";
import ProgressPage from "./Pages/Progress.jsx/ProgressPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ActivityList />} />
          <Route path="/progress" element={<ProgressPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
