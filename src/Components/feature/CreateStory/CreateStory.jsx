import { styled } from "styled-components";
import { addFairytale } from "../../../redux/modules/fairytale";
import { useDispatch } from "react-redux";
import React, { useState } from 'react';


function CreateStory(props) {

  const { close } = props;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  const dispatch = useDispatch();

  const clickCreatstory = (event) =>{
    event.preventDefault();
    dispatch(addFairytale({
      storyId: Date.now(),
      title,
      content,
      imageUrl: imgFile,
      User:{nickname:"jin"}
    }));    
    close();
  };



  console.log('title:::::',title)
  console.log('content:::::',content)


  //이미지 파일

const [imgFile, setImgFile] = useState("");

console.log(imgFile)


const handleImageUrlChange = (event) => {
    
   
  setImgFile(event.target.value);
    };


  return ( 
    <StInputContiner>
      <StInputBox>
        제목 : <input type="text" value={title} onChange={titleChangeHandler}/>
        첫문장 : <input type="text" value={content} onChange={contentChangeHandler} />
        표지 이미지 url: 
        <input type="text" value={imgFile} onChange={handleImageUrlChange}
        />
        <button onClick={clickCreatstory}  >저장</button>
      </StInputBox> 
      <StPreviewBox>
        {<img src={imgFile} alt="이미지 미리보기" />}
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