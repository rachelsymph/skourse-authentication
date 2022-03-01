import { Button } from 'antd';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { logout } from '../api/AccountApi';
import routes from '../constants/routes';
import { AccountContext } from '../context/AccountContext';

type Props = {};

export default function WelcomePage(props: Props) {
  const { user, setUser } = useContext(AccountContext);
  const navigate = useNavigate();

  async function handleClickSignout() {
    await logout();
    setUser(null);
    navigate(routes.LOGIN, { replace: true });
  }

  useEffect(() => {
    if (!user) {
      navigate(routes.LOGIN_ERROR, { replace: true });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      Welcome {user?.fullName}
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
