import React, { useState } from "react";
import { quiz } from "../Helper/quiz";
import QuestionBox from "../Components/QuestionBox";

const BoxContainer = () => {
  //TODO: will keep all question inside redux state
  const [next, setNext] = useState(true);
  return (
    <div>
      {quiz.map(
        (quiz) => next && <QuestionBox quiz={quiz} setNext={setNext} />
      )}
    </div>
  );
};

export default BoxContainer;
