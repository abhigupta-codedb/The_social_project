import React, { useState } from "react";
import { quiz } from "../Helper/quiz";
import QuestionBox from "../Components/QuestionBox";
import Result from "../Components/Result";
import styled from "styled-components";
import ProgressBar from "../Components/ProgressBar";

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
  display: inline-block;
  float: left;
`;
const Logo = styled.span`
  height: 100px;
  width: 100px;
  background-color: papayawhip;
  display: inline-block;
  float: right;
`;
const BoxContainer = () => {
  //TODO: will keep all question inside redux state
  const [next, setNext] = useState(0);
  const progress = (next * 100) / quiz.length;
  return (
    <Page>
      <Header>
        <Counter />
        <Logo />
      </Header>
      {next < quiz.length ? (
        <QuestionBox quiz={quiz[next]} setNext={setNext} />
      ) : (
        <Result />
      )}
      <Footer>
        <ProgressBar progress={progress.toFixed(1)} />
      </Footer>
    </Page>
  );
};

export default BoxContainer;
