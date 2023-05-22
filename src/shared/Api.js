import axios from "axios";

// 싱글톤 패턴으로 axios 인스터스를 생성
export const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_SERVER_URL,
  headers: {
    /* */
  },
  withCredentials: true,
});

// api.interceptors.request.use(
//   config => {
//     const token = localStorage.getItem("coopToken");
//     if (token) {
//       config.headers["authorization"] = `Bearer ${token}`;
//       return config;
//     }
//     return config;
//   },
//   error => {
//     return error;
//   },
// );

export const AuthApi = {
  // 회원정보 관련
  signup: (payload) => api.post("/signup", payload),
  signin: (payload) => api.post("/signin", payload),
  // 동화 작성 조회
  postStories: (data, config) => api.post("/stories", data, {...config}),
  getStories: (payload) => api.get("/stories", payload),
  // 동화 수정 삭제
  editStories: (payload) => api.put("/stories/:storyId", payload),
  delStories: (payload) => api.delete("/stories/:storyId", payload),
  // 동화 세부 정보 조회 및 작성
  showDetailStories: (payload) => api.get(`/stories/${payload}`),
  postRelayStories: (payload) => api.post("/stories/:storyId/relay", payload),
  // 작성중 여부 체크
  isWritingCheak: (payload) =>
    api.post("/stories/:storyId/relay/isWriting", payload),
  // 문장 세부 정보
  showRelay: (payload) => api.get("/stories/:storyId/relay/relayId", payload),
  // 문장 수정 삭제
  editRelay: (payload) => api.put("/stories/:storyId/relay/relayId", payload),
  delRelay: (payload) => api.delete("/stories/:storyId/relay/relayId", payload),
  // 좋아요 표시
  likeStories: (payload) => api.put("/stories/:storyId/like", payload),
  likeRelay: (payload) =>
    api.put("/stories/:storyId/relay/relayId/like", payload),
};
