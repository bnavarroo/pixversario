import React from 'react';
import * as Styled from './styles';

export const Header: React.FC = () => (
  <Styled.Header>
    <Styled.Wrapper>
      <Styled.Logo />
      <Styled.Title>
        <b>PIX</b>versário
        <Styled.PartyIcon />
      </Styled.Title>
    </Styled.Wrapper>
  </Styled.Header>
);

export default Header;
