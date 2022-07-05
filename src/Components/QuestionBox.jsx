import React from "react";

const QuestionBox = ({ quiz }) => {
  const { question, option1, option2, option3, option4 } = quiz;
  console.log("quiz is", quiz);

  return <div>QuestionBox</div>;
};

export default QuestionBox;
