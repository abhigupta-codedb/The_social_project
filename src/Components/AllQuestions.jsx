import React from "react";
import QuestionBox from "./QuestionBox";
import { Button } from "./Questions";
import styled from "styled-components";
import { useSelector } from "react-redux/es/exports";

const ButtonWrapper = styled.div`
  background: papayawhip;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AllQuestions = () => {
  const allQuestions = useSelector((state) => state.Group1.questions);

  return (
    <div>
      {allQuestions.map((quiz) => (
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
