import React, {useState} from 'react';
import {useAppContext} from '../../contexts/app';

import {
  Container,
  CardContainer,
  Input,
  Button,
  TextButton,
  TextError,
} from './styles';

export const Login = () => {
  const {actions} = useAppContext();

  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = () => {
    if (!!text.trim()) {
      actions.login(text).then(response => {
        if (!response.success) {
          setError(response.message);
          setTimeout(() => {
            setError('');
          }, 2500);
        }
      });
    }
  };
  return (
    <Container>
      <CardContainer>
        <Input
          value={text}
          onChangeText={setText}
          placeholder="Type your secret key"
        />
        {error ? <TextError>{error}</TextError> : null}
        <Button onPress={handleSubmit}>
          <TextButton>Login</TextButton>
        </Button>
      </CardContainer>
    </Container>
  );
};
