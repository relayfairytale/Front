import { styled } from "styled-components";

function CreateStory() {
  return (
    <StInputContiner>
      <StInputBox>
        제목 : <input type="text" />
        첫문장 : <input type="text" />
        표지 이미지 url: <input type="text" />
        <button>저장</button>
      </StInputBox>
      <StPreviewBox>이미지 미리 보기</StPreviewBox>
    </StInputContiner>
  );
}

export default CreateStory;

const StInputContiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
const StInputBox = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 20px;
`;

const StPreviewBox = styled.div`
  margin: 10px;
  padding: 10px;
  width: 20%;
  border: 3px solid black;
`