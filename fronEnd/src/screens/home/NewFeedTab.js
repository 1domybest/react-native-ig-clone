import React from 'react'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import styled from "styled-components/native";
import Header from './newFeed/Header'
import NewFeedForm from './newFeed/NewFeedForm'
const NewFeedTab = ({navigation}) => {
  return (
    <Container>
      <Header navigation={navigation}/>
      <NewFeedForm/>
    </Container>
  )
}

export default NewFeedTab


const Container = styled.View`
    background-color: ${props => props.theme.backgroundColor};
    flex: 1;
`
const Button = styled.Button``