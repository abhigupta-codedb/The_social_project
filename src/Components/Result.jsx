import React from "react";
import { Title, Wrapper } from "./QuestionBox";

const Result = ({ value }) => {
  return (
    <Wrapper>
      <Title>Result: {value}</Title>
    </Wrapper>
  );
};

export default Result;
