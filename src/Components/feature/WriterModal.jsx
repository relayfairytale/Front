import React from "react";
import { useState } from "react";
import { styled } from "styled-components";
import { AuthApi } from "../../shared/Api";
import { useCookies } from "react-cookie";

function WriterModal({ storyId, setTrigger }) {
  const [cookies] = useCookies(["authorization"]);
  const [relayContent, setRelayContent] = useState({
    content: "",
  });

  const newRelay = {
    content: relayContent.content,
  };

  const config = {
    headers: {
      // 쿠키를 헤더에 추가
      authorization: cookies.authorization,
    },
  };

  const onSubmitRelayHandler = async (event) => {
    event.preventDefault();
    try {
      const res = await AuthApi.postRelayStories(newRelay, config, storyId);
      setTrigger((prev) => !prev);
      alert(res.data.message);
      setRelayContent("")
    } catch (err) {
      alert(err.response.data.errorMessage);
    }
  };
  return (
    <WriterBox onSubmit={onSubmitRelayHandler}>
      <WriterInputBox
        type="text"
        onChange={(event) => {
          const { value } = event.target;
          setRelayContent({ ...relayContent, content: value });
        }}
      ></WriterInputBox>
      <button type="submit">저장</button>
    </WriterBox>
  );
}

const WriterBox = styled.form`
  align-items: center;
`;

const WriterInputBox = styled.input`
  width: 900px;
  height: 80px;
  margin: 25px;
`;

export default WriterModal;
