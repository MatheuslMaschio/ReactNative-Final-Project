import React, { useState } from 'react'
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

export default function SignInScreen() {
    const navigation = useNavigation<StackTypes>();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

            <SubmitButton onPress={() => navigation.navigate('Home')}>
                <SubmitText>Logar</SubmitText>  
            </SubmitButton>
            
        </Container>
        </Background>
    );
}