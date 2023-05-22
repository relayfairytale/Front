import { styled } from "styled-components";
import { addFairytale } from "../../../redux/modules/fairytale";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { AuthApi } from "../../../shared/Api";
import { useCookies } from "react-cookie";

function CreateStory({ close, setPosts, posts }) {
  const dispatch = useDispatch();
  const [imageURL, setImagURL] = useState("");
  const [post, setPost] = useState({
    title: "",
    content: "",
    imageURL: "",
  });

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // const handleImageUrlChange = (event) => setImagURL(event.target.value);

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

  const onSubmitPostHandler = async (event) => {
    event.preventDefault();
    try {
      const res = await AuthApi.postStories(newStory, config);
      console.log(res);
    } catch (err) {
      alert(err.response.data.errorMessage);
      console.log(err);
    }
    // if (res.data.ok) {
    //   dispatch(addFairytale(newStory));
    // }
    /**
     * 1. axios --> server에 데이터 보내기
     *    토큰이 필요한 요청: header --> authorization: token (getCookie // 토큰 꺼내는법)
     *    AuthApi.postStories(<-- new story-->)
     *
     * 2. response --> 200 / ok / ture
     * 3. dispatch(addFairytale)
     *
     */

    // try {
    //   setIsLoading(true);
    //   const res = await AuthApi.postStories(newStory);
    //   setPosts([...posts, res]);
    // } catch (error) {
    //   // Error가 발생한다면, Alert를 띄움
    //   alert("Error가 발생했습니다.");
    //   setError(error);
    // } finally {
    //   // 요청이 실패를 해도, 성공을 해도 실행되는 부분.
    //   // 로딩상태를 false로 변경해준다.
    //   setIsLoading(false);
    // }
  };

  // Input 상태관리
  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  return (
    <StInputContiner>
      <StInputBox>
        제목 :{" "}
        <input type="text" name="title" onChange={onChangeInputHandler} />
        첫문장 :{" "}
        <input type="text" name="content" onChange={onChangeInputHandler} />
        표지 이미지 url:
        <input type="text" name="imageURL" onChange={onChangeInputHandler} />
        <button onClick={onSubmitPostHandler}>
          {isLoading ? "저장중" : "저장"}
        </button>
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
