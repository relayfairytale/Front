import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

// 닉네임 정규식
const nicknameRegex = /^[A-Za-z0-9]{3,}$/;
// 비밀번호 정규식
const passwordRegex = /^.{4,}$/;
// 오류 메세지
const alertMessage = {
  nickErr: "닉네임 규칙에 어긋납니다!!(영문과 숫자를 사용하여 3글자 이상)",
  pwErr: "비밀번호 규칙에 어긋납니다!!(4글자 이상)",
  pwMachErr: "패스워드가 불일치합니다.",
};

let [nick, pw, cofimpw] = [true, true, true];

function Signup() {
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  console.log(`nick : ${nick}, pw : ${pw}, cofimpw : ${cofimpw}`);

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

    // 닉네임 유효성 검사
    if (!nicknameRegex.test(nickName)) {
      nick = false;
    }
    // 비밀번호 유효성 검사
    if (!passwordRegex.test(password)) {
      pw = false;
    }

    if (isPwMach) {
      cofimpw = true;
    } else {
      cofimpw = false;
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
      {nick ? null : nickName ? alertMessage.nickErr : "값이 비어 있어요"}

      <label>비밀번호 : </label>
      <input
        type="text"
        placeholder="Password"
        onChange={onPasswordChangeHandler}
      />
      {pw ? null : password ? alertMessage.pwErr : "값이 비어 있어요"}
      <label>비밀번호 재입력 : </label>
      <input
        type="text"
        placeholder="Confirm Password"
        onChange={onConfirmPasswordChangeHandler}
      />
      {"3333"}
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
