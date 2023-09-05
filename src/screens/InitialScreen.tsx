import React from 'react'
import { 
    Container, 
    Image, 
    SubTitle, 
    SubmitButton, 
    TextButton, 
    TextContainer, 
    Title 
} from '../Styles/StyleInitialScreen'

export default function InitialScreen() {
    return (
        <Container >
            <Image 
                source={require('../../assets/bg.png')}
                resizeMode="cover"
            />

            <TextContainer >
                <Title>Plant {'\n'}Paradise </Title>

                <SubTitle >Find your favoriteplants and  {'\n'}help the environment </SubTitle>
                

                <SubmitButton>
                    <TextButton> Sign In</TextButton>
                </SubmitButton>

                <SubmitButton>
                    <TextButton> Sign Up</TextButton>
                </SubmitButton>
                
            </TextContainer>

        </Container>
    ) 
}

