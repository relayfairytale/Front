
import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

function Nav() {
  // const nick = JSON.parse(sessionStorage.getItem("nickname"));
  // const isSignIn = JSON.parse(sessionStorage.getItem("isSignIn"));

  const [nick, setNick] = useState(JSON.parse(sessionStorage.getItem("nickname")));
  const [isSignIn, setIsSignIn] = useState(JSON.parse(sessionStorage.getItem("isSignIn")))
  const signOutHandler = () => {
    sessionStorage.removeItem("nickname");
    sessionStorage.removeItem("isSignIn");
    let date = new Date();
    document.cookie =
    'authorization' + "= " + "; expires=" + date.toUTCString() + "; path=/";
    alert("로그아웃 했습니다.")
    setNick('')
    setIsSignIn('')
  };

  const onSignIn = (
    <>
      <div>{nick}님 안녕하세요!</div> <button onClick={signOutHandler}>로그아웃</button>
    </>
  );
  const offSignIn = (
    <>
      <Link to={"/signup"}>
        <button>회원가입</button>
      </Link>
      <Link to={"/signin"}>
        <button>로그인</button>
      </Link>
    </>
  );

  return <StNavBar>{isSignIn ? onSignIn : offSignIn}</StNavBar>;
}

export default Nav;

const StNavBar = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: flex-end;
`;
