import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import LottieView from 'lottie-react-native'
import { CenterFocusStrong } from '@styled-icons/material'

const Loader = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject , styles.container]}>
      <LottieView source={require('../../../assets/loading.json')} autoPlay loop style={{width: '50%'}}>
      </LottieView>
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
    container : {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'reg(0,0,0,0.9)',
        zIndex: 100
    }
})