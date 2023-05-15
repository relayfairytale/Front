import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// 닉네임 정규식
const nicknameRegex = /^[A-Za-z0-9]{3,}$/;
// 비밀번호 정규식
const passwordRegex = /^.{4,}$/;
// 오류 메세지
const alertMessage = {
  nickErr: "닉네임 규칙에 어긋납니다! (영문과 숫자를 사용하여 3글자 이상)",
  pwErr: "비밀번호 규칙에 어긋납니다!!(4글자 이상)",
  pwMachErr: "패스워드가 불일치합니다.",
};

function Signup() {
  const [nickName, setNickName] = useState({
    value: "",
    err: null,
  });
  const [password, setPassword] = useState({
    value: "",
    err: null,
  });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    err: null,
  });

  const onNickNameChangeHandler = (event) => {
    const inputNickName = event.target.value;
    setNickName((prevNickName) => ({
      ...prevNickName,
      value: inputNickName,
    }));
  };

  const onPasswordChangeHandler = (event) => {
    const inputPassword = event.target.value;
    setPassword((prevPassword) => ({
      ...prevPassword,
      value: inputPassword,
    }));
  };

  const onConfirmPasswordChangeHandler = (event) => {
    const inputConfirmPassword = event.target.value;
    setConfirmPassword((prevConfimPw) => ({
      ...prevConfimPw,
      value: inputConfirmPassword,
    }));
  };

  // 비밀번호 일치 여부 검사
  const isPwMach = password.value === confirmPassword.value;

  const verifySiginUpData = () => {
    // 닉네임 유효성 검사
    if (!nicknameRegex.test(nickName.value)) {
      setNickName((prevNickName) => ({
        ...prevNickName,
        err: true,
      }));
    } else {
      setNickName((prevNickName) => ({
        ...prevNickName,
        err: false,
      }));
    }
    // 비밀번호 유효성 검사
    if (!passwordRegex.test(password.value)) {
      setPassword((prevPassword) => ({
        ...prevPassword,
        err: true,
      }));
    } else {
      setPassword((prevPassword) => ({
        ...prevPassword,
        err: false,
      }));
    }
    // 비밀번호 재입력 일치 여부 검사
    if (!isPwMach) {
      setConfirmPassword((prevConfimPw) => ({
        ...prevConfimPw,
        err: true,
      }));
    } else {
      setConfirmPassword((prevConfimPw) => ({
        ...prevConfimPw,
        err: false,
      }));
    }

    console.log(nickName.err)
    console.log(password.err)
    console.log(confirmPassword.err)
    if (!nickName.err && !password.err && !confirmPassword.err) {
      return true;
    } else {
      return false;
    }
  };

  const onSubmitHandler = () => {
    const signUpVerfy = verifySiginUpData();
    
    
    
    console.log(signUpVerfy ? "가능" : "불가능");
  };

  return (
    <StSignupContainer>
      <h1>회원가입</h1>
      <label>
        닉네임 :
        <StAlertBox>{nickName.err ? alertMessage.nickErr : null}</StAlertBox>
      </label>
      <input
        type="text"
        placeholder="My Nickname"
        onChange={onNickNameChangeHandler}
      />
      <label>
        비밀번호 :
        <StAlertBox>{password.err ? alertMessage.pwErr : null}</StAlertBox>
      </label>
      <input
        type="text"
        placeholder="Password"
        onChange={onPasswordChangeHandler}
      />
      <label>
        비밀번호 재입력 :
        <StAlertBox>
          {confirmPassword.err ? alertMessage.pwMachErr : null}
        </StAlertBox>
      </label>
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

const StAlertBox = styled.div`
  color: tomato;
  font-weight: bold;
`;
