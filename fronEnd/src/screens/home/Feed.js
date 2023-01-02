import React from 'react'
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux"; // userDispatch = 데이터 변경시 사용 // useSelector = 데이터 가져올때 사용
import { darkTheme, lightTheme } from "../../../Theme";
import themeSlicer from "../../slicers/themeSlicer";
import Ionicons from "react-native-vector-icons/Ionicons";
import HeaderLogo from '../../../assets/header-logo.png'
import { ICONS } from '../../constants/icons'
const FeedList = ({ index }) => {
    const theme = useSelector((state) => state.themeSlicer.theme);
    const dispatch = useDispatch();
    return (
        <Container key={index}>
            <FeedHeader key={index} />
            <FeedBody key={index} />
            <FeedBottom  key={index}/>
        </Container>
    )
}


function iconMode() {
    let color;
    const theme = useSelector((state) => state.themeSlicer.theme);
    return theme.mode === 'dark' ? 'white' : 'black'
}

const FeedHeader = () => {
    return (
        <HeaderBox>
            <HeaderProfileBox>
                <TouchableOpacity>
                    <Avatar source={{ uri: "https://i.ibb.co/ZhB1QPv/image.jpg" }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>온석태</Text>
                </TouchableOpacity>
            </HeaderProfileBox>
            <View>
                <TouchableOpacity>
                    <Ionicons name="ellipsis-horizontal-outline" size={20} color={iconMode()}></Ionicons>
                </TouchableOpacity>
            </View>
        </HeaderBox>
    )
}


const FeedBody = () => {
    return (
        <View>
            <View>
                <Image source={{ uri: "https://editsay.s3.ap-northeast-2.amazonaws.com/images/%EB%8C%80%EC%A7%80+1_1-100.jpg" }} />
            </View>
            <FeedBodyBottom>
                <FeedBodyBottomIconsFrontBox>
                    <FrontTouchableIcon name={ICONS.heartOutline} />
                    <FrontTouchableIcon name={ICONS.commentOutline} />
                    <FrontTouchableIcon name={ICONS.shareOutline} />
                </FeedBodyBottomIconsFrontBox>
                <View>
                    <TouchableIcon name={ICONS.horizontalThreeDots} />
                </View>
                <FeedBodyBottomIconsEndBox>
                    <TouchableIcon name={ICONS.saveOutline} />
                </FeedBodyBottomIconsEndBox>
            </FeedBodyBottom>
        </View>
    )
}


const FeedBottom = () => {
    return (
        <FeedBottomBox>
            <FeedLikes />
            <FeedCaption />
            <FeedComments />
        </FeedBottomBox>
    )
}

const FeedLikes = () => {
    return (
        <View>
            <LikesText>좋아요 353,165</LikesText>
        </View>
    )
}

const FeedCaption = () => {
    return (
        <CaptionBox>
            <CaptionAuthorText>온석태</CaptionAuthorText>
            <CaptionText>모두가 바라왔던 가장 가변운 요즘제 출시! 다운로드 없이 언제 어디서나 음악을 즐겨보세요</CaptionText>
        </CaptionBox>
    )
}

const FeedComments = () => {
    return (
        <CommentsBox>
            <TouchableOpacity>
                <CommentLengthText>댓글 3개 모두보기</CommentLengthText>
            </TouchableOpacity>
            <CommentBox>
                <TouchableOpacity>
                    <CommentAuthorText>온석태</CommentAuthorText>
                </TouchableOpacity>
                <CommentText>너무 멋진 피드이네요!</CommentText>
            </CommentBox>
        </CommentsBox>
    )
}

const FrontTouchableIcon = ({ name }) => {
    return (
        <FrontTouchableOpacity>
            <Ionicons name={name} size={25} color={iconMode()}></Ionicons>
        </FrontTouchableOpacity>
    )
}


const TouchableIcon = ({ name }) => {
    return (
        <TouchableOpacity>
            <Ionicons name={name} size={25} color={iconMode()}></Ionicons>
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

const CommentsBox = styled.View`
    margin-top: 10px;
`;

const CommentLengthText = styled.Text`
    color: ${props => props.theme.LigtherTextColor};
`;

const CommentAuthorText = styled.Text`
    color: ${props => props.theme.TextColor};
    font-weight: 600;
    margin-right: 8px;
`;

const CommentText = styled.Text`
    color: ${props => props.theme.TextColor};
    font-weight: 300;
`;

const CommentBox = styled.View`
    flex-direction: row;
    margin-top: 10px;
`;

const CaptionBox = styled.View`
    flex-direction: row;
    margin-top: 10px;
`;

const CaptionAuthorText = styled.Text`
    color: ${props => props.theme.TextColor};
    font-weight: 600;
    margin-right: 10px;
`;

const CaptionText = styled.Text`
    color: ${props => props.theme.TextColor};
    font-weight: 300;
`;

const FeedBottomBox = styled.View`
    margin: 0px 10px;
`;

const LikesText = styled.Text`
  color: ${props => props.theme.TextColor};
  font-size: 13px;
`;

const Text = styled.Text`
  color: ${props => props.theme.TextColor};
`;

const Image = styled.Image`
    width: 100%;
    height: 500px;
`;

const FrontTouchableOpacity = styled.TouchableOpacity`
  margin-right: 10px;
`;

const TouchableOpacity = styled.TouchableOpacity`
`;

const FeedBodyBottomIconsFrontBox = styled.View`
    flex-direction: row;
    width: 40%;
`;

const FeedBodyBottomIconsEndBox = styled.View`
    align-items: flex-end;
    width: 40%;
`;

const FeedBodyBottom = styled.View`
    margin: 20px 10px;
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
    margin-bottom: 50px;
`;