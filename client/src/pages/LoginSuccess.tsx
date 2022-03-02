import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from '../hooks/useAuth';

type Props = {};

export default function LoginSuccess(props: Props) {
  return <Container>Login is successful</Container>;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
