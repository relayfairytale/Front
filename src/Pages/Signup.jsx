import { Link } from "react-router-dom";
import { styled } from "styled-components";

function Signup() {
  return (
    <StSignupContainer>
      <h1>회원가입</h1>
      <label for="email">아이디</label>
      <input
        type="email"
        id="email"
        class="input"
        aria-describedby="emailHelp"
        placeholder="My ID"
      />
      <label for="nickname">닉네임</label>
      <input
        type="text"
        id="nickname"
        class="input"
        placeholder="My Nickname"
      />
      <label for="password">비밀번호</label>
      <input
        type="password"
        id="password"
        class="input"
        placeholder="Password"
      />
      <label for="confirm-password">비밀번호 재입력</label>
      <input
        type="password"
        id="confirm-password"
        placeholder="Confirm Password"
      />
      <div>
        <StBtn>회원가입</StBtn>
        <Link to={"/"}>
          <StBtn>취소</StBtn>
        </Link>
      </div>
    </StSignupContainer>
  );
}

export default Signup;

const StSignupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  flex-direction: column;
`;

const StBtn = styled.button`
  margin: 5px;
`;
