import React from 'react'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import styled from "styled-components/native";
import Header from './newFeed/Header'
import NewFeedForm from './newFeed/NewFeedForm'
const NewFeedTab = ({navigation}) => {
  const [file, setFile] = React.useState(null);
  const [content, setContent] = React.useState('');
  return (
    
    <Container>
      <Header navigation={navigation} file={file} content={content} />
      <NewFeedForm file={file} content={content} setContent={setContent} setFile={setFile}/>
    </Container>
  )
}

export default NewFeedTab


const Container = styled.View`
    background-color: ${props => props.theme.backgroundColor};
    flex: 1;
`
const Button = styled.Button``