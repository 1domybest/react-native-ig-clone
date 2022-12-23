import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {ROUTES} from '../../constants/routes'
const LoginScreen = (props) => {
  const {navigation} = props; // 네비게이션
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button onPress={() => navigation.navigate(ROUTES.REGISTER)} title="회원가입"/>
      <Button onPress={() => navigation.navigate(ROUTES.FORGOTPASSWORD)} title="비밀번호찾기"/>
      <Button onPress={() => navigation.navigate(ROUTES.INDEX)} title="인덱스 페이지"/>
      <Text>LoginScreen</Text>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})