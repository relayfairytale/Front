import { Link } from "react-router-dom";
import { styled } from "styled-components";

function Nav() {
  return (
    <StNavBar>
      <Link to={"/signup"}>
        <button>회원가입</button>
      </Link>
      <Link to={"/signin"}>
        <button>로그인</button>
      </Link>
    </StNavBar>
  );
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
