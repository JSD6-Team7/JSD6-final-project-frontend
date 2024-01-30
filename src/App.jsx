import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ActivityList from "./Pages/Activity.jsx/ActivityList";
import TutorialPage from "./Pages/Tutorial/Tutorial-page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<ActivityList />} />
            <Route path="/videoTutorial" element={<TutorialPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
