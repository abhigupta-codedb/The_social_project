import React from "react";
import styled from "styled-components";
import { Button } from "./Questions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { isEmpty } from "lodash";

const Parent = styled.div`
  width: 100vw;
  height: 100vh;
  background: papayawhip;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30vw;
  height: 37vh;
  background: white;
`;

const Heading = styled.div`
  background: palevioletred;
  display: flex;
  justify-content: center;
`;

const Text = styled.text`
  font-size: 1.5em;
  font-weight: 500;
  text-align: center;
  color: white;
`;

const Field = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  margin: 10px;
`;

const Label = styled.span`
  width: 50%;
  color: palevioletred;
`;

const Input = styled.input`
  width: 50%;
`;

const Select = styled.select`
  width: 52%;
  background: white;
  color: gray;
  font-size: 14px;
  border: 1px solid black;
  border-radius: 3px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const Login = styled.span`
  text-decoration: underline;
  margin: 0px 4px;
  color: blue;
  &:hover {
    cursor: pointer;
  }
`;

const ActionButton = styled(Button)`
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
`;

const CustomField = styled(Field)`
  margin-top: ${(prop) => (prop.button ? "10px" : "0px")};
  margin-bottom: ${(prop) => (prop.button ? "0px" : "10px")};
`;

const Signup = ({ setLogin }) => {
  let navigate = useNavigate();
  const [getUsername, setUsername] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getRole, setRole] = useState("");

  const submitHandler = () => {
    if (isEmpty(getUsername) || isEmpty(getPassword)) {
      alert("Empty fields found");
    } else {
      setLogin(true);
      navigate("/");
    }
  };

  const clearHandler = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <Parent>
        <Wrapper>
          <Heading>
            <Text>Sign Up</Text>
          </Heading>
          <Field>
            <Label>Enter Username</Label>
            <Input
              type={"text"}
              value={getUsername}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Field>
          <Field>
            <Label>Enter Password</Label>
            <Input
              type={"password"}
              value={getPassword}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Field>
          <Field>
            <Label>Select Role</Label>
            <Select value={getRole} onChange={(e) => setRole(e.target.value)}>
              <option value={"Admin"}>Admin</option>
              <option value={"Others"}>Others</option>
            </Select>
          </Field>
          <CustomField button>
            <ActionButton onClick={submitHandler}>Submit</ActionButton>
            <ActionButton onClick={clearHandler}>Clear</ActionButton>
          </CustomField>
          <CustomField>
            Click here to
            <Login onClick={() => navigate("/")}>Login</Login>
          </CustomField>
        </Wrapper>
      </Parent>
    </div>
  );
};

export default Signup;
