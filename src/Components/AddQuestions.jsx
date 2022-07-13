import React from "react";
import styled from "styled-components";

const Parent = styled.div`
  height: 90vh;
  background: palevioletred;
  display: flex;
  justify-content: center;
  align-items: center;
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
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const TextArea = styled.textarea`
  width: 20vw;
  height: 5vh;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Field = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: row;
`;

const Label = styled.span`
  width: 15vw;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h3`
  font-size: 0.75em;
  text-align: center;
  color: palevioletred;
`;

const AddQuestions = () => {
  return (
    <Parent>
      <Wrapper>
        <Form>
          <Field>
            <Label>
              <Text>Add Question </Text>
            </Label>
            <TextArea />
          </Field>
          <Field>
            <Label>
              <Text>Option 1 </Text>
            </Label>
            <TextArea />
          </Field>
          <Field>
            <Label>
              <Text>Option 2 </Text>
            </Label>
            <TextArea />
          </Field>
          <Field>
            <Label>
              <Text>Option 3 </Text>
            </Label>
            <TextArea />
          </Field>
          <Field>
            <Label>
              <Text>Option 4 </Text>
            </Label>
            <TextArea />
          </Field>
        </Form>
      </Wrapper>
    </Parent>
  );
};

export default AddQuestions;
