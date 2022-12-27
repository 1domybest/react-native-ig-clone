import { createSlice } from '@reduxjs/toolkit' // toolkit 추가된 임포트
import {lightTheme} from '../../Theme'
const initialState = {
    tab: 'Home'
}

const themeSlice = createSlice({
    name: 'tabSlicer',
    initialState: initialState,
    reducers: { // 동기적인  액션을 넣는다.   내부적인 액션
        updateTab (state, action) {
            state.tab = action.payload
        },
    },
});
export default themeSlice;
