import { ChangeEventHandler } from 'react';
import { TStateInputValue } from '@pages/app/types';

export type THandleUpdateValue = (
  value: TStateInputValue
) => ChangeEventHandler<HTMLInputElement> | void;

export type TInputRef = HTMLInputElement | null;

export interface IProps {
  name: string;
  label: string;
  value: TStateInputValue;
  handleUpdateValue: THandleUpdateValue;
}
