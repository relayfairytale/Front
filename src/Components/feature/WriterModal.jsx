import React from 'react'
import { useState } from 'react'
import { styled } from 'styled-components';


function WriterModal() {
  const [writerContent,setWriterContent] =useState("");

  const onchangeWriterContent = (event) =>{
    setWriterContent(event.target.value);
  }


  
  return (
    
    <WriterBox>
      <WriterInputBox type="text" value={writerContent} onchange={onchangeWriterContent}></WriterInputBox>
      <button>저장</button>     
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

