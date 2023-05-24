import { styled } from "styled-components";
import Header from "./Header/Header";

function Layout({ children }) {
  return (
    <StLayoutBox>
      <Header />
      <div className="content">{children}</div>
    </StLayoutBox>
  );
}

export default Layout;

const StLayoutBox = styled.div`
  max-width: 1200px;
  min-width: 800px;
  border: 3px solid black;
  margin: 0 auto;
  background-image: url();
`;
