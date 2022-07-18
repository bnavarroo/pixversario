import styled, { css } from 'styled-components';
import { flexColumnCenter } from '@styles/ui/flex';

const inputTextStyle = css`
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  padding: 6px 12px;
  text-align: center;
  font-size: 1em;
  cursor: text;
`;

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

export const InputWrapper = styled.div<{ $isFocused: boolean }>`
  position: relative;
  border: 1px solid #ddd;
  border-radius: 4px;

  input {
    ${inputTextStyle}
    border: none;
    max-width: 9em;
    outline: none;
    opacity: ${({ $isFocused }) => ($isFocused ? 1 : 0)};
  }

  span {
    ${inputTextStyle}
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    line-height: 1.25em;
    opacity: ${({ $isFocused }) => ($isFocused ? 0 : 1)};
  }
`;
