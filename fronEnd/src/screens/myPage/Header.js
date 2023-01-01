import React, { useCallback, useMemo, useRef } from 'react';
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux"; // userDispatch = 데이터 변경시 사용 // useSelector = 데이터 가져올때 사용
import Ionicons from "react-native-vector-icons/Ionicons";
import {ICONS} from '../../constants/icons'
import BottomSheet from '@gorhom/bottom-sheet';
import bottomSheetSlicer from '../../slicers/bottomSheetSlicer'
const Header = ({ }) => {
    const theme = useSelector((state) => state.themeSlicer.theme);
    const dispatch = useDispatch();

    return (
        <Container>
            <HeaderBox>
                <TouchableOpacity>
                    <UserName>oooo_nn</UserName>
                </TouchableOpacity>
                <HeaderIconBox>
                    <TouchableOpacity>
                        <Ionicons name={ICONS.addCircleOutline} size={28} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => dispatch(bottomSheetSlicer.actions.updateSlicer({name : 'myPage', active: true}))}>
                        <Ionicons name={ICONS.menuOutline} size={28} color="white" />
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

const UserName = styled.Text`
    color: ${props => props.theme.TextColor};
    font-size: 26px;
    font-weight: bold;
`;

const TouchableOpacity = styled.TouchableOpacity`
    margin-left: 15px;
`;

const Container = styled.View`
    margin-right: 10px;
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
    flex: 1;
    padding: 24px;
    background-color: grey;
`;


const Button = styled.Button``
