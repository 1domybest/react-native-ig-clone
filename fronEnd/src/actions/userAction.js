import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {Alert} from 'react-native'

const snsLogin = async (params) => {
    console.log('로그인 요청 파마미터')
    console.log(params)
    await axios.post('http://localhost:8080/api/user/snsLogin', params, {withCredentials: true})
    .then(function(res) {
        console.log(res.data.code)
        if (res.data.code === 200) { // 정상 코드가 들어올시 비지니스로직 진행
            alert(res.data.message);
        }
    }).catch(error => {
        if (error.response.data.code !== 303) { // 일반회원일때
            alert(error.response.data.message);
        } else {
            return (
                Alert.alert(
                    error.response.data.message,
                    'sns 로그인 연동하기',
                    [
                        {
                            text: '연동하기',
                            onPress: async () => await updateProvider(params)
                        },
                        {
                            text: '취소',
                            onPress: () => false,
                            style: "cancel"
                        },
                    ],
                    { cancelable: false }
                )
            )
        }
        
    })
}

const updateProvider = async (params) => {
    await axios.post('http://localhost:8080/api/user/updateProvider', params, {withCredentials: true})
    .then(function(res) {
        if (res.data.code === 200) { // 정상 코드가 들어올시 비지니스로직 진행
            snsLogin(params)
        }
    }).catch(error => {
        alert(error.response.data.message);
    })
}

const snsLoginRequset = createAsyncThunk('user', async (data, {dispatch, getState, rejectWithValue, fulfillWithValue}) => {
    // try catch 는 하지말아야 에러를 캐치할수 있다.
    // 상단 파라미터중 data는 요청시 들어온 파라미터이다. 저 파라미터를 가지고 서버에 데이터 요청하면된다.
    console.log('data = ', data) // 파라미터
    const state = getState(); // 상태가져오기
    console.log('state = ', state)

    let result = snsLogin(data);
    
})

export {snsLoginRequset}