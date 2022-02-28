import React from 'react';
import styled from 'styled-components';

type Props = {};

export default function WelcomePage(props: Props) {
  return <Container>Welcome</Container>;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
