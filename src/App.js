import "./App.css";
import { Routes, Route } from "react-router-dom";
import BoxContainer from "./Container/BoxContainer";
import Home from "./Components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<BoxContainer />} />
    </Routes>
  );
}

export default App;
