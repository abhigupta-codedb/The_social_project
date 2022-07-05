import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const ParentDiv = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  width: 35%;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
    background: ${(props) =>
      props.primary ? "palevioletred" : "palevioletred"};
    color: ${(props) => (props.primary ? "white" : "white")};
  }
`;

const AnswersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const QuestionBox = ({ quiz, setNext }) => {
  const { question, options } = quiz;

  return (
    <ParentDiv>
      <Wrapper>
        <Title>{question}</Title>
      </Wrapper>
      <AnswersWrapper>
        {options.map((option) => (
          <Button onClick={() => setNext((next) => next + 1)}>
            {option.Text}
          </Button>
        ))}
      </AnswersWrapper>
    </ParentDiv>
  );
};

export default QuestionBox;
