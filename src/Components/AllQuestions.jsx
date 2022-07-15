import React from "react";
import QuestionBox from "./QuestionBox";
import { Button } from "./Questions";
import styled from "styled-components";
import { useSelector } from "react-redux/es/exports";
import { Wrapper, Title } from "./QuestionBox";

const ButtonWrapper = styled.div`
  background: papayawhip;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResultWrapper = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AllQuestions = () => {
  const allQuestions = useSelector((state) => state.Group1.questions);

  if (allQuestions.length <= 0) {
    return (
      <ResultWrapper>
        <Wrapper>
          <Title>No Questions Found!</Title>
        </Wrapper>
      </ResultWrapper>
    );
  }
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
