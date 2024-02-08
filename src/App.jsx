import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ActivityList from "./Pages/Activity.jsx/ActivityList";
import Profile from "./Pages/Profile/Profile";
import EditProfile from "./Pages/EditProfile/EditProfile";
import EditPass from "./Pages/EditPass/EditPass";
import EditEmail from "./Pages/EditEmail/EditEmail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ActivityList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="/editPassword" element={<EditPass />} />
          <Route path="/editEmail" element={<EditEmail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
