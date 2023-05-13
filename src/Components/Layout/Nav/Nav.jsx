import { styled } from "styled-components";

function Nav() {
  return (
    <StNavBar>
      <button>회원가입</button>
      <button>로그인</button>
    </StNavBar>
  );
}

export default Nav;

const StNavBar = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  gap :15px;
  flex-wrap: wrap;
  justify-content: flex-end;
`;
