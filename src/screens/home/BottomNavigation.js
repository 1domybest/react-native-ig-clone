import React, { useState } from 'react'
import styled from 'styled-components/native'
import {Divider} from "react-native-elements";
import Ionicons from "@expo/vector-icons/Ionicons";
import {BOTTOM_ICONS} from '../../data/icons'
const BottomNavigation = () => {
    const [activeTab, setActiveTab] = useState('Home');
  return (
    <BottomIconContainer>
        <Divider width={1} orientation={'vertical'}></Divider>
        <View>
        {BOTTOM_ICONS.map((icon, index) => (
                    <Icon iconName={activeTab === icon.name ? icon.activeIcon : icon.inActiveIcon} name={icon.name} key={index}/>
                ))}
                <MyPage/>
        </View>
    </BottomIconContainer>
  )
}

const Icon = ({iconName, name}) => (
    <TouchableOpacity onPress={() => setActiveTab(name)}>
        <Ionicons style={{marginRight: 10}} name={iconName} size={30} color="white"></Ionicons>
    </TouchableOpacity>
)


const MyPage = ({iconName, name}) => (
    <TouchableOpacity onPress={() => setActiveTab('Profile')}>
        <Avatar source={{uri: 'https://i.ibb.co/ZhB1QPv/image.jpg'}}/>
    </TouchableOpacity>
)

const TouchableOpacity = styled.TouchableOpacity`

`;

const Avatar = styled.Image`
    width: 32;
    height: 32;
    border-radius: 50;
    border-width: 2;
    border-color: white;
`;

const BottomIconContainer = styled.View`
    width: 100%;
    z-index: 999;
    background-color: ${props => props.theme.backgrounColor};
    position: absolute;
    bottom: 3%;
`;

const View = styled.View`
    justify-content: space-around;
    flex-direction: row;
    padding: 15px;
    align-items: center;
`;

const Text = styled.Text`
  color: ${props => props.theme.Textcolor};
  font-size: 24px;
  font-weight: 600;
`;


export default BottomNavigation

