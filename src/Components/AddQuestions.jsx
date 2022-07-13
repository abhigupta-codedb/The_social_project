import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { quiz } from "../Helper/quiz";

const Button = styled.button`
  background: white;
  color: palevioletred;
  font-size: 1em;
  margin: 1em 0em;
  padding: 0.25em 1em;
  border: 2px solid white;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
    background: papayawhip;
    color: palevioletred;
  }
`;

const Parent = styled.div`
  height: 90vh;
  background: palevioletred;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 50vw;
  height: 50vh;
  background: papayawhip;
  border: 1px solid black;
`;

const Form = styled(Wrapper)`
  border: none;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextArea = styled.textarea`
  width: 50%;
  height: 5vh;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Field = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Text = styled.span`
  font-size: 1em;
  text-align: center;
  color: palevioletred;
  display: inline-block;
  width: 30%;
`;

const Dropdown = () => (
  <select>
    <option value={1}>1</option>
    <option value={2}>2</option>
    <option value={3}>3</option>
    <option value={4}>4</option>
  </select>
);

const DropdownWrap = styled.span`
  margin: 5px;
`;

const AddQuestions = () => {
  //TODO: put all state update inside useDispatch
  const [getQues, setQues] = useState("");
  const [getop1, setop1] = useState("");
  const [getop2, setop2] = useState("");
  const [getop3, setop3] = useState("");
  const [getop4, setop4] = useState("");

  const submitHandler = () => {
    if (!getQues || !getop1 || !getop2 || !getop3 || !getop4) {
      alert("Empty field found");
    } else {
      const newObj = {
        question: getQues,
        options: [
          {
            Text: getop1,
            value: 4,
          },
          {
            Text: getop2,
            value: 3,
          },
          {
            Text: getop3,
            value: 2,
          },
          {
            Text: getop4,
            value: 1,
          },
        ],
      };
      quiz.push(newObj);
      clearHandler();
    }
  };
  const clearHandler = () => {
    setQues("");
    setop1("");
    setop2("");
    setop3("");
    setop4("");
  };

  //TODO: Optmize dropdown code
  return (
    <Parent>
      <Container>
        <Wrapper>
          <Form>
            <Field>
              <Text>Add Question </Text>
              <TextArea
                value={getQues}
                onChange={(e) => setQues(e.target.value)}
              />
            </Field>
            <Field>
              <Text>Option 1 </Text>
              <TextArea
                value={getop1}
                onChange={(e) => setop1(e.target.value)}
              />
              <DropdownWrap>
                <Dropdown />
              </DropdownWrap>
            </Field>
            <Field>
              <Text>Option 2 </Text>
              <TextArea
                value={getop2}
                onChange={(e) => setop2(e.target.value)}
              />
              <DropdownWrap>
                <Dropdown />
              </DropdownWrap>
            </Field>
            <Field>
              <Text>Option 3 </Text>
              <TextArea
                value={getop3}
                onChange={(e) => setop3(e.target.value)}
              />
              <DropdownWrap>
                <Dropdown />
              </DropdownWrap>
            </Field>
            <Field>
              <Text>Option 4 </Text>
              <TextArea
                value={getop4}
                onChange={(e) => setop4(e.target.value)}
              />
              <DropdownWrap>
                <Dropdown />
              </DropdownWrap>
            </Field>
          </Form>
        </Wrapper>
        <div>
          <Button onClick={submitHandler}>Submit</Button>{" "}
          <Button onClick={clearHandler}>Clear all</Button>
        </div>
      </Container>
    </Parent>
  );
};

export default AddQuestions;
