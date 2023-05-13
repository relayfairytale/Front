import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

function Signup() {
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onNickNameChangeHandler = (event) => {
    const inputNickName = event.target.value;
    setNickName(inputNickName);
  };

  const onPasswordChangeHandler = (event) => {
    const inputPassword = event.target.value;
    setPassword(inputPassword);
  };

  const onConfirmPasswordChangeHandler = (event) => {
    const inputConfirmPassword = event.target.value;
    setConfirmPassword(inputConfirmPassword);
  };

  const onSubmitHandler = () => {
    // 비밀번호 일치 여부 검사
    const isPwMach = password === confirmPassword;
    // 닉네임 정규식
    const nicknameRegex = /^[A-Za-z0-9]{3,}$/;
    // 비밀번호 정규식
    const passwordRegex = /^.{4,}$/;

    if(!nicknameRegex.test(nickName)) {
      alert("닉네임 규칙에 어긋납니다!!")
      return;
    }
    if(!passwordRegex.test(password)) {
      alert("비밀번호 규칙에 어긋납니다!!")
      return;
    }
    if (nickName && password && confirmPassword) {
      isPwMach
        ? console.log(isPwMach, "패스워드가 일치합니다.")
        : console.log(isPwMach, "패스워드가 불일치합니다.");
    } else {
      console.log("필수값 누락입니다.");
    }

  };

  return (
    <StSignupContainer>
      <h1>회원가입</h1>
      <label>닉네임 : </label>
      <input
        type="text"
        placeholder="My Nickname"
        onChange={onNickNameChangeHandler}
      />
      <label>비밀번호 : </label>
      <input
        type="text"
        placeholder="Password"
        onChange={onPasswordChangeHandler}
      />
      <label>비밀번호 재입력 : </label>
      <input
        type="text"
        placeholder="Confirm Password"
        onChange={onConfirmPasswordChangeHandler}
      />
      <div>
        <StBtn onClick={onSubmitHandler}>회원가입</StBtn>
        <Link to={"/"}>
          <StBtn>취소</StBtn>
        </Link>
      </div>
    </StSignupContainer>
  );
}

export default Signup;

const StSignupContainer = styled.div`
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
