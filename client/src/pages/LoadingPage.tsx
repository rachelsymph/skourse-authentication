import { Spin } from 'antd';
import React from 'react';
import styled from 'styled-components';

type Props = {};

export default function LoadingPage(props: Props) {
  return (
    <Fullscreen>
      <Spin size='large' />
    </Fullscreen>
  );
}

const Fullscreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  img {
    transform: scale(0.5);
  }
`;
