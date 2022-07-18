import React from "react";
import styled from "styled-components";
import { Button } from "./Questions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setUserInfo } from "../Slices/UserInfo";
import { isEmpty } from "lodash";
import { useDispatch } from "react-redux/es/exports";

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
  height: 31vh;
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
const Login = ({ setLogin }) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [getUsername, setUsername] = useState("");
  const [getPassword, setPassword] = useState("");

  const submitHandler = () => {
    if (isEmpty(getUsername) || isEmpty(getPassword)) {
      alert("Empty fields found");
    } else {
      const newObj = {
        isLoggedIn: true,
        userName: getUsername,
      };
      dispatch(setUserInfo(newObj));
      setLogin(true);
      navigate("/home");
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
            <Text>Login</Text>
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
            <Button onClick={submitHandler}>Submit</Button>
            <Button onClick={clearHandler}>Clear</Button>
          </Field>
        </Wrapper>
      </Parent>
    </div>
  );
};

export default Login;
