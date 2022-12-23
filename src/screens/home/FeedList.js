import React from 'react'
import styled, { ThemeProvider } from "styled-components/native";
import { useDispatch, useSelector } from "react-redux"; // userDispatch = 데이터 변경시 사용 // useSelector = 데이터 가져올때 사용
import { darkTheme, lightTheme } from "../../../Theme";
import themeSlicer from "../../slicers/themeSlicer";
import Ionicons from "@expo/vector-icons/Ionicons";
import HeaderLogo from '../../../assets/header-logo.png'
import ICONS from '../../constants/icons'
const FeedList = ({ post }) => {
    const theme = useSelector((state) => state.themeSlicer.theme);
    const dispatch = useDispatch();
    return (
        <Container>
            <FeedHeader />
            <FeedBody />
        </Container>
    )
}

const FeedHeader = () => {
    return (
        <HeaderBox>
            <HeaderProfileBox>
                <TouchableOpacity>
                    <Avatar source={{uri: "https://i.ibb.co/ZhB1QPv/image.jpg"}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>온석태</Text>
                </TouchableOpacity>
            </HeaderProfileBox>
            <View>
                <TouchableOpacity>
                    <Ionicons name="ellipsis-horizontal-outline" size={20} color="white"></Ionicons>
                </TouchableOpacity>
            </View>
        </HeaderBox>
    )
}


const FeedBody = () => {
    return (
        <View>
            <View>
            <Image source={{uri: "https://editsay.s3.ap-northeast-2.amazonaws.com/images/%EB%8C%80%EC%A7%80+1_1-100.jpg"}}/>
            </View>
            <FeedBodyBottom>
                <FeedBodyBottomIconsBox>
                    <TouchableOpacity>
                        <Ionicons name="ellipsis-horizontal-outline" size={20} color="white"></Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="ellipsis-horizontal-outline" size={20} color="white"></Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="ellipsis-horizontal-outline" size={20} color="white"></Ionicons>
                    </TouchableOpacity>
                </FeedBodyBottomIconsBox>
                <View></View>
                <View></View>
            </FeedBodyBottom>
            
        </View>
    )
}

const TouchableIcon  = ({name}) => {
    return (
        <TouchableOpacity>
            <Ionicons name={name} size={20} color="white"></Ionicons>
        </TouchableOpacity>
    )
}


export default FeedList

const Avatar = styled.Image`
    width: 32px;
    height: 32px;
    border-radius: 50px;
    border-width: 2px;
    border-color: ${props => props.theme.TextColor};
    margin-right: 10px;
`;


const Text = styled.Text`
  color: ${props => props.theme.TextColor};
`;

const Image = styled.Image`
    width: 100%;
    height: 500px;
`;

const TouchableOpacity = styled.TouchableOpacity`
  
`;

const FeedBodyBottomIconsBox = styled.View`
    flex-direction: row;
`;
const FeedBodyBottom = styled.View`
    margin: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const HeaderBox = styled.View`
    margin: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const HeaderProfileBox = styled.View`
    flex-direction: row;
    align-items: center;
`;

const View = styled.View`

`;

const ScrollView = styled.ScrollView`

`;

const Container = styled.View`

`;