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
            placeholder="Your Name"
            value={name}
            onChangeText={ (text) => setName(text) }
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Type your e-mail address"
            value={email}
            onChangeText={ (text) => setEmail(text) }
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Type your password"
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