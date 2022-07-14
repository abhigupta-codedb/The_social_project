import React from "react";
import styled from "styled-components";
import ReactPortal from "./ReactPortals";

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
  background: #f2f2f0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 50vw;
  height: 50vh;
  background: white;
  border: 2px solid palevioletred;
`;

const Form = styled(Wrapper)`
  border: none;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Field = styled.div`
  margin: ${(prop) => (prop.heading ? "0px" : "5px")};
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
  width: 50%;
`;

const QuestionText = styled(Text)`
  width: 100%;
`;

const HeadText = styled(Text)`
  background: papayawhip;
  width: 100%;
  font-size: 1.5em;
`;

const Confirmation = ({ quiz, isOpen, handleOk, handleOpen }) => {
  const { question, options } = quiz;

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <Parent>
        <Wrapper>
          <Form>
            <Field heading>
              <HeadText>Confirm the Question</HeadText>
            </Field>
            <Field>
              <QuestionText>{question}</QuestionText>
            </Field>
            {options.map((option) => (
              <Field>
                <Text>{option.Text}</Text>
                <Text>{option.value}</Text>
              </Field>
            ))}
          </Form>
          <Button
            onClick={() => {
              handleOk(true);
              handleOpen(false);
            }}
          >
            Confirm
          </Button>{" "}
          <Button
            onClick={() => {
              handleOpen(false);
            }}
          >
            Cancel
          </Button>
        </Wrapper>
      </Parent>
    </ReactPortal>
  );
};

export default Confirmation;
