import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import routes from '../constants/routes';

export default function ErrorLoginPage() {
  const navigate = useNavigate();

  return (
    <Container>
      Needs to Login
      <Button
        onClick={() => {
          navigate(routes.LOGIN, { replace: true });
        }}
      >
        Click here to login
      </Button>
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
