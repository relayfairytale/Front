import { styled } from "styled-components";
import { addFairytale } from "../../../redux/modules/fairytale";
import { useDispatch } from "react-redux";
import React, { useState } from 'react';
import { useRef } from "react";

function CreateStory(props) {

  const { open, close } = props;

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
     
    }));    
    close();
  };



  console.log('title:::::',title)
  console.log('content:::::',content)


  //이미지 파일

  const [imgFile, setImgFile] = useState("");
const imgRef = useRef();

// 이미지 업로드 input의 onChange
const saveImgFile = () => {
	const file = imgRef.current.files[0];
	const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        setImgFile(reader.result);
   	};
};

console.log(imgFile)


  return ( 
    <StInputContiner>
      <StInputBox>
        제목 : <input type="text" value={title} onChange={titleChangeHandler}/>
        첫문장 : <input type="text" value={content} onChange={contentChangeHandler} />
        표지 이미지 url: 
        <input
          //컴퓨터에 있는 파일 선택가능
          type="file"
          //모든타입의 이미지파일 허용,서버로 업로드 할 수 있는 파일의 타입
          accept="image/*"
          id="profileImg"
          onChange={saveImgFile}
          ref={imgRef}
        />
        <button onClick={clickCreatstory}  >저장</button>
      </StInputBox> 
      <StPreviewBox><img
      src={imgFile ? imgFile :`/images/icon/user.png`}
      alt="이미지 미리보기"
      />
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