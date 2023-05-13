import { styled } from "styled-components";
import Nav from "../Nav/Nav";

function Header() {
  return (
    <StHeaderBox>
      <h1> 릴리텔 - 릴레이 동화 쓰기 플랫폼 </h1>
      <Nav />
    </StHeaderBox>
  );
}

export default Header;

const StHeaderBox = styled.div`
  padding: 10px;
  margin: 15px;
  border: 3px solid black;
`;
