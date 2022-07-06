import React from "react";
import { Title, Wrapper } from "./QuestionBox";

const Result = ({ value }) => {
  return (
    <Wrapper>
      <Title>Your score - {value}</Title>
    </Wrapper>
  );
};

export default Result;
