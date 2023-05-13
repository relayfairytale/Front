import { useState } from "react";
import { styled } from "styled-components";
import CreateModal from "../../feature/CreateStory/CreateModal";
import CreateStory from "../../feature/CreateStory/CreateStory";

function Body() {
  const [createStory, setCreateStory] = useState(false);
  const showCreateStory = () => {
    setCreateStory(true);
  };

  const hideCreateStory = () => {
    setCreateStory(false);
  };

  return (
    <StBodyBox>
      <StUl>
        <StLi>
          <CreateBox onClick={showCreateStory}>새 동화 만들기</CreateBox>
          {createStory && (
            <CreateModal
              open={createStory}
              close={hideCreateStory}
              header="새로운 이야기를 만들어 보세요!"
            >
              <CreateStory />
            </CreateModal>
          )}
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

const CreateBox = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
