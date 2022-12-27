import React from 'react'
import styled, { ThemeProvider } from "styled-components/native";
import { useDispatch, useSelector } from "react-redux"; // userDispatch = 데이터 변경시 사용 // useSelector = 데이터 가져올때 사용
import { darkTheme, lightTheme } from "../../Theme";
import themeSlicer from "../slicers/themeSlicer";

const SearchScreen = ({ }) => {
  const theme = useSelector((state) => state.themeSlicer.theme);
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <Container>
        <Text>검색</Text>
      </Container>
    </SafeAreaView>
  )
}


export default SearchScreen

const Text = styled.Text`
  color: ${props => props.theme.TextColor};
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const SafeAreaView = styled.SafeAreaView`
    flex: 1;
    background-color: ${props => props.theme.backgroundColor};
`;