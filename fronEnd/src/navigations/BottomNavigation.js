import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import React, { useCallback, useMemo, useRef } from 'react';

import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import {ROUTES} from '../constants/routes';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import MyPageScreen from '../screens/MyPageScreen';
import PlayScreen from '../screens/PlayScreen';
import SearchScreen from '../screens/SearchScreen';
import styled from 'styled-components/native'
import Ionicons from "react-native-vector-icons/Ionicons";
import {BOTTOM_ICONS} from '../constants/icons';
import { useSelector, useDispatch } from 'react-redux';
import bottomSheetSlicer from '../slicers/bottomSheetSlicer'
import MyPageBottomSheet from '../screens/bottomSheet/MyPageBottomSheet'
const Tab = createBottomTabNavigator();

const BottomNavigation = (props) => {


  const { navigation } = props; // 네비게이션

  const dispatch = useDispatch();

  const theme = useSelector((state) => state.themeSlicer.theme);

   // ref
   const bottomSheetModalRef = useRef(null);

   // variables
   const snapPoints = useMemo(() => ['25%', '50%'], []);
 
   // callbacks
   const handlePresentModalPress = useCallback(() => {
      bottomSheetModalRef.current?.present();
   }, []);

   const handleSheetChanges = useCallback((index) => {
     console.log('handleSheetChanges', index);
     if (index === -1) {
      dispatch(bottomSheetSlicer.actions.updateSlicer({name : 'myPage', active: false}))
     }
   }, []);

  const bottomSheet = useSelector((state) => state.bottomSheetSlicer);

  if (bottomSheet.active) {
    switch(bottomSheet.name) {
      case 'myPage' :
        handlePresentModalPress();
        break;
    }
  }
  

  return ( 
    <>
    <Tab.Navigator initialRouteName={ROUTES.HOME} 
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        borderTopWidth: 1,
        borderTopColor: '#61616236',
        height: 90,    
        padding: 10,
        backgroundColor: theme.backgroundColor,
    },
      tabBarIcon: ({color, size, focused}) => {
        let iconName;
        if (route.name === ROUTES.HOME) {
          iconName = focused ? BOTTOM_ICONS.HOME.activeIcon : BOTTOM_ICONS.HOME.inActiveIcon
        } else if (route.name === ROUTES.SEARCH) {
          iconName = focused ? BOTTOM_ICONS.SEARCH.activeIcon : BOTTOM_ICONS.SEARCH.inActiveIcon
        } else if (route.name === ROUTES.PLAY) {
          iconName = focused ? BOTTOM_ICONS.PLAY.activeIcon : BOTTOM_ICONS.PLAY.inActiveIcon
        } else if (route.name === ROUTES.CART) {
          iconName = focused ? BOTTOM_ICONS.CART.activeIcon : BOTTOM_ICONS.CART.inActiveIcon
        } else if (route.name === ROUTES.MYPAGE) {
          return <Avatar source={{uri: 'https://i.ibb.co/ZhB1QPv/image.jpg'}}/>
        }

        return <Ionicons name={iconName} size={28} color={theme.TextColor}/>
      }
    })}>
      <Tab.Screen name={ROUTES.HOME} component={HomeScreen} ></Tab.Screen>
      <Tab.Screen name={ROUTES.SEARCH} component={SearchScreen}></Tab.Screen>
      <Tab.Screen name={ROUTES.PLAY} component={PlayScreen}></Tab.Screen>
      <Tab.Screen name={ROUTES.CART} component={CartScreen}></Tab.Screen>
      <Tab.Screen name={ROUTES.MYPAGE} component={MyPageScreen}></Tab.Screen>
    </Tab.Navigator>
    <BottomSheetModalProvider>
      <View>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View>
            <MyPageBottomSheet navigation={navigation}/>
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
    </>
  )
}

const Avatar = styled.Image`
    width: 32px;
    height: 32px;
    border-radius: 50px;
    border-width: 2px;
    border-color: white;
`;


const View = styled.View``

const Text = styled.Text``

const Button = styled.Button``

export default BottomNavigation