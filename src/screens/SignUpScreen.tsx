import React, { useState, useContext } from 'react'
import { ActivityIndicator } from 'react-native';
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

export default function SignUpScreen() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { signUp, loadingAuth } = useContext(AuthContext);

  function handleSignUp(){
    if(name === '' || email === '' || password === '') {
      return;
    }
    signUp(email, password, name);
  }

  return (
    <Background>
      <Container>

        <AreaInput>
          <Input
            placeholder="Seu Nome"
            value={name}
            onChangeText={ (text) => setName(text) }
          />
        </AreaInput>

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

        <SubmitButton onPress={handleSignUp} >
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color={'#fff'}/>
            ) : (
              <SubmitText>Cadastrar</SubmitText>  
            )
          }
        </SubmitButton>
          
      </Container>
    </Background>
  );
}