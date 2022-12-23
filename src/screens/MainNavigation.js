import React from 'react'
import { StyleSheet } from 'react-native'
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import {useColorScheme} from 'react-native';
import { useDispatch, useSelector } from "react-redux"; // userDispatch = 데이터 변경시 사용 // useSelector = 데이터 가져올때 사용
import { ThemeProvider } from "styled-components/native";
const Stack = createStackNavigator();
import { darkTheme, lightTheme } from "../../Theme";
import themeSlicer from "../slicers/themeSlicer";

const screenOption = {
    headerShown: false
}

const MainNavigation = () => {
    const theme = useSelector((state) => state.themeSlicer.theme);
    const dispatch = useDispatch();
    const colorScheme = useColorScheme();
    
    dispatch(themeSlicer.actions.changeTheme(colorScheme === 'dark' ? darkTheme : lightTheme))

    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={"HomeScreen"} screenOptions={screenOption}>
                    <Stack.Screen name={"HomeScreen"} component={HomeScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    )
}

export default MainNavigation

const styles = StyleSheet.create({})
