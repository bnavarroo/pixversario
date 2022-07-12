import styled, { css } from 'styled-components';
import { ContainerBox } from '@styles/ui/container';
import { flexCenter, flexColumnCenter } from '@styles/ui/flex';

export const Container = styled(ContainerBox)`
  ${flexColumnCenter}
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  ${flexColumnCenter}
  width: 100%;
  ${({ theme }) => css`
    min-height: calc(100vh - ${theme.footer.height.mobile});
    @media (min-width: ${theme.breakpoints.tablet.min}) {
      min-height: calc(100vh - ${theme.footer.height.desktop});
    }
  `}
`;

export const Main = styled.main`
  ${flexCenter}
  flex-wrap: wrap;
  gap: 20px;
  text-align: center;
`;

export const InputWrapper = styled.div`
  ${flexCenter}
  gap: 16px;
  width: 100%;
`;

export const Button = styled.button`
  width: 100%;
  max-width: 350px;
  height: 50px;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.text.onPrimary};
  `}

  &:disabled {
    opacity: 0.5;
    cursor: no-drop;
  }
`;
