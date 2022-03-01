import React, { useContext, useEffect } from 'react';
import GoogleButton from 'react-google-button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AccountContext } from '../context/AccountContext';
import routes from '../constants/routes';

type Props = {};

export default function LoginPage(props: Props) {
  const navigate = useNavigate();
  const { user, isLoading, fetchUser } = useContext(AccountContext);

  useEffect(() => {
    if (user) {
      navigate(routes.WELCOME, { replace: true });
    }
  }, [navigate, user]);

  const fetchAuthUser = async () => {
    fetchUser();
  };

  const redirectToGoogleSSO = async () => {
    let timer: NodeJS.Timeout | null = null;
    const googleLoginURL = 'http://localhost:8000/api/v1/login/google';
    const newWindow = window.open(
      googleLoginURL,
      '_blank',
      'width=500,height=600'
    );
    await fetchAuthUser();

    if (newWindow) {
      timer = setInterval(async () => {
        if (newWindow.closed) {
          console.log("Yay we're authenticated");
          if (timer) clearInterval(timer);
        }
      }, 500);
    }
  };

  return (
    <Container>
      <GoogleButton onClick={redirectToGoogleSSO} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
