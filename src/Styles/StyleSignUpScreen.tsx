import styled from "styled-components/native";

export const Background = styled.View`
    flex: 1;
    background-color: #F0F4FF;
`

export const Container = styled.KeyboardAvoidingView`
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`;

export const Logo = styled.Image`
    margin-bottom: 25px;
`;

export const AreaInput = styled.View`
    flex-direction: row;
`;

export const Input = styled.TextInput`
    background-color: #FFF;
    width: 327px;
    height: 48px;
    font-size: 10px;
    color: #121212;
    margin-bottom: 15px;
    border-radius: 10px;
    border: 1px solid #000;
    padding: 0 10px; 
    align-items: center; 
    justify-content: center; 
    text-align: center; 
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 325px;
    height: 48px;
    border-radius: 8px;
    background-color: #418b64;
    margin-top: 10px;
    align-items: center;
`

export const SubmitText = styled.Text`
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 20px;
    color: #FFF;

`

export const Link = styled.TouchableOpacity`
    margin-top: 10px;
    margin-bottom: 10px;

`

export const LinkText = styled.Text`
    color: #171717;
`

