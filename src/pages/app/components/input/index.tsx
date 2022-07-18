import React, { useState, useRef } from 'react';
import { fmtValueToLocaleString } from '@pages/app/helpers';
import { IProps, TInputRef } from './types';
import { handleChange, handleOnFocus, handleOnBlur } from './helpers';
import * as Styled from './styles';

export const Input: React.FC<IProps> = ({
  name,
  label,
  value,
  handleUpdateValue,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const ref = useRef<TInputRef>(null);

  return (
    <Styled.Wrapper>
      <label htmlFor={name}>
        <b>R$</b>
        &nbsp;
        {label}
      </label>
      <Styled.InputWrapper $isFocused={isFocused}>
        <input
          ref={ref}
          name={name}
          type="number"
          value={value}
          onChange={(e) => handleChange(e, handleUpdateValue)}
          onBlur={handleOnBlur(setIsFocused)}
        />
        <span onClick={handleOnFocus(ref, setIsFocused)} aria-hidden="true">
          {fmtValueToLocaleString(value as number)}
        </span>
      </Styled.InputWrapper>
    </Styled.Wrapper>
  );
};

export default Input;
