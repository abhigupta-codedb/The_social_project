import "./App.css";
import { Routes, Route } from "react-router-dom";
import BoxContainer from "./Container/BoxContainer";
import Home from "./Components/Home";
import Questions from "./Components/Questions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<BoxContainer />} />
      <Route path="/Questions" element={<Questions />} />
    </Routes>
  );
}

export default App;
