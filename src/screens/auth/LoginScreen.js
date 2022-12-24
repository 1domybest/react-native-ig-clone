import { StyleSheet } from 'react-native'
import React from 'react'
import { ROUTES } from '../../constants/routes'
import styled, {css} from 'styled-components/native';
import { Divider } from 'react-native-elements';
import * as yup from 'yup'
import { Formik } from 'formik'
const LoginScreen = (props) => {
  const { navigation } = props; // 네비게이션
  return (
    <SafeAreaView>
      <Container>
        <ImageBox>
          <Image source={require("../../../assets/whiteLogo.png")} />
        </ImageBox>
        <Formik
          initialValues={{ email: '', password: '' }}
          validateOnMount={true}
          onSubmit={values => {
            navigation.navigate(ROUTES.INDEX)
          }}
          validationSchema={loginValidationSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
            <>
              <TextInputBox>
                <TextInput 
                    placeholder="이메일을 입력해주세요" 
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    keyboardType="email-address"
                    value={values.email}
                    autoFocus={true}
                     />
                      <ValidationTextBox>
                        <ValidationText>
                          {
                            values.email.length > 0 ?
                            errors.email
                            :
                            ''
                          }
                          </ValidationText>
                     </ValidationTextBox>
                <TextInput 
                    autoCapitalize="none"
                    textContentType="password"
                    secureTextEntry={true}
                    placeholder="비밀번호를 입력해주세요" 
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    />
                    <ValidationTextBox>
                        <ValidationText>
                          {
                            values.password.length > 0 ?
                            errors.password
                            :
                            ''
                          }
                          </ValidationText>
                     </ValidationTextBox>
              </TextInputBox>
              <ForgetPasswordBox>
                <TouchableOpacity onPress={() => navigation.navigate(ROUTES.FORGOTPASSWORD)}>
                  <ForgetPasswordText>비밀번호를 잊으셨나요?</ForgetPasswordText>
                </TouchableOpacity>
              </ForgetPasswordBox>
              <LoginButtonBox>
                {
                  isValid?
                  <LoginButton onPress={handleSubmit}>
                  <LoginButtonText>
                    로그인
                  </LoginButtonText>
                </LoginButton>
                :
                  <InActiveLoginButton>
                    <LoginButtonText>
                      로그인
                    </LoginButtonText>
                  </InActiveLoginButton>
                }
              </LoginButtonBox>
            </>
          )}
        </Formik>
      </Container>
      <JoinBox>
        <JoinBoxNormalText>
          계정이 없으신가요?
        </JoinBoxNormalText>
        <TouchableOpacity onPress={() => navigation.navigate(ROUTES.REGISTER)}>
          <JoinBoxText>
            가입하기
          </JoinBoxText>
        </TouchableOpacity>
      </JoinBox>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({})

const loginValidationSchema = yup.object().shape({
  email: yup.string().required("이메일을 입력해주세요").email("올바른 이메일을 작성해주세요"),
  password: yup.string().min(8, ({ min }) => "비밀번호는 최소 " + min + " 자리 이상입니다.").required("비밀번호를 입력해주세요")
})


export default LoginScreen

const ValidationTextBox = styled.View`
  margin-top: 8px;
  margin-bottom: 8px;
`

const ValidationText = styled.Text`
  color: red
`

const Container = styled.View`
  width: 100%;
  padding: 0px 20px;
`
const LoginButtonBox = styled.View`
  margin-top: 20px;
`

const JoinBox = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 40px;
  left: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const JoinBoxNormalText = styled.Text`
  color: gray;
  font-size: 12px;
  margin-right: 10px;
`

const JoinBoxText = styled.Text`
  color: #0095F6;
`

const InActiveLoginButton = styled.View`
  background-color: #014068d1;
  height: 50px;
  border-radius: 5px;
  font-size: 12px;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: #0095F6;
  height: 50px;
  border-radius: 5px;
  font-size: 12px;
`;


const LoginButtonText = styled.Text`
  color: white;
  text-align: center;
  margin: auto;
  font-weight: 600;
`

const ForgetPasswordBox = styled.View`
  margin-top: 15px;
  align-items: flex-end;
`

const ForgetPasswordText = styled.Text`
  color: #0095F6;
  font-size: 12px;
`

const SafeAreaView = styled.SafeAreaView`
  justify-content: center;
  flex: 1;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
`

const TextInputBox = styled.View`
  margin-top: 20px;
  width: 100%;
`

const TextInput = styled.TextInput`
  padding: 0px 10px;
  color: ${props => props.theme.TextColor};
  background-color: #282828a6;
  border: 1px solid #7a7a7a5c;
  width: 100%;
  height: 40px;
  border-radius: 5px;
`

const Image = styled.Image`
  width: 200px;
  height: 55px;
`

const ImageBox = styled.View`
  width: 100%;
  align-items: center;
`


const View = styled.View`
`

const Text = styled.Text`
  color: ${props => props.theme.TextColor}; 
`

const TouchableOpacity = styled.TouchableOpacity`
`