import React, { ChangeEvent } from 'react';
import { IProps } from './types';
import { fmtValue } from './helpers';
import * as Styled from './styles';

export const Input: React.FC<IProps> = ({
  name,
  label,
  value,
  handleUpdateValue,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    handleUpdateValue(fmtValue(e?.target?.value));

  return (
    <Styled.Wrapper>
      <label htmlFor={name}>
        <b>R$</b>
        &nbsp;
        {label}
      </label>
      <Styled.Input
        name={name}
        type="number"
        value={value}
        onChange={handleChange}
      />
    </Styled.Wrapper>
  );
};

export default Input;
