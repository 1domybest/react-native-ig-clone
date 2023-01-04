import React from 'react'
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux"; // userDispatch = 데이터 변경시 사용 // useSelector = 데이터 가져올때 사용

import MainTab from './home/MainTab'
import NewFeedTab from './home/NewFeedTab'
import {ROUTES} from '../constants/routes'
import { Provider as PaperProvider } from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack'

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
            <Stack.Navigator initialRouteName={ROUTES.MAINTAB} screenOptions={screenOption}>
              <Stack.Screen name={ROUTES.MAINTAB}  component={MainTab} ></Stack.Screen>
              <Stack.Screen name={ROUTES.NEWFEEDTAB}  component={NewFeedTab} ></Stack.Screen>
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