import { Button } from 'antd';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { logout } from '../api/AccountApi';
import routes from '../constants/routes';
import { AccountContext } from '../context/AccountContext';
import { useAuth } from '../hooks/useAuth';

type Props = {};

export default function WelcomePage(props: Props) {
  let auth = useAuth();
  let navigate = useNavigate();

  function handleClickSignout() {
    auth.signout(() => navigate('/'));
  }

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <Container>
      <p>Welcome {auth.user.fullName}! </p>
      <Button onClick={handleClickSignout}>Logout</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
`;
