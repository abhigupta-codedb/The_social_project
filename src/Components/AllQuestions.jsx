import React from "react";
import { quiz } from "../Helper/quiz";
import QuestionBox from "./QuestionBox";
import { Button } from "./Questions";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  background: papayawhip;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AllQuestions = () => {
  return (
    <div>
      {quiz.map((quiz) => (
        <div>
          <QuestionBox quiz={quiz} />
          <ButtonWrapper>
            <Button>Delete</Button>
            <Button>Edit</Button>
          </ButtonWrapper>
        </div>
      ))}
    </div>
  );
};

export default AllQuestions;
