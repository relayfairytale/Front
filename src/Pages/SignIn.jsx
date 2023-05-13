import { styled } from "styled-components";

function SignIn() {
  return (
    <StContiner>
      <h1>로그인</h1>
      <label>ID</label>
      <input type="email" placeholder="" />
      <label>비밀번호</label>
      <input type="password" placeholder="" />
      <div>
        <StBtn type="submit">로그인</StBtn>
        <StBtn type="button">회원가입</StBtn>
        <StBtn type="button">뒤로가기</StBtn>
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
