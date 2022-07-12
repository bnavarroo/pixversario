import React, { memo } from 'react';
import { ReactComponent as GithubLogo } from '@assets/img/github-logo.svg';
import { ReactComponent as LinkedinLogo } from '@assets/img/linkedin-logo.svg';
import { defaultLinkProps } from './helpers';
import * as Styled from './styles';

export const FooterComponent: React.FC = () => (
  <Styled.Container className="no-pseudo">
    <Styled.DevelopByText>
      Desenvolvido por <b>Bruno Navarro</b>
    </Styled.DevelopByText>
    <Styled.ImagesWrapper>
      <Styled.ImageContent
        href="https://github.com/bnavarroo"
        {...defaultLinkProps}
      >
        <GithubLogo />
        <span>/bnavarroo</span>
      </Styled.ImageContent>
      <Styled.ImageContent
        href="https://www.linkedin.com/in/bruno-navarro-oliveira/"
        {...defaultLinkProps}
      >
        <LinkedinLogo />
        <span>/bruno-navarro-oliveira</span>
      </Styled.ImageContent>
    </Styled.ImagesWrapper>
  </Styled.Container>
);

export default memo(FooterComponent);
