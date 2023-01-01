import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styled from "styled-components/native";

const header = () => {
  return (
    <ProfileContainer>
      <ProfileBox>
          <TouchableOpacity>
            <Avatar source={{uri: 'https://i.ibb.co/ZhB1QPv/image.jpg'}}/>
          </TouchableOpacity>
          <ProfileInfoContainer>
            <ProfileInfoBox>
              <ViewContent>11</ViewContent>
              <Content>게시물</Content>
            </ProfileInfoBox>
            <ProfileInfoBox>
              <ViewContent>11</ViewContent>
                <Content>게시물</Content>
            </ProfileInfoBox>
            <ProfileInfoBox>
              <ViewContent>11</ViewContent>
                <Content>게시물</Content>
            </ProfileInfoBox>
          </ProfileInfoContainer>
        </ProfileBox>
      <UserName>온석태</UserName>
      <ProfileEditingContainer>
        <TouchableOpacity>
          <ProfileEditingButton>
            <ProfileEditingButtonText>
                프로필 편집
            </ProfileEditingButtonText>
          </ProfileEditingButton>
        </TouchableOpacity>
      </ProfileEditingContainer>
    </ProfileContainer>
  )
}

export default header

const ProfileContainer = styled.View`
  padding: 10px;
`

const ProfileBox = styled.View`
  padding: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const TouchableOpacity = styled.TouchableOpacity`
   
`;

const ProfileInfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const ProfileInfoBox = styled.View`
  align-content: center;
  align-items: center;
  margin-left: 50px;
`

const ViewContent = styled.Text`
  color: ${props => props.theme.TextColor};
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 18px;
`

const Content = styled.Text`
  color: ${props => props.theme.TextColor};
`

const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border-width: 2px;
    border-color: white;
`;

const UserName = styled.Text`
  color: ${props => props.theme.TextColor};
  font-size: 18px;
  font-weight: 600;
`

const ProfileEditingContainer = styled.View`
  margin-top: 15px;
`

const ProfileEditingButton = styled.View`
  background-color: ${props => props.theme.LigtherColor};
  border-radius: 5px;
  padding: 8px 10px;
  align-items: center;
`

const ProfileEditingButtonText = styled.Text`
  color: ${props => props.theme.TextColor};
  font-weight: bold;
`
