import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

function SignIn() {
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");

  const onNickNameChangeHandler = (event) => {
    const inputNickName = event.target.value;
    setNickName(inputNickName);
  };

  const onPasswordChangeHandler = (event) => {
    const inputPassword = event.target.value;
    setPassword(inputPassword);
  };

  return (
    <StContiner>
      <h1>로그인</h1>
      <label>Nickname</label>
      <input type="text" value={nickName} placeholder="Type your Nickname" onChange={onNickNameChangeHandler}/>
      <label>비밀번호</label>
      <input
        type="password"
        value={password}
        placeholder="Type your Password"
        onChange={onPasswordChangeHandler}
      />
      <div>
        <StBtn type="submit">로그인</StBtn>
        <Link to={"/signup"}>
          <StBtn type="button">회원가입</StBtn>
        </Link>
        <Link to={"/"}>
          <StBtn type="button">뒤로가기</StBtn>
        </Link>
      </div>
    </StContiner>
  );
}
export default SignIn;

const StContiner = styled.div`
  max-width: 1200px;
  margin: 15px auto;
  padding: 20px;

  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  flex-direction: column;

  border: 3px solid black;
`;

const StBtn = styled.button`
  margin: 5px;
`;
