import React from 'react'
import styled, { ThemeProvider } from "styled-components/native";
import { useDispatch, useSelector } from "react-redux"; // userDispatch = 데이터 변경시 사용 // useSelector = 데이터 가져올때 사용
import { darkTheme, lightTheme } from "../../Theme";
import themeSlicer from "../slicers/themeSlicer";
import Header from '../screens/home/Header'
import FeedList from './home/FeedList';
import StoryList from './home/StoryList';
import { Provider as PaperProvider } from 'react-native-paper';

const HomeScreen = ({ }) => {
  const theme = useSelector((state) => state.themeSlicer.theme);
  const dispatch = useDispatch();

  
  return (
    <SafeAreaView>
      <PaperProvider>
        <Header />
        <HomeScreenScrollView>
          <StoryList></StoryList>
          <FeedList></FeedList>
        </HomeScreenScrollView>
      </PaperProvider>
    </SafeAreaView>
  )
}


export default HomeScreen

const HomeScreenScrollView = styled.ScrollView`
`;

const Text = styled.Text`
  color: ${props => props.theme.TextColor};
`;

const SafeAreaView = styled.SafeAreaView`
    flex: 1;
    background-color: ${props => props.theme.backgroundColor};
`;