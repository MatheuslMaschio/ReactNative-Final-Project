import React, { useContext, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Background, Container, AreaInput, Input, SubmitButton, SubmitText, InputLabel, CenteredContent } from '../Styles/StyleSignInUpScreen'; // Importe InputLabel

import { AuthContext } from '../contexts/auth';

export default function SignInScreen() {
    const { signIn, loadingAuth } = useContext(AuthContext);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function handleLogin() {
        signIn(email, password);
    }

    return (
        <Background>
            <Container>
                <CenteredContent>
                    <InputLabel>E-MAIL</InputLabel> 
                    <AreaInput>
                        <Input
                            placeholder="Your e-mail address"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </AreaInput>
                </CenteredContent>
        
                <CenteredContent>
                    <InputLabel>PASSWORD</InputLabel> 
                    <AreaInput>
                        <Input
                            placeholder="Your password"
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={true}
                        />
                    </AreaInput>
                </CenteredContent>
        
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
