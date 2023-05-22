import { styled } from "styled-components";
import { addFairytale } from "../../../redux/modules/fairytale";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { AuthApi } from "../../../shared/Api";
import { useCookies } from "react-cookie";

function CreateStory({close, setRenderTrigger}) {
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    title: "",
    content: "",
    imageURL: "",
  });

  // Input 상태관리
  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  };
  const [cookies] = useCookies(["authorization"]);

  const newStory = {
    title: post.title,
    content: post.content,
    imageURL: post.imageURL,
  };
  const config = {
    headers: {
      // 쿠키를 헤더에 추가
      authorization: cookies.authorization,
    },
  };

  const onSubmitPostHandler = async () => {
    try {
      const res = await AuthApi.postStories(newStory, config);
      setRenderTrigger(data=>!data)
      alert(res.data.message);
      close()
    } catch (err) {
      alert(err.response.data.errorMessage);
    }
  };

  return (
    <StInputContiner>
      <StInputBox>
        제목 :
        <input type="text" name="title" onChange={onChangeInputHandler} />
        첫문장 :
        <input type="text" name="content" onChange={onChangeInputHandler} />
        표지 이미지 url:
        <input type="text" name="imageURL" onChange={onChangeInputHandler} />
        <button type="submit" onClick={onSubmitPostHandler}>저장</button>
      </StInputBox>
      <StPreviewBox>
        {<img src={post.imageURL} alt="이미지 미리보기" />}
      </StPreviewBox>
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

//이미지 미리보기
const StPreviewBox = styled.div`
  margin: 10px;
  padding: 10px;
  width: 20%;
  border: 3px solid black;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
