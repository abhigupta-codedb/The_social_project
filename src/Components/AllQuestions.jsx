import React from "react";
import QuestionBox from "./QuestionBox";
import { Button } from "./Questions";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Wrapper, Title } from "./QuestionBox";
import { filterResult } from "../Slices/Group1";
import Fade from "react-reveal/Fade";

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
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    const newQuestions = allQuestions.filter((question) => question.id !== id);
    dispatch(filterResult(newQuestions));
  };

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
        <Fade bottom>
          <div key={quiz.id}>
            <QuestionBox quiz={quiz} />
            <ButtonWrapper>
              <Button onClick={() => deleteHandler(quiz.id)}>Delete</Button>
              <Button>Edit</Button>
            </ButtonWrapper>
          </div>
        </Fade>
      ))}
    </div>
  );
};

export default AllQuestions;
