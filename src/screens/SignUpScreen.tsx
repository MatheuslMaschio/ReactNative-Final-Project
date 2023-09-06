import React, { useState } from 'react'
import { 
  Background, 
  Container, 
  AreaInput, 
  Input, 
  SubmitButton, 
  SubmitText, 
} from '../Styles/StyleSignUpScreen';

import firebase from '../dataBase/firebaseConnection';


import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../routes/auth.routes';

export default function SignUpScreen() {
  const navigation = useNavigation<StackTypes>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // async function signUp(){
  //   await firebase.auth().createUserWithEmailAndPassword(email, password);
  // }

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

        <SubmitButton onPress={() => navigation.navigate('SignIn')} >
            <SubmitText>Cadastrar</SubmitText>  
        </SubmitButton>
          
      </Container>
    </Background>
  );
}