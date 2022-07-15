import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Confirmation from "../Portals/Confirmation";
import { loadQuestions } from "../Slices/Group1";
import { useDispatch } from "react-redux/es/exports";
import getUid from "get-uid";

const Button = styled.button`
  background: white;
  color: palevioletred;
  font-size: 1em;
  margin: 1em 0em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
    background: palevioletred;
    color: white;
  }
`;

const Parent = styled.div`
  height: 90vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 60vw;
  height: 70vh;
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
  width: 60%;
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
  font-weight: 500;
  text-align: center;
  color: palevioletred;
  display: inline-block;
  width: 30%;
`;

const Dropdown = (getVal, setVal) => (
  <select value={getVal} onChange={(e) => setVal(e.target.value)}>
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
  const [getval1, setval1] = useState(1);
  const [getval2, setval2] = useState(1);
  const [getval3, setval3] = useState(1);
  const [getval4, setval4] = useState(1);
  const [isOpen, handleOpen] = useState(false);
  const [isOk, handleOk] = useState(false);
  const dispatch = useDispatch();

  const newObj = {
    id: getUid(),
    question: getQues,
    options: [
      {
        Text: getop1,
        value: +getval1,
      },
      {
        Text: getop2,
        value: +getval2,
      },
      {
        Text: getop3,
        value: +getval3,
      },
      {
        Text: getop4,
        value: +getval4,
      },
    ],
  };

  const submitHandler = () => {
    if (!getQues || !getop1 || !getop2 || !getop3 || !getop4) {
      alert("Empty field found");
    } else {
      handleOpen(true);
    }
  };

  const clearHandler = () => {
    setQues("");
    setop1("");
    setop2("");
    setop3("");
    setop4("");
  };

  if (isOk) {
    dispatch(loadQuestions([newObj]));
    handleOk(false);
    clearHandler();
  }

  if (isOpen) {
    return (
      <Confirmation
        quiz={newObj}
        isOpen={isOpen}
        handleOk={handleOk}
        handleOpen={handleOpen}
      />
    );
  }
  //TODO: Optmize dropdown code
  return (
    <Parent>
      <Container>
        <Wrapper>
          <Form>
            <Field>
              <Text>Add questions </Text>
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
              <DropdownWrap>{Dropdown(getval1, setval1)}</DropdownWrap>
            </Field>
            <Field>
              <Text>Option 2 </Text>
              <TextArea
                value={getop2}
                onChange={(e) => setop2(e.target.value)}
              />
              <DropdownWrap>{Dropdown(getval2, setval2)}</DropdownWrap>
            </Field>
            <Field>
              <Text>Option 3 </Text>
              <TextArea
                value={getop3}
                onChange={(e) => setop3(e.target.value)}
              />
              <DropdownWrap>{Dropdown(getval3, setval3)}</DropdownWrap>
            </Field>
            <Field>
              <Text>Option 4 </Text>
              <TextArea
                value={getop4}
                onChange={(e) => setop4(e.target.value)}
              />
              <DropdownWrap>{Dropdown(getval4, setval4)}</DropdownWrap>
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
