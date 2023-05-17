import React, { useState } from "react";
import Layout from "../Components/Layout/Layout";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import WriterModal from "../Components/feature/WriterModal";

function Detail() {
  const isFairyTaleComplet = true;

  const [visible, setVisible] = useState(false);
  const [writerContent, setWriterContent] =useState("");

  return (
    <Layout>
      <StHederLine>
        <Link to="/">
          <button>돌아가기</button>
        </Link>
        {isFairyTaleComplet ? <StCompletBox>완결</StCompletBox> : null}
      </StHederLine>
      <StContentsBox>
        <StH2>제목 : 백설공주 </StH2>
        <div>
          <div>옛날 옛적 한겨울에, 하늘에서 눈송이가 깃털처럼 내리고 있었습니다.</div>
          <div>그때 어느 왕비가 흑단 나무로 만든 창틀에 앉아 바느질을 하고 있었습니다.</div>
          <div>눈을 보며 바느질을 하다가 바늘에 손가락이 찔려 피 세 방울을 눈 위로 떨어뜨렸습니다.</div>
          <div>하얀 눈 속에 있는 피가 너무 아름다워 보여서 왕비는 생각했습니다.</div>
          <div>'눈처럼 하얗고, 피처럼 붉고, 창틀의 나무처럼 까만 머리카락을 가진 아이가 내게 있었다면!' 얼마 지나지 않아 왕비는 딸을 가지게 되었습니다.</div>
          <div>여기다가 밑으로 쭉쭉 추가되야함</div>
          <div>{writerContent}</div>
        </div>
        <div>
          <button onClick={()=>{setVisible(!visible);
          }}
          >
            제가 한번 써볼게요
          </button>
          <hr/>
          {visible && <WriterModal/>}
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
