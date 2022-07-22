import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import BoxContainer from "./Container/BoxContainer";
import Home from "./Components/Home";
import Questions from "./Components/Questions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { loadQuestions } from "./Slices/Group1";
import { quiz } from "./Helper/quiz";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

let dispatchFired = false;

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogin, setLogin] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!dispatchFired) {
      dispatch(loadQuestions(quiz));
      dispatchFired = true;
    }
  }, [dispatch]);

  useEffect(() => {
    if (
      !isLogin &&
      ["/quiz", "/Questions", "/home"].includes(pathname.toString())
    ) {
      navigate("/");
    }
  }, [isLogin, navigate, pathname]);

  return (
    <Routes>
      <Route
        path="/home"
        element={<Home isLogin={isLogin} setLogin={setLogin} />}
      />
      <Route path="/quiz" element={<BoxContainer />} />
      <Route path="/Questions" element={<Questions />} />
      <Route path="/" element={<Login setLogin={setLogin} />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
