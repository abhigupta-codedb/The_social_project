import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = styled.div`
  height: 10vh;
  background: papayawhip;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

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

const BackButton = styled(Button)`
  margin-left: auto;
`;

const Questions = () => {
  let navigate = useNavigate();

  return (
    <Header>
      <Button>View all questions</Button>
      <Button>Add questions</Button>
      <BackButton onClick={() => navigate("/")}>Go back</BackButton>
    </Header>
  );
};

export default Questions;
