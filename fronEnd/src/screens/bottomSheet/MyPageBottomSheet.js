import styled from "styled-components/native";
import React from 'react'
import {Divider} from 'react-native-elements'
import Ionicons from "react-native-vector-icons/Ionicons";
import {ICONS} from '../../constants/icons'
import {Alert} from 'react-native'
import { useDispatch, useSelector } from "react-redux"; // userDispatch = 데이터 변경시 사용 // useSelector = 데이터 가져올때 사용
import {logOutRequest} from '../../actions/userAction'
import * as $Util from '../../constants/utils'
const myPageBottomSheet = ({navigation}) => {
    const dispatch = useDispatch();

    const openLogOutAlert = () => {
        return (
            Alert.alert(
                '로그아웃 하시겠습니까?',
                '로그아웃',
                [
                    {
                        text: '로그아웃',
                        onPress: () => {dispatch(logOutRequest(navigation))}
                    },
                    {
                        text: '취소',
                        style: "cancel"
                    },
                ],
                { cancelable: false }
            )
        )
    }

  return (
    <Container>
        <TouchableOpacity onPress={openLogOutAlert}>
            <Box>
                <TextBox>
                    <Ionicons name="add-circle-outline" size={28} color="black" />
                    <Text>로그아웃</Text>
                </TextBox>
                <Divider width={1}/>
            </Box>
        </TouchableOpacity>
    </Container>
  )
}

export default myPageBottomSheet

const Container = styled.View`
    padding: 10px 10px;
`
const Box = styled.View``

const TextBox = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`

const Text = styled.Text`
    margin-left: 5px;
`

const TouchableOpacity = styled.TouchableOpacity`

`;