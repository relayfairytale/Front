import React from "react";
import { AuthApi } from "../../../shared/Api";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

function RelayModal(props) {
  const { storyId } = useParams();
  const [cookies] = useCookies(["authorization"]);
  const config = {
    headers: {
      // 쿠키를 헤더에 추가
      authorization: cookies.authorization,
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      const res_relay = await AuthApi.showRelay(storyId, props.relayId, config);
      console.log("res_relay", res_relay);
      if (res_relay.data.relay.like === false) setLike(true);
    };
    fetchData();
  }, [props.storyId]);

  const [like, setLike] = useState(false);
  // const likeRelay = async (e) => {
  //   const res = await AuthApi.likeRelay(props.storyID, payload);
  //   setLike(!like);
  // };
  const likeRelay = async () => {
    try {
      const res = await AuthApi.likeRelay(storyId, props.relayId, config);
      console.log(res);
      alert(res.data.message);
      setLike(!like);
    } catch (error) {
      console.error("Error liking relay:", error);
    }
  };
  return (
    <div>
      <div>
        <p>
          <button like={like} onClick={likeRelay}>
            좋아요❤️
          </button>
        </p>
      </div>
    </div>
  );
}
export default RelayModal;
