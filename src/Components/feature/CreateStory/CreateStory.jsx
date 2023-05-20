import { styled } from "styled-components";
import { addFairytale } from "../../../redux/modules/fairytale";
import { useDispatch } from "react-redux";
import React, { useState } from 'react';
import { AuthApi } from "../../../shared/Api";


function CreateStory({close, setPosts, posts }) {

 

  // const { close } = props;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImagUrl] = useState("");
  // const titleChangeHandler = (event) => {
  //   setTitle(event.target.value);
  // };

  // const contentChangeHandler = (event) => {
  //   setContent(event.target.value);
  // };




  const dispatch = useDispatch();

  



  const clickCreatstory = (event) =>{
    event.preventDefault();
    dispatch(addFairytale({
      storyId: Date.now(),
      title,
      content,
      imageUrl,
    }));    
    close();
  };



  console.log('title:::::',title)
  console.log('content:::::',content)


  //이미지 파일



console.log(imageUrl)


const handleImageUrlChange = (event) => {
    
   
  setImagUrl(event.target.value);
    };



 const [post,setPost] = useState({
    title:"",
    content:"",
    imageUrl:"",
  });

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitPostHandler = async (event) =>{
    event.preventDefault();
    try{
      setIsLoading(true);
      const res = await AuthApi.postStories();
      setPosts([...posts, res]);
    } catch (error) {
      // Error가 발생한다면, Alert를 띄움
      alert("Error가 발생했습니다.");
      setError(error);
    } finally {
      // 요청이 실패를 해도, 성공을 해도 실행되는 부분.
      // 로딩상태를 false로 변경해준다.
      setIsLoading(false);
    }
  }

  
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
      <StInputBox onSubmit={onSubmitPostHandler}>
        제목 : <input type="text" name="title" onChange={onChangeInputHandler}/>
        첫문장 : <input type="text" name="content" onChange={onChangeInputHandler} />
        표지 이미지 url: 
        <input type="text" name="imageUrl" onChange={handleImageUrlChange}
        />
        <button onClick={clickCreatstory} >{isLoading ? "저장중" : "저장"}</button>
      </StInputBox> 
      <StPreviewBox>
        {<img src={imageUrl} alt="이미지 미리보기" />}
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

`