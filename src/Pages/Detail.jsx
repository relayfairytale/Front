import { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
import WriterModal from "../Components/feature/WriterModal";
import { AuthApi } from "../shared/Api";
import RelayModal from "../Components/feature/RelayModal/RelayModal";

function Detail() {
  //동화 세부 정보
  const [showStoriesData, setShowStoriesData] = useState({});
  const [trigger, setTrigger] = useState(false);
  const isFairyTaleComplet = true;
  //제가 써볼께요 버튼활성화
  const [visible, setVisible] = useState(false);
  // 릴레이 상세보기 id
  const [modalVisibleId, setModalVisibleId] = useState(0);

  const { storyId } = useParams();

  // 동화 Detail 페이지에서 조회
  const showDetailStories = async () => {
    try {
      const res = await AuthApi.showDetailStories(storyId);

      setShowStoriesData(res.data.story);
      console.log("res data", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickModal = (id) => {
    setModalVisibleId(id);
  };

  // useEffect를 이용해서 상세보기posts를 Fetching 합니다.
  useEffect(() => {
    showDetailStories();
  }, [trigger]);

  return (
    <Layout>
      <StHederLine>
        <Link to="/">
          <button>돌아가기</button>
        </Link>
        {isFairyTaleComplet ? <StCompletBox>완결</StCompletBox> : null}
      </StHederLine>
      <StContentsBox>
        <StH2>{showStoriesData.title} </StH2>
        <div>
          <div>{showStoriesData.content}</div>
          {showStoriesData.Relays?.map((item) => {
            return (
              <div
                key={item.relayId}
                onClick={() => {
                  onClickModal(item.relayId);
                }}
              >
                <p>{item.content}</p>
                {item.relayId === modalVisibleId && (
                  <RelayModal
                    id={item.relayId}
                    relayId={item.relayId}
                    setTrigger={setTrigger}
                    modalVisibleId={modalVisibleId}
                    setModalVisibleId={setModalVisibleId}
                  />
                )}
              </div>
            );
          })}
        </div>
        <div>
          <button
            onClick={() => {
              setVisible(!visible);
            }}
          >
            제가 한번 써볼게요
          </button>
          <hr />
          {visible && <WriterModal storyId={storyId} setTrigger={setTrigger} />}
        </div>
      </StContentsBox>
    </Layout>
  );
}

export default Detail;

const StHederLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;
const StCompletBox = styled.div`
  width: 100px;
  font-size: 30px;
  background-color: #6699cc;
  color: white;
  text-align: center;
  border-radius: 10px;
`;
const StContentsBox = styled.div`
  margin: 10px;
  border: 3px solid #4169e1;
`;
const StH2 = styled.h2`
  text-decoration: underline;
  text-decoration-color: #ffa500; /* 밑줄 색상 설정 */
  text-decoration-thickness: 3px; /* 밑줄 두께 설정 */

  display: block;
`;
