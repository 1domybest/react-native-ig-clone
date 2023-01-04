import React, { useEffect } from 'react'
import styled from 'styled-components'
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux"; // userDispatch = 데이터 변경시 사용 // useSelector = 데이터 가져올때 사용
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const NewFeedForm = (props) => {
    const dispatch = useDispatch();
    console.log(props)
    const [preView, setPreView] = React.useState(null);
    const createFormData = (photo) => {

        let data = new FormData()
        if (photo.uri) {
            data.append('image', {uri: photo.uri, name: 'image.jpg', type: 'image/jpg'})
        }
        setPreView(photo.uri)
        return data;
      };
    
    const openPicture = () => {
        launchImageLibrary({ noData: true }, (response) => {
            if (response) {
                props.setFile(createFormData(response.assets[0]))
            }
          });
    }

  const theme = useSelector((state) => state.themeSlicer.theme);
  
  return (
    <Container>
    <Box>
    <TouchableOpacity onPress={openPicture}>
        {
            preView == null ?
            <ImageBox>
                <ImageButton>
                    <Ionicons name="image" size={28} color={theme.mode === 'dark' ? 'white' : 'black'} />
                </ImageButton>
            </ImageBox>
        :
            <Image source={{uri : preView}}/>
        }
      </TouchableOpacity>
      <TextBox>
        <TextInput
            placeholder="내용을 입력해주세요"
            onChangeText={(value) => props.setContent(value)}
            autoFocus={true}
        />
        
      </TextBox>
    </Box>
    <ValidationBox>
    <ValidationTextBox>
        <ValidationText>
            {
              props.content.length === 0 ? '내용을 입력해주세요'
              :
              props.content.length > 1 && props.content.length > 50 ? '최대 50글자까지 입력가능합니다.' : '' 
            }
        </ValidationText>
        </ValidationTextBox>
    </ValidationBox>
</Container>
  )
}
const ValidationBox = styled.View`
  flex-direction: row;
  padding: 0px 15px;
`  

const Box = styled.View`
    flex-direction: row;
    padding: 10px 15px;
`

const Container = styled.View`
    background-color: ${props => props.theme.backgroundColor};
   
`


const ImageBox = styled.View`
    height: 100px;
    background-color: ${props => props.theme.LigtherBackGroundColor};
    justify-content: center;
`

const ImageButton = styled.View`
    align-items: center;
`

const Image = styled.Image`
    height: 100px;
`

const TextBox = styled.View`
    width: 100%;
    margin-left: 20px;
    padding: 3%;
    background-color: ${props => props.theme.LigtherBackGroundColor};
`

const TouchableOpacity = styled.TouchableOpacity`
    width: 30%;
`;


const TextInput = styled.TextInput`
color: ${props => props.theme.TextColor};
`

const ValidationTextBox = styled.View`
  margin-top: 8px;
  margin-bottom: 8px;
`

const ValidationText = styled.Text`
  color: red;
  font-size: 10px;
`


const Text = styled.Text``
export default NewFeedForm