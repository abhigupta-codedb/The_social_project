import "./App.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
  }
`;

const ParentDiv = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
function App() {
  let navigate = useNavigate();

  return (
    <ParentDiv>
      <Wrapper>
        <Title>THE_SOCIAL_PROJECT</Title>
      </Wrapper>
      <Button primary onClick={() => navigate("/quiz")}>
        NEXT
      </Button>
    </ParentDiv>
  );
}

export default App;
