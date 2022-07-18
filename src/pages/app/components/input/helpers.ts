/* eslint-disable prettier/prettier */
import { Dispatch, SetStateAction, ChangeEvent, MutableRefObject } from 'react';
import { THandleUpdateValue, TInputRef } from './types';

const fmtValue = (value: string) => (value.length > 0 ? parseFloat(value) : '');

export const handleChange = (
  e: ChangeEvent<HTMLInputElement>,
  handleUpdateValue: THandleUpdateValue
) => handleUpdateValue(fmtValue(e?.target?.value));

export const handleOnFocus = (ref: MutableRefObject<TInputRef>, setState: Dispatch<SetStateAction<boolean>> ) =>
  () => {
    ref?.current?.focus();
    setState(true);
  };

export const handleOnBlur = (setState: Dispatch<SetStateAction<boolean>> ) =>
  () => {
    setState(false);
  };
