// 여러 reducer를 사용하는 경우 reducer를 하나로 묶어주는 메소드
// store에 저장되는 리듀서는 오직 1개이지만 그 1개에 여러개의 리듀서가 들어갈수있음
import { combineReducers } from "redux";
import themeSlicer from "./themeSlicer.js"; // 만든 리듀서'
import bottomSheetSlicer from "./bottomSheetSlicer"; // 만든 리듀서'
import userSlicer from './userSlicer'
// 이름도 알기쉽게 바꿔준다.  userReducer => userSlice

const rootReducer = combineReducers({
    themeSlicer : themeSlicer.reducer,
    bottomSheetSlicer : bottomSheetSlicer.reducer,
    userSlicer : userSlicer.reducer,

    // redux toolkit
    // userReducer : userReducer =>  userSlice : userSlice.reducer(),
});

export default rootReducer;
