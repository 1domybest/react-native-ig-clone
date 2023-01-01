import React, { useEffect } from 'react'
import { StyleSheet, useColorScheme } from 'react-native'
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import BottomNavigation from "./BottomNavigation";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import ForgotPassword from "../screens/auth/ForgotPassword";
import { useSelector, useDispatch } from 'react-redux';
import themeSlicer from '../slicers/themeSlicer'
import {lightTheme, darkTheme} from '../../Theme'
import { ROUTES } from '../constants/routes';
import styled,{ThemeProvider} from 'styled-components'
import * as $Util from '../constants/utils'
import userSlicer from '../slicers/userSlicer'
const Stack = createStackNavigator();

const screenOption = {
    headerShown: false,
}

const AuthNavigaition = () => {
    let initialRouteName = ROUTES.LOGIN

    const theme = useSelector((state) => state.themeSlicer.theme);
    const dispatch = useDispatch();
    const colorScheme = useColorScheme();
      
    dispatch(themeSlicer.actions.changeTheme(colorScheme === 'dark' ? darkTheme : lightTheme))

    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={initialRouteName} screenOptions={screenOption}>
                    <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen}/>
                    <Stack.Screen name={ROUTES.REGISTER} component={RegisterScreen}/>
                    <Stack.Screen name={ROUTES.FORGOTPASSWORD} component={ForgotPassword}/>
                    <Stack.Screen name={ROUTES.INDEX} component={BottomNavigation}/>
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    )
}

export default AuthNavigaition

const styles = StyleSheet.create({})
