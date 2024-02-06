import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ActivityList from "./Pages/Activity.jsx/ActivityList";
import ProgressPage from "./Pages/Progress.jsx/ProgressPage";

import Login from "./Pages/Activity.jsx/Login-signup/Login";
import Register from "./Pages/Activity.jsx/Login-signup/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ActivityList />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
