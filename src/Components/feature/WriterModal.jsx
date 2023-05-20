import React from 'react'
import { useState } from 'react'
import { styled } from 'styled-components';
import { addRelay } from '../../redux/modules/fairytale';
import { useDispatch } from "react-redux";

function WriterModal() {
  const [relaymention,setRelaymention] =useState("");

  const onchangeWriterContent = (event) =>{
    setRelaymention(event.target.value);
  }

  const dispatch = useDispatch();
  
  const clickRelay = (event) =>{
    event.preventDefault();
    dispatch(addRelay({
      storyId: Date.now(),
      relaymention,
     
    }));    
    
  };

  
  return (
    
    <WriterBox>
      <WriterInputBox type="text" value={relaymention} onChange={onchangeWriterContent}></WriterInputBox>
      <button onClick={clickRelay}>저장</button>     
    </WriterBox>
   
  )
}

const WriterBox = styled.div`
    align-items: center;
  `

const WriterInputBox = styled.input`
  width: 900px;
  height: 80px;
  margin: 25px;
  `



export default WriterModal;

