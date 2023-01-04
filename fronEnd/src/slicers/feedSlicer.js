import { createSlice } from '@reduxjs/toolkit' // toolkit 추가된 임포트
import {snsLoginRequset, logOutRequest} from '../actions/userAction'

const initialState = {
    file: null,
    content: null,
    loading: false,
}

const themeSlicer = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: { // 동기적인  액션을 넣는다.   내부적인 액션
        setFile (state, action) {
            state.file = action.payload.file;
        },
        setContent (state, action) {
            state.content = action.payload.content;
        }
    },
    extraReducers: (builder) => { // 비동적인 엑션을 넣는다  외부적인 액션 (예를들어 userSlice에서 post의 액션을 써야할때 이곳에 적는데 그때는 동기가아니고 비동기여도 넣는다.)
        builder.addCase(snsLoginRequset.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(snsLoginRequset.fulfilled, (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.loading = false;
        });
        builder.addCase(snsLoginRequset.rejected, (state, action) => {
            state.loading = false;
            state.accessToken = null;
            state.refreshToken = null;
        });
    },
});
export default themeSlicer;
