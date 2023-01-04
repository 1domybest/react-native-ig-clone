import React from 'react'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { InstagramLikePicker } from 'react-native-instagram-like-picker';
import styled from "styled-components/native";

const onSelectImage = (data) => {
    console.log('onSelectImage =>', data);
}

const onCropped = (data) => {
    console.log('onCropped =>', data);
}

const onClose = () => {
    console.log('onClose');
}

const NewFeedTab = () => {

    
//   launchImageLibrary({}, function (res) {
//     console.log(res);
//   })
  return (
    <Container>
       <InstagramLikePicker
                    onClose={()=>this.onClose()}
                    onCropped={(croppedUri) => this.onCropped(croppedUri)}
                    onSelectImage={(result) => this.onSelectImage(result)}
                    headerTitle="Last Post"
                />
    </Container>
  )
}

export default NewFeedTab


const Container = styled.View`
    flex: 1;
    background-color: #000000;
`
const Button = styled.Button``