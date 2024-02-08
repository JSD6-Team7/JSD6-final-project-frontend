import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ActivityList from "./Pages/Activity.jsx/ActivityList";
import Login from "./Pages/Login-signup/Login";
import Register from "./Pages/Login-signup/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<ActivityList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
