import { createSlice } from '@reduxjs/toolkit' // toolkit 추가된 임포트
import {lightTheme} from '../../Theme'
const initialState = {
    name: '',
    active: false,
}

const bottomSheetSlicer = createSlice({
    name: 'bottomSheetSlicer',
    initialState: initialState,
    reducers: { // 동기적인  액션을 넣는다.   내부적인 액션
        updateSlicer (state, action) {
            state.name = action.payload.name
            state.active = action.payload.active
        },
    },
});
export default bottomSheetSlicer;
