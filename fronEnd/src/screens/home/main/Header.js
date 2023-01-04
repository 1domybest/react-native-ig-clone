import React from 'react'
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux"; // userDispatch = 데이터 변경시 사용 // useSelector = 데이터 가져올때 사용
import Ionicons from "react-native-vector-icons/Ionicons";
import LightHeaderLogo from '../../../../assets/header-logo.png'
import BlackHeaderLogo from '../../../../assets/black-header-logo.png'
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import {ROUTES} from '../../../constants/routes'
const Header = ({navigation}) => {
    const theme = useSelector((state) => state.themeSlicer.theme);
    const dispatch = useDispatch();
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);
  
    const closeMenu = () => {
        setVisible(false);
        navigation.push(ROUTES.NEWFEEDTAB)
    }
    return (
        <Container>
            <HeaderBox>
                <TouchableOpacity>
                    {
                        theme.mode === 'dark' ? <Image source={LightHeaderLogo} /> : <Image source={BlackHeaderLogo} />
                    }
                </TouchableOpacity>
                <HeaderIconBox>
                    <Menu
                        visible={visible}
                        anchor={<TouchableOpacity onPress={openMenu}>
                        <Ionicons name="add-circle-outline" size={28} color={theme.mode === 'dark' ? 'white' : 'black'} />
                    </TouchableOpacity>}>
                        <Menu.Item icon="information" disabled={!visible} onPress={() => {
                            var cnt = 0
                            if (visible && cnt === 0) {
                                cnt++
                                closeMenu();
                            }
                        }} title="새 게시물"/>
                    </Menu>
                   
                    <TouchableOpacity>
                        <UnderDot />
                        <Ionicons name="heart-outline" size={28} color={theme.mode === 'dark' ? 'white' : 'black'}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <UnderRedIcon>
                            <UnderRedIconText>11</UnderRedIconText>
                        </UnderRedIcon>
                        <Ionicons name="paper-plane-outline" size={28} color={theme.mode === 'dark' ? 'white' : 'black'} />
                    </TouchableOpacity>
                </HeaderIconBox>
            </HeaderBox>
        </Container>
    )
}


export default Header

const Text = styled.Text`
  color: ${props => props.theme.TextColor};
`;

const Image = styled.Image`
  width: 175px;
  height: 51px;
`;

const TouchableOpacity = styled.TouchableOpacity`
    margin-left: 15px;
`;

const Container = styled.View`
    padding-right: 10px;
    background-color: ${props => props.theme.backgroundColor};
`;

const UnderDot = styled.View`
    background-color: red;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50px;
    width: 10px;
    height: 10px;
    z-index: 100;
`;

const UnderRedIcon = styled.View`
    background-color: red;
    border-radius: 50px;
    position: absolute;
    align-items: center;
    right: 0;
    bottom: 20px;
    padding: 5% 20%;
    z-index: 100;
`;

const UnderRedIconText = styled.Text`
    color: white;
    font-weight: 600;
`;

const HeaderBox = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const HeaderIconBox = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

