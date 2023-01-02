import React from 'react'
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux"; // userDispatch = 데이터 변경시 사용 // useSelector = 데이터 가져올때 사용

import Header from '../screens/home/Header'
import FeedList from './home/FeedList';
import StoryList from './home/StoryList';
import { Provider as PaperProvider } from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack'

const MainScreen = ({navigation}) => {
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

const NewFeed = ({}) => {
  return (
    <View>
      <Text>뉴 포스트</Text>
    </View>
  )
}

const HomeScreen = ({ navigation }) => {
  const theme = useSelector((state) => state.themeSlicer.theme);
  const dispatch = useDispatch();
  const Stack = createStackNavigator();

  const screenOption = {
    headerShown: false,
}
  return (
    <SafeAreaView>
          <PaperProvider>
            <Stack.Navigator initialRouteName="main" screenOptions={screenOption}>
              <Stack.Screen name="main" component={MainScreen} ></Stack.Screen>
              <Stack.Screen name="newPost" component={NewFeed} ></Stack.Screen>
            </Stack.Navigator>
          </PaperProvider>
    </SafeAreaView>
  )
}


export default HomeScreen

const HomeScreenScrollView = styled.ScrollView`
  background-color: ${props => props.theme.backgroundColor};
`;

const Text = styled.Text`
  color: ${props => props.theme.TextColor};
`;

const View = styled.View`
   background-color: ${props => props.theme.backgroundColor};
`

const SafeAreaView = styled.SafeAreaView`
    flex: 1;
    background-color: ${props => props.theme.backgroundColor};
`;