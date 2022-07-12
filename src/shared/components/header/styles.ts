import styled from 'styled-components';
import { ReactComponent as LogoSvg } from '@assets/img/pix-logo.svg';
import { ReactComponent as PartySvg } from '@assets/img/party-ballon.svg';

export const Header = styled.header`
  font-size: 1.8rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.min}) {
    font-size: 2.5rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled(LogoSvg)`
  width: 3em;
  pointer-events: none;
`;

export const Title = styled.h1`
  position: relative;
  font-size: 1em;
  padding-right: 1em;

  b {
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`;

export const PartyIcon = styled(PartySvg)`
  position: absolute;
  bottom: 25%;
  right: 3.75%;
  width: 1.38em;
  transform: rotate(8deg);

  .first-ballon {
    fill: ${({ theme }) => theme.colors.secondary};
  }

  .second-ballon {
    fill: #b7b7a7;
  }

  .thirty-ballon {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;
