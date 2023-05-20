import React, { useState } from "react";
import Layout from "../Components/Layout/Layout";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
import WriterModal from "../Components/feature/WriterModal";
import { useSelector } from "react-redux";

function Detail() {
  const isFairyTaleComplet = true;

  const [visible, setVisible] = useState(false);
 

  // const fairytaleStore = useSelector((state) => state.fairyTale)
  // const param = useParams();
  // const store = fairytaleStore.stories.find((item) => item.storyId === param.id); 

  const fairytaleStore = useSelector((state) => state.fairyTale);
  const fairytales = useSelector((state=>state.fairyTale));

  
 
const {storyId} = useParams();
  
 console.log('fairytaleStore',fairytaleStore)
const store = fairytaleStore.stories.find((item) => item.storyId === parseInt(storyId));


  console.log('store??????????',store)
  
  
  return (
    <Layout>
      <StHederLine>
        <Link to="/">
          <button>돌아가기</button>
        </Link>
        {isFairyTaleComplet ? <StCompletBox>완결</StCompletBox> : null}
      </StHederLine>
      <StContentsBox>
        <StH2>{store.title} </StH2>
        <div>
          <div>여기 밑에부터</div>
          <div>{store.content}</div>
          <div>{store.relaymention}</div>
          {fairytales.stories.map((item)=>{ 
            return(
              <div key={item.storyId}>
              <h3>{item.relaymention}</h3>  
              </div>
              )
              })}

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