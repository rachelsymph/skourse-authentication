import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import routes from '../constants/routes';
import { AccountContext } from '../context/AccountContext';

type Props = {};

export default function LoginSuccess(props: Props) {
  const { user, fetchUser } = useContext(AccountContext);

  useEffect(() => {
    fetchUser();
  }, []);

  if (user) {
    return <Container>Login is successful</Container>;
  } else {
    return <Container>Logging in</Container>;
  }
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
