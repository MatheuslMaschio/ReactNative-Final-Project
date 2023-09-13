import React, { useState, useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import { Background, Container, AreaInput, Input, SubmitButton, SubmitText, InputLabel, CenteredContent } from '../Styles/StyleSignInUpScreen';
import { AuthContext } from '../contexts/auth';

export default function SignUpScreen() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { signUp, loadingAuth } = useContext(AuthContext);

  function handleSignUp() {
    if (name === '' || email === '' || password === '') {
      return;
    }
    signUp(email, password, name);
  }

  return (
    <Background>
      <Container>
        <CenteredContent>
          <InputLabel>Your Name</InputLabel>
          <AreaInput>
            <Input
              placeholder="Your Name"
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </AreaInput>
        </CenteredContent>

        <CenteredContent>
          <InputLabel>Your Email</InputLabel>
          <AreaInput>
            <Input
              placeholder="Type your e-mail address"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </AreaInput>
        </CenteredContent>

        <CenteredContent>
          <InputLabel>Your Password</InputLabel>
          <AreaInput>
            <Input
              placeholder="Type your password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
            />
          </AreaInput>
        </CenteredContent>

        <CenteredContent>
          <SubmitButton onPress={handleSignUp}>
            {loadingAuth ? (
              <ActivityIndicator size={20} color="#fff" />
            ) : (
              <SubmitText>Cadastrar</SubmitText>
            )}
          </SubmitButton>
        </CenteredContent>
      </Container>
    </Background>
  );
}
