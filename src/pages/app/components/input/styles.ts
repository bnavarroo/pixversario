import styled, { css } from 'styled-components';
import { flexColumnCenter } from '@styles/ui/flex';

export const Wrapper = styled.div`
  ${flexColumnCenter}
  gap: 8px;
  margin-top: 0.75em;
  font-size: 16px;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.tablet.min}) {
      font-size: 18px;
    }
  `}
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  max-width: 9em;
  border-radius: 4px;
  border: 1px solid #ddd;
  padding: 6px 12px;
  outline: none;
  text-align: center;
  font-size: 1em;
`;
