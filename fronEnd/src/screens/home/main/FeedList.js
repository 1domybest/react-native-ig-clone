import React from 'react'
import Feed from './Feed'
import styled from "styled-components/native";
const FeedList = () => {
    let list = [1,2,3,4,5,6,7,8];
    return (
        <FeedScrollView>
            {list.map((item, index) => {
                return <Feed key={index}/>
            })}
        </FeedScrollView>
    )
}

const FeedScrollView = styled.ScrollView`
    background-color: ${props => props.theme.backgroundColor};
`;

export default FeedList