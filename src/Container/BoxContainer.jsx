import React, { useState } from "react";
import { quiz } from "../Helper/quiz";
import QuestionBox from "../Components/QuestionBox";
import Result from "../Components/Result";
const BoxContainer = () => {
  //TODO: will keep all question inside redux state
  const [next, setNext] = useState(0);
  return (
    <div>
      {next < quiz.length ? (
        <QuestionBox quiz={quiz[next]} setNext={setNext} />
      ) : (
        <Result />
      )}
    </div>
  );
};

export default BoxContainer;
