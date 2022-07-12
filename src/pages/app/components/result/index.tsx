import React from 'react';
import { IProps } from './types';
import * as Styled from './styles';

export const Result: React.FC<IProps> = ({ error, pixValue }) => (
  <Styled.Wrapper>
    {error && <Styled.Error>{error}</Styled.Error>}
    {pixValue > 0 && !error && (
      <Styled.Text>
        <span>o pix será de </span>
        <b>
          R$ {pixValue.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
        </b>
      </Styled.Text>
    )}
  </Styled.Wrapper>
);

export default Result;
