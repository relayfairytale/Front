import { useState, useEffect } from "react";
import { styled } from "styled-components";
import CreateModal from "../../feature/CreateStory/CreateModal";
import CreateStory from "../../feature/CreateStory/CreateStory";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

function Body() {
  const [createStory, setCreateStory] = useState(false);
  const showCreateStory = () => {
    setCreateStory(true);
  };

  const hideCreateStory = () => {
    setCreateStory(false);
  };

  const fairytales = useSelector((state) => state.fairyTale);

  console.log("fairytales??", fairytales);

  // useState를 이용해서 네트워크 요청에 대한 상태를 관리합니다.
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // App.js에 들어오자마자 실행 할 함수를 작성합니다.
  // 이 함수에서는 Posts를 서버에서 가져오는 기능입니다.
  const getStories = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get('/stories');
      setPosts(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
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

        {fairytales.stories.map((item) => {
          return (
            <StLi
              key={item.storyId}
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <Link to={`/detail/${item.storyId}`} key={item.storyId}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.user}</p>
                </div>
              </Link>
            </StLi>
          );
        })}

        {posts.map((item) => {
          return (
            <StLi
              key={item.storyId}
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <Link to={`/detail/${item.storyId}`} key={item.storyId}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.user}</p>
                </div>
              </Link>
            </StLi>
          );
        })}

        <StLi>
          <div>어린왕자</div>
          <div>작성자</div>
        </StLi>
        <StLi>
          <div>콩쥐팥쥐</div>
          <div>작성자</div>
        </StLi>
        <StLi>
          <div>아기돼지삼형제</div>
          <div>작성자</div>
        </StLi>
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
  width: 22.25%;
  height: 150px;
  border: 2px solid blue;
`;

const CreateBox = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
