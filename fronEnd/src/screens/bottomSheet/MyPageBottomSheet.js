import styled from "styled-components/native";
import React, { useEffect } from 'react'
import {Divider} from 'react-native-elements'
import Ionicons from "react-native-vector-icons/Ionicons";
import {ICONS} from '../../constants/icons'
import {Alert} from 'react-native'
import { useDispatch, useSelector } from "react-redux"; // userDispatch = 데이터 변경시 사용 // useSelector = 데이터 가져올때 사용
import {logOutRequest} from '../../actions/userAction'
import * as $Util from '../../constants/utils'
import {ROUTES} from '../../constants/routes'
import { StackActions } from '@react-navigation/native';
import bottomSheetSlicer from '../../slicers/bottomSheetSlicer'
const myPageBottomSheet = ({navigation}) => {

    const dispatch = useDispatch();
    const userSliceData = useSelector(state => state.userSlicer)
    useEffect(() => {
        if ($Util.isEmpty(userSliceData.accessToken)) {
            navigation.dispatch(
                StackActions.replace(ROUTES.LOGIN)
              )
        }
    })

    

    const openLogOutAlert = () => {
        return (
            Alert.alert(
                '로그아웃 하시겠습니까?',
                '로그아웃',
                [
                    {
                        text: '로그아웃',
                        onPress: async () => {
                           await dispatch(bottomSheetSlicer.actions.updateSlicer({name : 'myPage', active: false}))
                            dispatch(logOutRequest(navigation))
                        }
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
                    <Ionicons name="log-out-outline" size={28} color="black" />
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
    padding: 10px 15px;
`
const Box = styled.View``

const TextBox = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`

const Text = styled.Text`
    margin-left: 10px;
`

const TouchableOpacity = styled.TouchableOpacity`

`;