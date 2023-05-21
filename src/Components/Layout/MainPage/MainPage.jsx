import { useState, useEffect } from "react";
import { styled } from "styled-components";
import CreateModal from "../../feature/CreateStory/CreateModal";
import CreateStory from "../../feature/CreateStory/CreateStory";
import { useNavigate } from "react-router-dom";
import { AuthApi } from "../../../shared/Api";

function Body() {
  const navigate = useNavigate();
  const [createStory, setCreateStory] = useState(false);
  const [getStoriesData, setGetStoriesData] = useState([]);
  //클릭시 동화 작성 모달
  const showCreateStory = () => {
    setCreateStory(true);
  };
  //
  const hideCreateStory = () => {
    setCreateStory(false);
  };

  const goToDetailPage = (id) => {
    navigate(`/detail/${id}`);
  };

  const getStories = async () => {
    try {
      const res = await AuthApi.getStories();
      setGetStoriesData(res.data.stories);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  // useEffect를 이용해서 posts를 Fetching 합니다.
  useEffect(() => {
    getStories();
  }, []);

  return (
    <StBodyBox>
      <StUl>
        {/* 새 동화만들기 */}
        <StLi>
          <CreateBox onClick={showCreateStory}>새 동화 만들기</CreateBox>
          {createStory && (
            <CreateModal
              open={createStory}
              close={hideCreateStory}
              header="새로운 이야기를 만들어 보세요!"
            >
              <CreateStory open={createStory} close={hideCreateStory} />
            </CreateModal>
          )}
        </StLi>
        {/*동화 리스트  */}
        {getStoriesData?.map((item) => {
          return (
            <StLi
              key={item.storyId}
              onClick={() => goToDetailPage(item.storyId)}
            >
              <div style={{ height: "10%" }}>{item.title}</div>
              <StImgBox
                style={{ backgroundImage: `url(${item.imageURL})` }}
              ></StImgBox>
              <div style={{ height: "10%" }}>{item.User.nickname}</div>
            </StLi>
          );
        })}
      </StUl>
    </StBodyBox>
  );
}

export default Body;

const StBodyBox = styled.div`
  margin: 5px;
  border: 10px solid black;
  padding: 10px;
  border-color: burlywood;
`;

const StUl = styled.ul`
  list-style: none;
  padding: 0;
  border: 5px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  row-gap: 30px;
  column-gap: 3%;
`;

const StLi = styled.li`
  width: 17.2%;
  height: 260px;
  border: 2px solid blue;
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

const StImgBox = styled.div`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 80%;
`;
const CreateBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
