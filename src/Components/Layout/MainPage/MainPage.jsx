import { styled } from "styled-components";

function Body() {
  return (
    <StBodyBox>
      <StUl>
        <StLi>
          <div>새 동화 만들기</div>
        </StLi>
        <StLi>
          <div>제목</div>
          <div>작성자</div>
        </StLi>
        <StLi>
          <div>제목</div>
          <div>작성자</div>
        </StLi>
        <StLi>
          <div>제목</div>
          <div>작성자</div>
        </StLi>
        <StLi>
          <div>제목</div>
          <div>작성자</div>
        </StLi>
      </StUl>
    </StBodyBox>
  );
}

export default Body;

const StBodyBox = styled.div`
margin: 5px;
  border: 3px solid black;
  padding: 10px;
`;

const StUl = styled.ul`
  list-style: none;
  padding: 0;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  row-gap: 30px;
  column-gap: 3%;
`;

const StLi = styled.li`
  width: 22.25%;
  height: 150px;

  border: 2px solid black;
`;
