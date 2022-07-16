import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import BoxContainer from "./Container/BoxContainer";
import Home from "./Components/Home";
import Questions from "./Components/Questions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { loadQuestions } from "./Slices/Group1";
import { quiz } from "./Helper/quiz";
import Login from "./Components/Login";

let dispatchFired = false;

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    if (!dispatchFired) {
      dispatch(loadQuestions(quiz));
      dispatchFired = true;
    }
  }, [dispatch]);

  useEffect(() => {
    if (!isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate]);

  return (
    <Routes>
      <Route
        path="/home"
        element={<Home isLogin={isLogin} setLogin={setLogin} />}
      />
      <Route path="/quiz" element={<BoxContainer />} />
      <Route path="/Questions" element={<Questions />} />
      <Route path="/" element={<Login setLogin={setLogin} />} />
    </Routes>
  );
}

export default App;
