import React, { useEffect, useState } from "react";
import { quiz } from "../Helper/quiz";
import { useSelector, useDispatch } from "react-redux/es/exports";
import QuestionBox from "../Components/QuestionBox";
import Result from "../Components/Result";
import styled from "styled-components";
import ProgressBar from "../Components/ProgressBar";
import { loadQuestions } from "../Slices/Group1";

const Header = styled.div`
  height: 20vh;
  margin: 10px;
`;
const Footer = styled.div`
  height: 10vh;
`;
const Page = styled.div`
  display: flex;
  flex-direction: column;
`;

const Counter = styled.span`
  height: 100px;
  width: 100px;
  background-color: papayawhip;
  border-radius: 50%;
  display: inline-flex;
  float: left;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.span`
  height: 100px;
  width: 150px;
  background-color: papayawhip;
  display: inline-flex;
  float: right;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h5`
  color: palevioletred;
  text-align: center;
`;

const CounterText = styled(Text)`
  font-size: ${(props) => (props.result ? "1.5em" : "2em")};
`;

let dispatchFired = false;
const BoxContainer = () => {
  const [next, setNext] = useState(0);
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const allQuestions = useSelector((state) => state.Group1.questions);

  useEffect(() => {
    if (!dispatchFired) {
      dispatch(loadQuestions(quiz));
      dispatchFired = true;
    }
  }, [dispatch]);

  const progress = (next * 100) / allQuestions.length;
  const counterValue = next + "/" + allQuestions.length;
  const nextCondition = next < allQuestions.length;
  return (
    <Page>
      <Header>
        <Counter>
          <CounterText result={next >= allQuestions.length ? "true" : "false"}>
            {nextCondition ? counterValue : "Result"}
          </CounterText>
        </Counter>
        <Logo>
          <Text>THE_SOCIAL_PROJECT</Text>
        </Logo>
      </Header>
      {nextCondition ? (
        <QuestionBox
          quiz={allQuestions[next]}
          setNext={setNext}
          setValue={setValue}
        />
      ) : (
        <Result value={value} />
      )}
      <Footer>
        {nextCondition && <ProgressBar progress={progress.toFixed(1)} />}
      </Footer>
    </Page>
  );
};

export default BoxContainer;
