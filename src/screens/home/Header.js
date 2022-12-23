import React from 'react'
import styled, { ThemeProvider } from "styled-components/native";
import { useDispatch, useSelector } from "react-redux"; // userDispatch = 데이터 변경시 사용 // useSelector = 데이터 가져올때 사용
import { darkTheme, lightTheme } from "../../../Theme";
import themeSlicer from "../../slicers/themeSlicer";
import Ionicons from "@expo/vector-icons/Ionicons";
import HeaderLogo from '../../../assets/header-logo.png'
import ICONS from '../../constants/icons'
const Header = ({ }) => {
    const theme = useSelector((state) => state.themeSlicer.theme);
    const dispatch = useDispatch();
    return (
        <Container>
            <HeaderBox>
                <TouchableOpacity>
                    <Image source={HeaderLogo} />
                </TouchableOpacity>
                <HeaderIconBox>
                    <TouchableOpacity>
                        <Ionicons name="add-circle-outline" size={28} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <UnderDot />
                        <Ionicons name="heart-outline" size={28} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <UnderRedIcon>
                            <UnderRedIconText>11</UnderRedIconText>
                        </UnderRedIcon>
                        <Ionicons name="paper-plane-outline" size={28} color="white" />
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
    margin-right: 10px;
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

const View = styled.View`
`;
