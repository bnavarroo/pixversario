import React from 'react';
import { fmtValueToLocaleString } from '@pages/app/helpers';
import { IProps } from './types';
import * as Styled from './styles';

export const Result: React.FC<IProps> = ({ error, pixValue }) => (
  <Styled.Wrapper>
    {error && <Styled.Error>{error}</Styled.Error>}
    {pixValue > 0 && !error && (
      <Styled.Text>
        <span>o pix será de </span>
        <b>R$ {fmtValueToLocaleString(pixValue)}</b>
      </Styled.Text>
    )}
  </Styled.Wrapper>
);

export default Result;
