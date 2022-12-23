import React from 'react'
import styled, { ThemeProvider } from "styled-components/native";
import { useDispatch, useSelector } from "react-redux"; // userDispatch = 데이터 변경시 사용 // useSelector = 데이터 가져올때 사용
import { darkTheme, lightTheme } from "../../Theme";
import themeSlicer from "../slicers/themeSlicer";
import { View } from 'react-native';
import BottomNavigation from './home/BottomNavigation';

const HomeScreen = ({}) => {
  const theme = useSelector((state) => state.themeSlicer.theme);
  const dispatch = useDispatch();
  return (
      <SafeAreaView>
        <BottomNavigation/>
      </SafeAreaView>
  )
}


export default HomeScreen

const SafeAreaView = styled.SafeAreaView`
    flex: 1;
    background-color: ${props => props.theme.backgroundColor};
`;

