import React from 'react';
import { 
    Container, 
    Image, 
    SubTitle, 
    SubmitButton, 
    TextButton, 
    TextContainer, 
    Title 
} from '../Styles/StyleInitialScreen';

import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../routes/auth.routes';

export default function InitialScreen() {
    const navigation = useNavigation<StackTypes>();

    return (
        <Container>
            <Image 
                source={require('../../assets/bg.png')}
                resizeMode="cover"
            />

            <TextContainer>
                <Title>Plant {'\n'}Paradise</Title>

                <SubTitle>Find your favorite plants and {'\n'}help the environment</SubTitle>

                <SubmitButton 
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <TextButton>Sign In</TextButton>
                </SubmitButton>

                <SubmitButton onPress={() => navigation.navigate('SignUp')}>
                    <TextButton>Sign Up</TextButton>
                </SubmitButton>
            </TextContainer>
        </Container>
    );
}

