import { View, Text } from 'react-native'
import React from 'react'
import styled from "styled-components/native";
import Story from './Story'
const StoryList = () => {
    let list = [1,2,3,4,5,6,7,8];
    return (
        <StoryScrollView horizontal showsHorizontalScrollIndicator={false}>
            {list.map((item, index) => {
                return <Story key={index}/>
            })}
        </StoryScrollView>
    )
}

const StoryScrollView = styled.ScrollView`
    margin: 10px 10px;
`;

export default StoryList