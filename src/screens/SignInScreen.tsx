import React, { useState, useContext } from 'react';
import {ActivityIndicator} from 'react-native';
import { 
    Background, 
    Container, 
    AreaInput, 
    Input, 
    SubmitButton, 
    SubmitText, 
} from '../Styles/StyleSignUpScreen';

import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../routes/auth.routes';
import { AuthContext } from '../contexts/auth';

export default function SignInScreen() {
    const navigation = useNavigation<StackTypes>();

    const {signIn, loadingAuth} = useContext(AuthContext);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function handleLogin(){
        signIn(email, password);
    }

    return (
        <Background>
        <Container>

            <AreaInput>
                <Input
                    placeholder="Seu email"
                    value={email}
                    onChangeText={ (text) => setEmail(text) }
                />
            </AreaInput>

            <AreaInput>
                <Input
                    placeholder="Sua senha"
                    value={password}
                    onChangeText={ (text) => setPassword(text) }
                    secureTextEntry={true}
                />
            </AreaInput>

            <SubmitButton onPress={handleLogin}>
                {loadingAuth ? (
                    <ActivityIndicator size={20} color="#FFF" />
                ) : (
                    <SubmitText>Logar</SubmitText>  
                )}
            </SubmitButton>
            
        </Container>
        </Background>
    );
}