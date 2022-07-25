import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { setUserInfo } from "../Slices/UserInfo";
import { useAuth } from "../contexts/AuthContext";

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

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Heading = styled.div`
  height: 10vh;
  width: 100%;
  background: papayawhip;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
`;

const WelcomeText = styled.span`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  margin: 5px;
`;

const LogoutButton = styled(Button)`
  margin-left: auto;
`;
const Home = ({ isLogin, setLogin }) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const userName = useSelector((state) => state.UserInfo.userName);
  const { signout } = useAuth();

  const logoutHandler = () => {
    //TODO: create separate Action creator files and import from their.
    const newObj = {
      isLoggedIn: false,
      userName: "",
    };
    signout()
      .then(() => {
        dispatch(setUserInfo(newObj));
        setLogin(false);
        navigate("/");
      })
      .catch((e) => {
        console.log("Error in signout", e);
      });
  };

  return (
    <ParentDiv>
      <Heading>
        <WelcomeText>Hi {userName}!</WelcomeText>
        <LogoutButton onClick={logoutHandler}>
          {isLogin ? "Logout" : "Login"}
        </LogoutButton>
      </Heading>
      <Wrapper>
        <Title>THE_SOCIAL_PROJECT</Title>
      </Wrapper>
      <ButtonWrapper>
        <Button onClick={() => navigate("/quiz")}>Take Quiz!</Button>
        <Button onClick={() => navigate("/Questions")}>Add Question!</Button>
      </ButtonWrapper>
    </ParentDiv>
  );
};

export default Home;
