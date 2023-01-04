import React from 'react'
import Header from '../home/main/Header'
import FeedList from '../home/main/FeedList';
import StoryList from '../home/main/StoryList';
import styled from "styled-components/native";
const MainTab = ({navigation}) => {
  return (
    <>
    <Header navigation={navigation}/>
      <HomeScreenScrollView>
        <StoryList></StoryList>
        <FeedList></FeedList>
      </HomeScreenScrollView>
    </>
  )
}

const HomeScreenScrollView = styled.ScrollView`
  background-color: ${props => props.theme.backgroundColor};
`;

export default MainTab