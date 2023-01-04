import React from 'react'
import styled from 'styled-components'
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux"; // userDispatch = 데이터 변경시 사용 // useSelector = 데이터 가져올때 사용
import {ROUTES} from '../../../constants/routes'
import { Alert } from 'react-native';
const Header = (props) => {
    console.log(props)
    const theme = useSelector((state) => state.themeSlicer.theme);
    const goBack = () => {
        props.navigation.goBack();
    }

    const insertFeed = () => {
        if (props.file == null) {
            Alert.alert(
                '파일을 등록해주세요',
                '알림'
            )
            return false;
        }

        if (props.content.length === 0)  {
            Alert.alert(
                '내용을 입력해주세요',
                '알림'
            )
            return false;
        }


        Alert.alert(
            '등록완료!',
            '성공'
        )
        
    }
  return (
    <Container>
        <Box>
            <TouchableOpacity onPress={goBack}>
                <Ionicons name="arrow-back" size={28} color={theme.mode === 'dark' ? 'white' : 'black'} />
            </TouchableOpacity>
        </Box>
        <Box>
            <Title>새 게시물</Title>
        </Box>
        <Box>
            <TouchableOpacity onPress={insertFeed}>
                <ShareText>
                    공유
                </ShareText>
            </TouchableOpacity>
        </Box>
    </Container>
  )
}

export default Header


const Container = styled.View`
    background-color: ${props => props.theme.backgroundColor};
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 15px;
    align-items: center;
`
const Title = styled.Text`
    color: ${props => props.theme.TextColor};
    font-weight: bold;
    font-size: 20px;
`

const ShareText = styled.Text`
    color: #0095F6;
    font-weight: 600;
    font-size: 18px;
`

const Box = styled.View``

const TouchableOpacity = styled.TouchableOpacity`

`;