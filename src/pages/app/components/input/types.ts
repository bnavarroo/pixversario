import { ChangeEventHandler } from 'react';
import { TStateInputValue } from '@pages/app/types';

export interface IProps {
  name: string;
  label: string;
  value: TStateInputValue;
  handleUpdateValue: (
    value: TStateInputValue
  ) => ChangeEventHandler<HTMLInputElement> | void;
}
