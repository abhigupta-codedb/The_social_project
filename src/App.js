import "./App.css";
import { Routes, Route } from "react-router-dom";
import BoxContainer from "./Container/BoxContainer";
import Home from "./Components/Home";
import Questions from "./Components/Questions";
import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { loadQuestions } from "./Slices/Group1";
import { quiz } from "./Helper/quiz";
import Login from "./Components/Login";

let dispatchFired = false;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dispatchFired) {
      dispatch(loadQuestions(quiz));
      dispatchFired = true;
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<BoxContainer />} />
      <Route path="/Questions" element={<Questions />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
