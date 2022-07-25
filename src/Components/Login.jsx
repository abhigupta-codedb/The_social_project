import React from "react";
import styled from "styled-components";
import { Button } from "./Questions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setUserInfo } from "../Slices/UserInfo";
import { isEmpty } from "lodash";
import { useDispatch } from "react-redux/es/exports";
import { useAuth } from "../contexts/AuthContext";

const Parent = styled.div`
  width: 100vw;
  height: 100vh;
  background: papayawhip;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ActionButton = styled(Button)`
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
`;

const Signup = styled.span`
  text-decoration: underline;
  margin: 0px 4px;
  color: blue;
  &:hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  width: 30vw;
  height: 33vh;
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
  const [Error, setError] = useState();
  const { login } = useAuth();

  const submitHandler = async () => {
    if (isEmpty(getUsername) || isEmpty(getPassword)) {
      alert("Empty fields found");
    } else {
      await login(getUsername, getPassword)
        .then((userCredential) => {
          const userEmail = userCredential.user.email;
          const newObj = {
            isLoggedIn: true,
            userName: userEmail,
          };
          dispatch(setUserInfo(newObj));
          setLogin(true);
          navigate("/home");
        })
        .catch((e) => {
          console.log("Error in Username/Password", e);
          setError("Error in Username/Password");
        });
    }
  };

  const clearHandler = () => {
    setUsername("");
    setPassword("");
    setError("");
  };

  return (
    <div>
      <Parent>
        <Wrapper>
          <Heading>
            <Text>Login</Text>
          </Heading>
          {Error && <Heading>{Error}</Heading>}
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
            <ActionButton onClick={submitHandler}>Submit</ActionButton>
            <ActionButton onClick={clearHandler}>Clear</ActionButton>
          </Field>
          <Field>
            Click here to
            <Signup onClick={() => navigate("/signup")}> Signup</Signup>
          </Field>
        </Wrapper>
      </Parent>
    </div>
  );
};

export default Login;
