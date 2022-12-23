import { createSlice } from '@reduxjs/toolkit' // toolkit 추가된 임포트
import {lightTheme} from '../../Theme'
const initialState = {
    theme: lightTheme
}

const themeSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: { // 동기적인  액션을 넣는다.   내부적인 액션
        changeTheme (state, action) {
            state.theme = action.payload
        },
    },
});
export default themeSlice;
