import React from 'react'
import styled from "styled-components/native";

const Story = ({ index }) => {
    return (
        <TouchableOpacity index={index}>
            <Avatar source={{ uri: "https://i.ibb.co/ZhB1QPv/image.jpg" }} />
            <Text>온석태</Text>
        </TouchableOpacity>
    )
}

const TouchableOpacity = styled.TouchableOpacity`
    margin-right: 15px;
    align-items: center;
`;

const Avatar = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 50px;
    border-width: 2px;
    border-color: red;
`;

const Text = styled.Text`
  color: ${props => props.theme.TextColor};
  margin-top: 5px;
  font-size: 13px;
`;

const View = styled.View`

`;
export default Story