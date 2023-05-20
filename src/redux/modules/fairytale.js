import { createSlice } from "@reduxjs/toolkit";

// 초기 상태값
const initialState = {

stories: [
{
storyId: 4,
title: "신데렐라",
content: "Once upon a time, there is Sad frog…",
imageUrl:'https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791168250734.jpg',
isFinished: false,
likeCount: 0,
createdAt: "2023-05-13T08:29:14.000Z",
updatedAt: "2023-05-13T08:29:14.000Z",
User: {
nickname: "진영"
}},

{
  storyId: 5,
  title: "인어공주",
  content: "옛날엣날에~",
  imageUrl:'https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791160269352.jpg',
  relaymention:"행복하자",
  isFinished: false,
  likeCount: 0,
  createdAt: "2023-05-13T08:29:14.000Z",
  updatedAt: "2023-05-13T08:29:14.000Z",
  User: {
  nickname: "지현"
  }}
]
}






const fairyTaleSlice = createSlice({
  name: "fairyTale",
  initialState,
  reducers: {

    //추가
    addFairytale : (state,action) => void state.stories.push({
      title: action.payload.title,
      content : action.payload.content,
      imageUrl: action.payload.imageUrl,
      

      //백엔드연결후 지우기
      storyId: Date.now(),
    }),

    addRelay : (state,action) => void state.stories.push({
      storyId: Date.now(),
      relaymention : action.payload.relaymention,
    })
    //

   

    // 액션명: (state, action) => {
    //   state.number = state.number + action.payload;
    //   수행할 명령
    // },
    // 액션명2: (state, action) => {
    //   state.number = state.number - action.payload;
    //   수행할 명령
    // },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const {addFairytale, addRelay } = fairyTaleSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default fairyTaleSlice.reducer;
